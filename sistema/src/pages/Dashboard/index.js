import { format } from 'date-fns';
import { useEffect, useState } from "react";
import { FiEdit, FiMessageSquare, FiPlus, FiSearch} from "react-icons/fi";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import Modal from "../../components/Modal";
import Title from "../../components/Title";
import firebase from "../../services/fireBaseConnection";
import './dashboard.css';

const listRef = firebase.firestore().collection('chamados').orderBy('status', "asc");

export default function Dashboard(){
    const [chamados, setChamados] = useState([]);
    const [loading, setLoading] = useState(true);
    const [loadingMore, setLoadingMore] = useState(false);
    const [isEmpty, setIsEmpty] = useState(false);
    const [lastDocs, setLastDocs] = useState();
    const [showPostModal, setShowPostModal] = useState(false);
    const [detail, setDetail] = useState();

    useEffect(() => {
        async function loadChamados(){
            await listRef.limit(5).get()
            .then((snapshot) => {
                updateState(snapshot)
            })
            .catch((err) => {
                console.log(err);
                setLoadingMore(false);
            });

            setLoading(false);
        }

        loadChamados();

        return () => {};
    }, []);

    async function updateState(snapshot){
        const isCollectionEmpty = snapshot.size === 0;

        if(!isCollectionEmpty){
            let lista = [];

            snapshot.forEach((doc) => {
                lista.push({
                    id:doc.id,
                    assunto: doc.data().assunto,
                    cliente: doc.data().cliente,
                    clienteId: doc.data().clienteId,
                    created: doc.data().created,
                    createdFormated: format(doc.data().created.toDate(), 'dd/MM/yyyy'),
                    status: doc.data().status,
                    complemento: doc.data().complemento
                })
            })

            const lastDoc = snapshot.docs[snapshot.docs.length - 1];

            setChamados(chamados => [...chamados, ...lista]);
            setLastDocs(lastDoc);
        }else{
            setIsEmpty(true);
        }
        setLoadingMore(false);
    }

    async function handleMore(){
        setLoadingMore(true);
        await listRef.startAfter(lastDocs).limit(5).get()
        .then((snapshot) => {
            updateState(snapshot);
        })
    }

    function togglePostModal(item){
        setShowPostModal(!showPostModal);
        setDetail(item);
    }

    if(loading){
        return(
            <div>
                <Header></Header>
                <div className="content">
                    <Title name="Atendimentos">
                        <FiMessageSquare size={25}></FiMessageSquare>
                    </Title>

                    <div className="container dashboard">
                        <span>Buscando chamados...</span>
                    </div>
                </div>
            </div>
        )
    }

    return(
        <div>
            <Header></Header>
            <div className="content">
                <Title name="Atendimentos">
                    <FiMessageSquare size={25}></FiMessageSquare>
                </Title>

                {chamados.length === 0 ? (
                    <div className="container dashboard">
                        <span>Nenhum Chamado Registrado...</span>
                        <Link to="/new" className="new">
                            <FiPlus size={25} color="white"></FiPlus>
                            Novo Chamado
                        </Link>
                    </div>
                ) : (
                    <>
                        <Link to="/new" className="new">
                            <FiPlus size={25} color="white"></FiPlus>
                            Novo Chamado
                        </Link>

                        <table>
                            <thead>
                                <tr>
                                    <th scope="col">Cliente</th>
                                    <th scope="col">Assunto</th>
                                    <th scope="col">Status</th>
                                    <th scope="col">Cadastrado em</th>
                                    <th scope="col">Ações</th>
                                </tr>
                            </thead>
                            <tbody>
                                {chamados.map((item, index) => {
                                    return(
                                        <tr key={index}>
                                            <td data-label="Cliente">{item.cliente}</td>
                                            <td data-label="Assunto">{item.assunto}</td>
                                            <td data-label="Status">
                                                <span className="Badge" style={{ backgroundColor: item.status === 'Aberto' ? '#5cb85c' : '#999' && item.status === 'Atendido' ? '#999' : '#f6a935'}}>{item.status}</span>
                                            </td>
                                            <td data-label="Cadastrado">{item.createdFormated}</td>
                                            <td data-label="Ações">
                                                <button className="action" style={{backgroundColor: '#3583f6'}} onClick={() => togglePostModal(item)}>
                                                    <FiSearch color="white" size={17}></FiSearch>
                                                </button>
                                                <Link to={`/new/${item.id}`} className="action" style={{backgroundColor: '#f6a935'}}>
                                                    <FiEdit color="white" size={17}></FiEdit>
                                                </Link>
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                        {loadingMore && <h3 style={{textAlign: 'center', marginTop: 15}}>Buscando Dados...</h3>}
                        { !loadingMore && !isEmpty && <button className="btn-more" onClick={handleMore}>Buscar mais <FiSearch></FiSearch></button>}
                    </>
                )}
            </div>
            {showPostModal && (
                <Modal conteudo={detail} close={togglePostModal}></Modal>
            )}
        </div>
    )
}


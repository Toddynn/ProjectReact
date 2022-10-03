import { useContext, useEffect, useState } from 'react';
import { FiPlusCircle } from 'react-icons/fi';
import { useHistory, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import Header from '../../components/Header';
import Title from '../../components/Title';
import { AuthContext } from '../../contexts/auth';
import firebase from '../../services/fireBaseConnection';
import './new.css';


export default function New(){
    const {id} = useParams();
    const history = useHistory();
    const [customerSelected, setCustomerSelected] = useState(0);
    const [loadCustomers, setLoadCustomers] = useState(true);
    const [customers, setCustomers] = useState([]);
    const [assunto, setAssunto] = useState('Suporte');
    const [status, setStatus] = useState('Aberto');
    const [complemento, setComplemento] = useState('');
    const { user } = useContext(AuthContext);
    const [idCustomer, setIdCustomer] = useState(false);

    useEffect(()=>{
        async function loadCustomers(){
            await firebase.firestore().collection('customers').get()
            .then((snapshot) => {
                let lista = [];

                snapshot.forEach((doc) => {
                    lista.push({
                        id: doc.id,
                        nomeCliente: doc.data().nomeCliente
                    })
                })

                if(lista.length === 0){
                    console.log('nenhum dado encontrado');
                    setCustomers([{id: '1', nomeCliente:'fernander'}]);
                    setLoadCustomers(false);
                    return;
                }

                setCustomers(lista);
                setLoadCustomers(false);

                if(id){
                    loadId(lista);
                }
            })
            .catch((err)=> {
                console.log(err);
                setLoadCustomers(false);
                setCustomers([{id: 1, nomeCliente: ''}]);
            })
        };

        async function loadId(lista){
            await firebase.firestore().collection('chamados').doc(id).get()
            .then((snapshot) => {
                setAssunto(snapshot.data().assunto);
                setStatus(snapshot.data().status);
                setComplemento(snapshot.data().complemento);
    
                let index = lista.findIndex(item => item.id === snapshot.data().clienteId);
                setCustomerSelected(index);
                setIdCustomer(true);
    
            })
            .catch((err)=>{
                console.log("cliente não existe", err)
                setIdCustomer(false);
            })
        }

        loadId()
        loadCustomers();
    }, []);

    //troca de cliente
    function handleChangeCustomers(e){
        console.log('index do cliente selecionado', e.target.value);
        console.log('Cliente selecionado', customers[e.target.value]);
        setCustomerSelected(e.target.value);
    }
    //Status do pedido
    function handleOptionChange(e){
        setStatus(e.target.value);
    }

    //Assunto do pedido
    function handleChangeSelect(e){
        setAssunto(e.target.value);
    }

    async function handleRegister(event){
        event.preventDefault();

        if(idCustomer){
            await firebase.firestore().collection('chamados').doc(id)
            .update({
                cliente: customers[customerSelected].nomeCliente,
                clienteId: customers[customerSelected].id,
                assunto: assunto,
                status: status,
                complemento: complemento,
                userId: user.uid
            })
            .then(() => {
                toast.success("chamado editado com sucesso!");
                setCustomerSelected(0);
                setComplemento('');
                history.push('/dashboard');
            })
            .catch((err) => {
                toast.error("erro ao editar");
            })
            return;
        }

        await firebase.firestore().collection('chamados').add({
            created: new Date(),
            cliente: customers[customerSelected].nomeCliente,
            clienteId: customers[customerSelected].id,
            assunto: assunto,
            status: status,
            complemento: complemento,
            userId: user.uid
        })
        .then(() => {
            toast.success("Chamado realizado com sucesso");
            setComplemento('');
            setCustomerSelected(0);
            history.push('/dashboard');
        })
        .catch((err) => {
            console.log(err);
            toast.error("Ops, erro ao registrar...")
        })
    }

    return(
        <div>
            <Header></Header>

            <div className='content'>
                <Title name="Novo Chamado">
                    <FiPlusCircle size={25}></FiPlusCircle>
                </Title>

                <div className='container'>
                    <form className='form-profile' onSubmit={handleRegister}>
                        <label>Cliente</label>
                        {loadCustomers ? (
                            <input type="text" disabled={true} value="Carregando clientes..."></input>
                        ) : (
                            <select value={customerSelected} onChange={handleChangeCustomers}>
                                {customers.map((item, index) => {
                                    return(
                                        <option key={item.id} value={index}> { item.nomeCliente } </option>
                                    )
                                })}
                            </select>
                        )}
                        
                        <label>Assunto</label>
                        <select value={assunto} onChange={handleChangeSelect}>
                            <option value="Suporte"> Suporte </option>
                            <option value="Financeiro"> Financeiro </option>
                            <option value="Visita Tecnica"> Visita Técnica </option>
                        </select>
                        <label>Status</label>
                            <div className='status'>
                                <label>
                                    <input type="radio" name="radio" value="Aberto" onChange={handleOptionChange} checked={ status === 'Aberto'}></input>
                                    <span>Em aberto</span>
                                </label>
                                
                                <label>
                                    <input type="radio" name="radio" value="Progresso" onChange={handleOptionChange} checked={ status === 'Progresso'}></input>
                                    <span>Progresso</span>
                                </label>
                                <label>
                                    <input type="radio" name="radio" value="Atendido" onChange={handleOptionChange} checked={ status === 'Atendido'}></input>
                                    <span>Atendido</span>
                                </label>
                            </div>
                        <label>Complemento</label>
                        <textarea type="text" placeholder='Descreva seu problema (opcional)' onChange={ (e) => setComplemento(e.target.value)}></textarea>
                        <button type='submit'>Registrar</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
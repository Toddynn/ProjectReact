import { useState } from 'react';
import { FiUser, FiX } from 'react-icons/fi';
import { toast } from 'react-toastify';
import Header from '../../components/Header';
import Title from '../../components/Title';
import firebase from '../../services/fireBaseConnection';
import './customers.css';

export default function Customers(){
    const [nomeCliente, setNomeCliente] = useState('');
    const [cpf, setCPF] = useState('');
    const [endereco, setEndereco] = useState('');
    const [pessoas, setPessoas] = useState([]);
    var table = document.getElementById('table');
    var title = document.getElementById('title');
    var close = document.getElementById('close');

    async function handleListUsers(e){
        e.preventDefault();

        await firebase.firestore().collection('customers')
        .get()
        .then((snapshot) => {
            let lista = [];
            snapshot.forEach((doc) => {
                lista.push({
                    id: doc.id,
                    nomeCliente: doc.data().nomeCliente,
                    endereco: doc.data().endereco,
                    cpf: doc.data().cpf
                })
            })
            setPessoas(lista);
        })
        .catch((err)=>{
            console.log(err);
        })
        table.setAttribute("style", "visibility: visible");
        title.setAttribute("style", "visibility: visible");
        close.setAttribute("style", "visibility: visible");
    };

    async function handleAdd(event){
        event.preventDefault();

        if(nomeCliente !== '' && cpf !== '' && endereco !== ''){
            await firebase.firestore().collection('customers')
            .add({
                nomeCliente: nomeCliente,
                cpf: cpf,
                endereco: endereco
            })
            .then(() => {
                setNomeCliente('');
                setCPF("");
                setEndereco("");
                toast.info("Cliente cadastrado com sucesso!");
            })
            .catch((err) => {
                console.log(err);
                toast.error("Erro ao cadastrar cliente")
            })
        }else{
            toast.error("Preencha todos os campos!");
        }
    }

    return(
        <div>
            <Header></Header>
            <div className='content'>
                <Title name="Clientes">
                    <FiUser size={25}></FiUser>
                </Title>

                <div className='container'>
                    <form className='form-profile customers' onSubmit={handleAdd}>
                        <label>Nome cliente</label>
                        <input type="text" placeholder="Nome do cliente" value={nomeCliente} onChange={(e) => setNomeCliente(e.target.value)}></input>
                        <label>Endereço Cliente</label>
                        <input type="text" placeholder="Endereço do cliente" value={endereco} onChange={(e) => setEndereco(e.target.value)}></input>
                        <label>CPF cliente</label>
                        <input type="text" placeholder="CPF do cliente" value={cpf} onChange={(e) => setCPF(e.target.value)}></input>

                        <button type='submit'>Cadastrar</button>
                        <button onClick={handleListUsers}>Ver Clientes</button>
                    </form>
                    <div className='container-table'>
                        <div className='row-table'>
                            <div className='col-table'>
                                <h1 id='title'>Tabela de Clientes</h1>
                            </div>
                            <div className='col-table botao'>
                                <button id="close" className='fecha' onClick={()=>{table.setAttribute('style', 'visibility: hidden');
                                                                                    title.setAttribute('style', 'visibility: hidden');
                                                                                    close.setAttribute('style', 'visibility: hidden');}}><FiX></FiX></button>
                            </div>
                        </div>
                        <table id="table" style={{display: 'none'}}>
                            <thead>
                                <tr>
                                    <th scope="col">Nome</th>
                                    <th scope="col">Endereço</th>
                                    <th scope="col">CPF</th>
                                </tr>
                            </thead>
                            <tbody>
                            {pessoas.map((lista, index) => {
                                return(
                                    <tr key={index}>
                                        <td data-label="Nome">{lista.nomeCliente}</td>
                                        <td data-label="Endereço">{lista.endereco}</td>
                                        <td data-label="CPF">{lista.cpf}</td>
                                    </tr>
                                )
                            })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
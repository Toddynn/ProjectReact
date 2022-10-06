import './customers.css';
import Header from '../../components/Header';
import Title from '../../components/Title';
import { FiUser } from 'react-icons/fi';
import { useState} from 'react';
import firebase from '../../services/fireBaseConnection';
import { toast } from 'react-toastify';

export default function Customers(){
    const [nomeCliente, setNomeCliente] = useState('');
    const [cpf, setCPF] = useState('');
    const [endereco, setEndereco] = useState('');
    const [pessoas, setPessoas] = useState('');

    async function handleListUsers(e){
        e.preventDefault();
        await firebase.firestore().collection('customers').get()
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
            console.log(pessoas)
        })
        .catch((err)=>{
            console.log(err);
        })

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

                        <button type='submit'>Cadastrar</button><br></br>
                        <button onClick={handleListUsers}>Ver Clientes</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
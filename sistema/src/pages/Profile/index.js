import './profile.css';
import Header from '../../components/Header';
import Title from '../../components/Title';
import { useState, useContext } from 'react';
import { AuthContext } from '../../contexts/auth';
import Avatar from '../../assets/avatar.png';
import firebase from '../../services/fireBaseConnection';

import {FiSettings, FiUpload} from 'react-icons/fi';
import { toast } from 'react-toastify';

export default function Profile(){
    const { user, signOut, setUser, storageUser } = useContext(AuthContext);

    const [nome, setNome] = useState(user && user.nome);
    const [email, setEmail] = useState(user && user.email);
    const [avatarUrl, setAvatarUrl] = useState(user && user.avatarUrl);
    const [imageAvatar, setImageAvatar] = useState(null)


    function handleFile(e){
        if(e.target.files[0]){
            const image = e.target.files[0];

            if(image.type === 'image/jpeg' || image.type === 'image/png'){
                setImageAvatar(image);
                setAvatarUrl(URL.createObjectURL(e.target.files[0]))
            }else{
                toast.error('envie uma imagem do tipo PNG ou JPEG');
                setImageAvatar(null);
                return null;
            }
        }
    }

    async function handleUpload(){
        const currentUid = user.uid;
        toast.info('Perfil atualizado com sucesso!');

        const uploadTask = await firebase.storage().ref(`images/${currentUid}/${imageAvatar.name}`)
        .put(imageAvatar)
        .then(async () => { 

            await firebase.storage().ref(`images/${currentUid}`)
            .child(imageAvatar.name).getDownloadURL()
            .then( async (url) => {
                let urlFoto = url;

                await firebase.firestore().collection('users').doc(user.uid)
                .update({
                    avatarUrl: urlFoto,
                    nome: nome
                })
                .then( () => { 
                    let data = {
                        ...user,
                        avatarUrl: urlFoto,
                        nome: nome
                    };

                    setUser(data);
                    storageUser(data);
                })
            })
        })
    }

    async function handleSave(event){
        event.preventDefault();
    
        if(imageAvatar === null && nome !== ''){
            await firebase.firestore().collection('users')
            .doc(user.uid)
            .update({
                nome: nome
            })
            .then( () => {
                let data = {
                    ...user,
                    nome: nome
                };

                setUser(data);
                storageUser(data);
            })
            .catch((err) => { console.log(err); });
        }
        else if(nome !== '' && imageAvatar !== null){
            handleUpload();
        }
    }

    return(
        <div>
            <Header></Header>
            
            <div className='content'>
                <Title name="Meu Perfil">
                    <FiSettings size={24}></FiSettings>
                </Title>

                <div className='container'>
                    <form className='form-profile' onSubmit={handleSave}>
                        <label className='label-avatar'>
                            <span>
                                <FiUpload color='white' size={25}></FiUpload>
                            </span>
                            <input type="file" accept="image/*" onChange={handleFile}></input><br></br>
                            { avatarUrl === null ? 
                                <img src={Avatar} width="250" alt="Foto Usuário"></img> 
                                : 
                                <img src={avatarUrl} width="250" alt="Foto Usuário"></img>}
                        </label>

                        <label>Nome</label>
                        <input type="text" value={nome} onChange={ (e) => setNome(e.target.value)}></input>

                        <label>Email</label>
                        <input type="text" value={email} disabled></input>

                        <button type='Submit'>Salvar</button>
                    </form>
                </div>

                <div className='container'>
                    <button className='logout-btn' onClick={() => signOut()}>Sair</button>
                </div>
            </div>
        </div>
    )
}
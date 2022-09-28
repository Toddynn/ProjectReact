import './profile.css';
import Header from '../../components/Header';
import Title from '../../components/Title';
import { useState, useContext } from 'react';
import { AuthContext } from '../../contexts/auth';
import Avatar from '../../assets/avatar.png';

import {FiSettings, FiUpload} from 'react-icons/fi';

export default function Profile(){
    const { user, signOut } = useContext(AuthContext);

    const [nome, setNome] = useState(user && user.name);
    const [email, setEmail] = useState(user && user.email);
    const [avatarUrl, setAvatarUrl] = useState(user && user.avatarUrl);

    return(
        <div>
            <Header></Header>
            
            <div className='content'>
                <Title name="Meu Perfil">
                    <FiSettings size={24}></FiSettings>
                </Title>

                <div className='container'>
                    <form className='form-profile'>
                        <label className='label-avatar'>
                            <span>
                                <FiUpload color='white' size={25}></FiUpload>
                            </span>
                            <input type="file" accept="image/*"></input><br></br>
                            { avatarUrl === null ? 
                                <img src={avatarUrl} width="250" alt="Foto Usuário"></img> 
                                : 
                                <img src={Avatar} width="250" alt="Foto Usuário"></img>}
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
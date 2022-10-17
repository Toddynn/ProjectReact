import { useContext } from 'react';
//icons
import { FiHome, FiSettings, FiUser } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import Avatar from '../../assets/avatar.png';
import { AuthContext } from '../../contexts/auth';
import './header.css';


export default function Header(){
    const {user} = useContext(AuthContext);

    return(
        <div className='sidebar'>
            <div>
                <img src={user.avatarUrl === null ? Avatar : user.avatarUrl} alt="foto avatar"></img>
                <h1>{user.nome}</h1>
            </div>

            <Link to="/dashboard"> 
                <FiHome color='white' size={24}></FiHome>
                Chamados 
            </Link>
            <Link to="/customers"> 
                <FiUser color='white' size={24}></FiUser>
                Clientes 
            </Link>
            <Link to="/profile"> 
                <FiSettings color='white' size={24}></FiSettings>
                Meu Perfil 
            </Link>
        </div>
    )
}
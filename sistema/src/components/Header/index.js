import { useContext } from 'react';
import './header.css';
import { AuthContext } from '../../contexts/auth';
import Avatar from '../../assets/avatar.png';
import { Link } from 'react-router-dom';

//icons
import {FiHome, FiUser, FiSettings} from 'react-icons/fi';

export default function Header(){
    const {user} = useContext(AuthContext);

    return(
        <div className='sidebar'>
            <div>
                <img src={user.avatar_url === null ? Avatar : user.avatar_url} alt="foto avatar"></img>
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
                Configurações 
            </Link>
        </div>
    )
}
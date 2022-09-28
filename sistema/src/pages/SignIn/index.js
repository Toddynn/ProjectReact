import './signin.css';
import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import {AuthContext} from '../../contexts/auth'

function SignIn(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { signIn, loadingAuth } = useContext(AuthContext);

    function handleSubmit(event){
        event.preventDefault();

        if(email !== '' && password !== ''){
            signIn(email, password);
        }

    }

    return(
        <div className='container-center'>
            <div className='login'>
                <div className='login-area'>
                    <h1>Pormade</h1>
                </div>

                <form onSubmit={handleSubmit}>
                    <h1>Entrar</h1>
                    <input type="text" name="emailarea" placeholder="seuemail@dominio.com" value={email} onChange={(e) => setEmail(e.target.value)}></input>
                    <input type="password" name="passwordarea" placeholder="******" value={password} onChange={(e) => setPassword(e.target.value)}></input>
                    <button type='submit'>{loadingAuth ? 'Carregando...' : 'Acessar'}</button>
                </form>

                <Link to="/register">Criar uma conta</Link>
            </div>
        </div>
    )
}

export default SignIn;
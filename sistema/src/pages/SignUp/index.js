import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/auth';


function SignUp(){
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { signUp, loadingAuth } = useContext(AuthContext);

    function handleSubmit(event){
        event.preventDefault();

        if(nome !== '' && email !== '' && password !== ''){
            signUp(email, password, nome);
        }

    }

    return(
        <div className='container-center'>
            <div className='login'>
                <div className='login-area'>
                    <h1>Pormade</h1>
                </div>

                <form onSubmit={handleSubmit}>
                    <h1>Cadastrar</h1>
                    <input type="text" name="namearea" placeholder="Nome" value={nome} onChange={(e) => setNome(e.target.value)}></input>
                    <input type="text" name="emailarea" placeholder="seuemail@dominio.com" value={email} onChange={(e) => setEmail(e.target.value)}></input>
                    <input type="password" name="passwordarea" placeholder="******" value={password} onChange={(e) => setPassword(e.target.value)}></input>
                    <button type='submit'>{loadingAuth ? 'Carregando...' : 'Cadastrar'}</button>
                </form>

                <Link to="/">Ja possuo uma conta</Link>
            </div>
        </div>
    )
}

export default SignUp;
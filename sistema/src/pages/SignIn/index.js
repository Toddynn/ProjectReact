import './signin.css';
import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import {AuthContext} from '../../contexts/auth'
import Logo from '../../assets/logoPetim_Branco 3.svg'
import Folinha from '../../assets/folinha.png';
import {AiOutlineEyeInvisible} from 'react-icons/ai';
import {TbMail} from 'react-icons/tb';

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

    function alterVisibility(event){
        event.preventDefault();

        var input = document.getElementById("password");

        if(input.type === 'password'){
            input.removeAttribute("type", "password");
            input.setAttribute("type", "text");
        }else{
            input.removeAttribute("type", "text");
            input.setAttribute("type", "password");
        }
    }

    return(
        <div className='container-center'>
            <div className='login'>
                {/* <div className='nav'>
                    <h1>Pormade</h1>
                    <span>
                        <img src={Folinha} height="27px" width="35px"></img>
                    </span>
                    <h3>Portas</h3>
                </div> */}
                <div className='login-logo'>
                    <figure>
                        <img src={Logo} alt="logo"></img>
                    </figure>
                </div>

                <form onSubmit={handleSubmit}>
                    <h1>Entrar</h1>
                    <label for="emailarea" className='email-label'>
                        <span>Endereço de Email</span>
                    </label>
                    <div className='input'>
                        <input className="inputEmail" type="text" name="emailarea" placeholder="seuemail@dominio.com" value={email} onChange={(e) => setEmail(e.target.value)}></input>
                        <a><TbMail className='icon'></TbMail></a>
                    </div>
                    <label for="passwordarea" className='password-label'>
                        <span>Senha</span>
                    </label>
                    <div className='input'>
                        <input className="inputPassword" id='password' type="password" name="passwordarea" placeholder="***************************" maxLength="25" size="25" value={password} onChange={(e) => setPassword(e.target.value)}></input>
                        <a className='icon' onClick={alterVisibility}><AiOutlineEyeInvisible ></AiOutlineEyeInvisible></a>
                    </div>
                    <button type='submit'>{loadingAuth ? 'Carregando...' : 'Acessar'}</button>
                </form>
                
                {/* <Link to="/register">Cadastrar</Link>  */}

            </div>
            <div className='container-waves'>
                <svg className='waves' xmlns="http://www.w3.org/2000/svg" href="http://www.w3.org/1999/xlink"
                viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">
                    <defs>
                        <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
                    </defs>
                    <g className="parallax">
                        <use href="#gentle-wave" x="35" y="12" fill="rgba(159,214,157,1)" />
                        <use href="#gentle-wave" x="50" y="13" fill="rgba(112,222,98,0.8)" />
                        <use href="#gentle-wave" x="25" y="14" fill="rgba(71,181,91,0.9)" />
                        <use href="#gentle-wave" x="10" y="13.5" fill="rgba(67,171,116,1)" />
                    </g>
                </svg>
            </div>
        </div>
    )
}

export default SignIn;


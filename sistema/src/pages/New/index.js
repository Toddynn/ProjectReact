import './new.css';
import Header from '../../components/Header';
import Title from '../../components/Title';
import { FiPlusCircle } from 'react-icons/fi';


export default function New(){

    async function handleRegister(event){
        event.preventDefault();
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
                        <select>
                            <option key={1} value={1}> arthurito </option>
                        </select>
                        <label>Assunto</label>
                        <select>
                            <option value="Suporte"> Suporte </option>
                            <option value="Financeiro"> Financeiro </option>
                            <option value="Visita Tecnica"> Visita Técnica </option>
                        </select>
                        <label>Status</label>
                            <div className='status'>
                                <label>
                                    <input type="radio" name="radio" value="Aberto"></input>
                                    <span>Em aberto</span>
                                </label>
                                
                                <label>
                                    <input type="radio" name="radio" value="Progresso"></input>
                                    <span>Progresso</span>
                                </label>
                                <label>
                                    <input type="radio" name="radio" value="Atendido"></input>
                                    <span>Atendido</span>
                                </label>
                            </div>
                        <label>Complemento</label>
                        <textarea type="text" placeholder='Descreva seu problema (opcional)'></textarea>
                        <button type='submit'>Registrar</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
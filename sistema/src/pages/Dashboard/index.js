import { useState, useContext } from "react";
import Header from "../../components/Header";
import Title from "../../components/Title";
import './dashboard.css'
import { FiEdit, FiMessageSquare, FiPlus, FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function Dashboard(){
    const [chamados, setChamados] = useState([1]);
    
    return(
        <div>
            <Header></Header>
            <div className="content">
                <Title name="Atendimentos">
                    <FiMessageSquare size={25}></FiMessageSquare>
                </Title>

                {chamados.length === 0 ? (
                    <div className="container dashboard">
                        <span>Nenhum Chamado Registrado...</span>
                        <Link to="/new" className="new">
                            <FiPlus size={25} color="white"></FiPlus>
                            Novo Chamado
                        </Link>
                    </div>
                ) : (
                    <>
                        <Link to="/new" className="new">
                            <FiPlus size={25} color="white"></FiPlus>
                            Novo Chamado
                        </Link>

                        <table>
                            <thead>
                                <tr>
                                    <th scope="col">Cliente</th>
                                    <th scope="col">Assunto</th>
                                    <th scope="col">Status</th>
                                    <th scope="col">Cadastrado em</th>
                                    <th scope="col">#</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td data-label="Cliente">Sujeito</td>
                                    <td data-label="Assunto">Suporte</td>
                                    <td data-label="Status">
                                        <span className="Badge" style={{backgroundColor: '#5cb85c'}}>Em aberto</span>
                                    </td>
                                    <td data-label="Cadastrado">20/06/2004</td>
                                    <td data-label="#">
                                        <button className="action" style={{backgroundColor: '#3583f6'}}>
                                            <FiSearch color="white" size={17}></FiSearch>
                                        </button>
                                        <button className="action" style={{backgroundColor: '#f6a935'}}>
                                            <FiEdit color="white" size={17}></FiEdit>
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </>
                )}

                
            </div>
            
        </div>
    )
}


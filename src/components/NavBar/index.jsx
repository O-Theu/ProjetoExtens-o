import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ListaSuspensa } from "../ListaSuspensa";

import './style.css';
import { ProjetosContext } from "../../context/ProjetosContext";

export const NavBar = () => {
    const [open, setOpen] = useState(false)

    const { setBusca } = useContext(ProjetosContext)

    return(
        <nav className="barra-de-navegacao">
            <div className="barra__pesquisa">
                <input 
                    className="pesquisa" 
                    type="search" 
                    placeholder="Buscar..."
                    onChange={(e) => setBusca(e.target.value)}
                />
            </div>
            <div>
                <ul className="opcoes">  
                    <li className="opcoes__item"><Link className="opcoes__link" to={"/home"}>Home</Link></li>

                    <li className="opcoes__item opcoes__link lista-suspensa" onClick={e => setOpen(!open)}>Projetos</li>
                    <ListaSuspensa
                        aberta={open} 
                    />

                    <li className="opcoes__item"><Link className="opcoes__link" to={"/cadastro"}>Cadastro</Link></li>
                </ul>   
            </div>
        </nav>
    )
}
import React from "react";
import { Link } from "react-router-dom";

import './style.css'

export const ListaSuspensa = ({aberta}) => {
    return (
        <>
            {aberta && (
                <ul className="lista-menu">
                    <li className="lista-menu__item">
                        <Link to={"/projetosnovos"} className="lista-menu__link">Novos</Link>
                    </li>
                    <li className="lista-menu__item">
                        <Link to={"/projetosandamento"} className="lista-menu__link">Andamento</Link>
                    </li>
                    <li className="lista-menu__item">
                        <Link to={"/home"} className="lista-menu__link">Concluídos</Link>
                    </li>
                </ul>
            )}
        </>
    )
}
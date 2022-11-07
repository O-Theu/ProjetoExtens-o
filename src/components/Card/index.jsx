import React from "react";

import './style.css';

export const Card = ({projeto}) => {
    return(
        <div className="card">
            <h2 className="titulo">{projeto.nomeProjeto}</h2>
            <p className="descricao">{projeto.descricao}</p>
            <p className="vagas">{projeto.dataInicial}</p>
        </div>
    )
}

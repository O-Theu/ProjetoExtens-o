import React from "react";

import './style.css';

export const Botao = ({texto}) => {
    return(
        <button className="botao">{texto}</button>
    )
}
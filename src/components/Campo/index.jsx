import React from "react";

import './style.css';

export const Campo = ({label, type="text", placeholder, obrigatorio = false, aoAlterado}) => {
    return (
        <div className="campo">
            <label>{label}</label>
            <input
                type={type}
                placeholder={placeholder}
                required={obrigatorio}
                onChange={evento => aoAlterado(evento.target.value)} 
            />
        </div>
    )
}
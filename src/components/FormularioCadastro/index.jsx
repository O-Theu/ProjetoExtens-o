import React, { useContext } from "react";
import { ProjetosContext } from "../../context/ProjetosContext";
import { Botao } from "../Botao";
import { Campo } from "../Campo";

import './style.css';

export const FormularioCadastro = () => {
    const { setNomeProjeto, setDescricao, setDataInicial, setDataFinal, submit,  } = useContext(ProjetosContext);

    return(
        <form className="container__formulario" onSubmit={submit}>
            <Campo 
                type="text"
                label="Nome do projeto"
                placeholder="Digite o nome do projeto"
                aoAlterado={valor => setNomeProjeto(valor)}
            />
            <Campo 
                type="text"
                label="Descrição do projeto"
                placeholder="Digite o descrição do projeto"
                aoAlterado={valor => setDescricao(valor)}
            />
            <Campo 
                type="date"
                label="Data inicial do projeto"
                aoAlterado={valor => setDataInicial(valor)}
            />
            <Campo 
                type="date"
                label="Data final do projeto"
                aoAlterado={valor => setDataFinal(valor)}
            />
            <Botao 
                texto="Enviar"
            />
        </form>
    )
}
import { createContext, useEffect, useState } from "react";

export const ProjetosContext = createContext();

export const ProjetosProvider = ({ children }) => {
    const [nomeProjeto, setNomeProjeto] = useState('');
    const [descricao, setDescricao] = useState('');
    const [dataInicial, setDataInicial] = useState('');
    const [dataFinal, setDataFinal] = useState('');

    var projetos = [];

    const cadastarProjeto = (e) => {
        e.preventDefault();

        if(localStorage.hasOwnProperty("projetos")) {
            projetos = JSON.parse(localStorage.getItem("projetos"))
        }
        projetos.push({nomeProjeto, descricao, dataInicial, dataFinal})

        console.log(projetos);

        localStorage.setItem("projetos", JSON.stringify(projetos))
    }

    return (
        <ProjetosContext.Provider 
            value={{ setNomeProjeto, setDescricao, setDataFinal, setDataInicial, submit: cadastarProjeto, projetos}}>
            { children }
        </ProjetosContext.Provider>
    )
}
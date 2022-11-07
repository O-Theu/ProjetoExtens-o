import { createContext, useState } from "react";

export const ProjetosContext = createContext();

export const ProjetosProvider = ({ children }) => {
    const [nomeProjeto, setNomeProjeto] = useState('');
    const [descricao, setDescricao] = useState('');
    const [dataInicial, setDataInicial] = useState('');
    const [dataFinal, setDataFinal] = useState('');

    var projetos = [];

    if(!localStorage.hasOwnProperty("projetos")) {
        localStorage.setItem("projetos", JSON.stringify(projetos))
    }

    
    
    const cadastarProjeto = (e) => {
        e.preventDefault();

        if(localStorage.hasOwnProperty("projetos")) {
            projetos = JSON.parse(localStorage.getItem("projetos"))
        }

        projetos.push({nomeProjeto, descricao, dataInicial, dataFinal})
        localStorage.setItem("projetos", JSON.stringify(projetos))
    }

    const data = new Date();
    var dataFormatada = ((data.getFullYear() )) + "-" + ((data.getMonth() + 1)) + "-" +  "0" +((data.getDate() ));

    return (
        <ProjetosContext.Provider 
            value={{ setNomeProjeto, setDescricao, setDataFinal, setDataInicial, submit: cadastarProjeto, projetos, dataFormatada}}>
            { children }
        </ProjetosContext.Provider>
    )
}
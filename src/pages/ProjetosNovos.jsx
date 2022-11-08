import React, { useContext } from 'react';

import { NavBar } from '../components/NavBar';
import { Carrossel } from '../components/Carrossel';
import { ProjetosContext, ProjetosProvider } from '../context/ProjetosContext';

const ProjetosNovos = () => {

  var { dataFormatada, busca } = useContext(ProjetosContext)

  var projetos = [];

  var projetosRecentes = []; 

  projetos = JSON.parse(localStorage.getItem("projetos"))

  projetos.map((projeto) => {
    if(projeto.dataInicial > dataFormatada) {
      projetosRecentes.push(projeto);
    }
  })

  const buscaLowerCase = busca.toLowerCase()

  const projetosFiltrado = projetosRecentes.filter(({nomeProjeto, descricao, dataInicial, dataFinal}) => nomeProjeto.toLowerCase().includes(buscaLowerCase) || descricao.toLowerCase().includes(buscaLowerCase) || dataInicial.toLowerCase().includes(buscaLowerCase) || dataFinal.toLowerCase().includes(buscaLowerCase))

  return (
    <>
        <NavBar />
        <h2>Projetos novos</h2>

        <Carrossel
          projetos={projetosFiltrado}
        /> 
    </>
  );
}

export default ProjetosNovos;

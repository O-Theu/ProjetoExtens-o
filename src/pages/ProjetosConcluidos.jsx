import React, { useContext, useEffect } from 'react';

import { NavBar } from '../components/NavBar';
import { Carrossel } from '../components/Carrossel';
import { ProjetosContext, ProjetosProvider } from '../context/ProjetosContext';

const ProjetosConcluidos = () => {

  const { dataFormatada, busca } = useContext(ProjetosContext);

  var projetos = [];

  var projetosFinalizados = []; 

  projetos = JSON.parse(localStorage.getItem("projetos"))

  projetos.map((projeto) => {
    if(projeto.dataFinal < dataFormatada ) {
      projetosFinalizados.push(projeto);
    }
  })

  const buscaLowerCase = busca.toLowerCase()

  const projetosFiltrado = projetosFinalizados.filter(({nomeProjeto, descricao, dataInicial, dataFinal}) => nomeProjeto.toLowerCase().includes(buscaLowerCase) || descricao.toLowerCase().includes(buscaLowerCase) || dataInicial.toLowerCase().includes(buscaLowerCase) || dataFinal.toLowerCase().includes(buscaLowerCase))
 

  return (
    <>
        <NavBar />
        <h2>Projetos concluídos</h2>

        <Carrossel
          projetos={projetosFiltrado}
        /> 
    </>
  );
}

export default ProjetosConcluidos;

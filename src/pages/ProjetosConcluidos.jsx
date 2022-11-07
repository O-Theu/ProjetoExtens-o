import React, { useContext, useEffect } from 'react';

import { NavBar } from '../components/NavBar';
import { Carrossel } from '../components/Carrossel';
import { ProjetosContext, ProjetosProvider } from '../context/ProjetosContext';

const ProjetosConcluidos = () => {

  const { dataFormatada } = useContext(ProjetosContext);

  var projetos = [];

  var projetosFiltrado = []; 

  projetos = JSON.parse(localStorage.getItem("projetos"))

  projetos.map((projeto) => {
    if(projeto.dataFinal < dataFormatada ) {
      projetosFiltrado.push(projeto);
    }
  })
 

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

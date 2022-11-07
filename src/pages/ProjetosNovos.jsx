import React, { useContext } from 'react';

import { NavBar } from '../components/NavBar';
import { Carrossel } from '../components/Carrossel';
import { ProjetosContext, ProjetosProvider } from '../context/ProjetosContext';

const ProjetosNovos = () => {

  var { dataFormatada } = useContext(ProjetosContext)

  var projetos = [];

  var projetosFiltrado = []; 

  projetos = JSON.parse(localStorage.getItem("projetos"))

  projetos.map((projeto) => {
    if(projeto.dataInicial > dataFormatada) {
      projetosFiltrado.push(projeto);
    }
  })

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

import React, { useContext } from 'react';
import { Carrossel } from '../components/Carrossel';

import { NavBar } from '../components/NavBar';
import { ProjetosContext } from '../context/ProjetosContext';

const ProjetosAndamento = () => {

  const { dataFormatada } = useContext(ProjetosContext);

  var projetos = [];

  var projetosFiltrado = []; 

  projetos = JSON.parse(localStorage.getItem("projetos"))

  console.log(projetos.length);

  projetos.map((projeto) => {
    if(projeto.dataInicial <= dataFormatada && projeto.dataFinal > dataFormatada) {
      projetosFiltrado.push(projeto);
    }
  })
 
  return (
    <>
        <NavBar />
        <h2>Projetos em andamento</h2>

        <Carrossel 
          projetos={projetosFiltrado}
        />
    </>
  );
}

export default ProjetosAndamento;

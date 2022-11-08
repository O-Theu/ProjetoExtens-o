import React, { useContext } from 'react';
import { Carrossel } from '../components/Carrossel';

import { NavBar } from '../components/NavBar';
import { ProjetosContext } from '../context/ProjetosContext';

const ProjetosAndamento = () => {

  const { dataFormatada, busca } = useContext(ProjetosContext);

  var projetos = [];
  var projetosEmAndamento = []; 

  projetos = JSON.parse(localStorage.getItem("projetos"))

  projetos.map((projeto) => {
    if(projeto.dataInicial <= dataFormatada && projeto.dataFinal > dataFormatada) {
      projetosEmAndamento.push(projeto);
    }
  })

  const buscaLowerCase = busca.toLowerCase()

  const projetosFiltrado = projetosEmAndamento.filter(({nomeProjeto, descricao, dataInicial, dataFinal}) => nomeProjeto.toLowerCase().includes(buscaLowerCase) || descricao.toLowerCase().includes(buscaLowerCase) || dataInicial.toLowerCase().includes(buscaLowerCase) || dataFinal.toLowerCase().includes(buscaLowerCase))
 
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

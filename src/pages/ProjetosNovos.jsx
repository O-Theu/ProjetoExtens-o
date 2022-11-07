import React, { useContext, useEffect } from 'react';

import { NavBar } from '../components/NavBar';
import { Carrossel } from '../components/Carrossel';
import { ProjetosProvider } from '../context/ProjetosContext';

const ProjetosNovos = () => {

  return (
    <>
        <NavBar />
        <ProjetosProvider>
          <Carrossel/> 
        </ProjetosProvider>
    </>
  );
}

export default ProjetosNovos;

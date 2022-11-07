import React from 'react';
import { Carrossel } from '../components/Carrossel';
import { FormularioCadastro } from '../components/FormularioCadastro';
import { NavBar } from '../components/NavBar';
import { ProjetosProvider } from '../context/ProjetosContext';

const Cadastro = () => {
  return (
      <div>
        <NavBar />
        <ProjetosProvider >
          <FormularioCadastro />
        </ProjetosProvider>
      </div>
  );
}

export default Cadastro;

import React from 'react';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

import './App.css'
import { ProjetosProvider } from './context/ProjetosContext';

import Cadastro from './pages/Cadastro';
import Home from './pages/Home';
import Login from './pages/login';
import ProjetosAndamento from './pages/ProjetosAndamento';
import ProjetosConcluidos from './pages/ProjetosConcluidos';
import ProjetosNovos from './pages/ProjetosNovos';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/' element={<Login />} />
          <Route exact path='/home' element={<ProjetosProvider><Home /></ProjetosProvider>} />
          <Route exact path='/cadastro' element={<ProjetosProvider><Cadastro /></ProjetosProvider>} />
          <Route path='/projetosnovos' element={<ProjetosProvider><ProjetosNovos /></ProjetosProvider>} />
          <Route path='/projetosandamento' element={<ProjetosProvider><ProjetosAndamento /></ProjetosProvider>} />
          <Route path='/projetosconcluido' element={<ProjetosProvider><ProjetosConcluidos /></ProjetosProvider>} />
        </Routes>
      </Router>
      
    </>
  );
}

export default App;

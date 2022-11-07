import React from 'react';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

import './App.css'
import { ProjetosProvider } from './context/ProjetosContext';

import Cadastro from './pages/Cadastro';
import Home from './pages/Home';
import Login from './pages/login';
import ProjetosAndamento from './pages/ProjetosAndamento';
import ProjetosNovos from './pages/ProjetosNovos';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/' element={<Login />} />
          <Route exact path='/home' element={<Home />} />
          <Route exact path='/cadastro' element={<Cadastro />} />
          <Route path='/projetosnovos' element={<ProjetosNovos />} />
          <Route path='/projetosandamento' element={<ProjetosAndamento />} />
        </Routes>
      </Router>
      
    </>
  );
}

export default App;

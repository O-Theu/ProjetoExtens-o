import React, { useRef } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Botao } from "../Botao";
import { Campo } from "../Campo";
import Snackbar from "../SnackBar";

import './style.css'

const emailCerto = "mateus@gmail.com";
const senhaCerta = "123";

export const Formulario = () => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState(0)
    const [texto, setTexto] = useState('')
    const [tipo, setTipo] = useState('')

    const navigate = useNavigate();
 
    const snackbarRef = useRef(null);

    const realizarLogin = (evento) => {
        evento.preventDefault();
        if(email == emailCerto && senha == senhaCerta){
            navigate("/home")
        } else {
            setTexto("Senha ou email incorreto");
            setTipo("fail");
            snackbarRef.current.show();
        }
    }

    return(
        <>
            <form className="formulario" onSubmit={realizarLogin}>
                <h2 className="formulario__titulo">Acesse sua conta</h2>
                <Campo 
                    type="email"
                    label="Email" 
                    placeholder="Digite seu endereço de email"
                    obrigatorio={true}
                    aoAlterado={valor => setEmail(valor)}
                />
                <Campo 
                    type="password"
                    label="Senha" 
                    placeholder="Digite sua senha" 
                    obrigatorio={true}
                    aoAlterado={valor => setSenha(valor)}  
                />
                <Botao texto="Entrar"/>
            </form>

            <Snackbar
                ref={snackbarRef}
                texto={texto}
                type={tipo}
            />
        </>
        
    )
}
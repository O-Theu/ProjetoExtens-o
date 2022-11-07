import React, { useEffect, useRef, useState, useContext  } from "react";
import { motion } from 'framer-motion'

import './style.css'
import { Card } from "../Card";

export const Carrossel = () => {
    const carrosel = useRef();
    const [width, setWidth] = useState(0);

    useEffect(() => {
        setWidth(carrosel.current?.scrollWidth - carrosel.current?.offsetWidth)
    });

    var projetos = [];

    projetos = JSON.parse(localStorage.getItem("projetos"))

    return (
        <div className="container__carrosel">
                <motion.div 
                   ref={carrosel} 
                   className="carrosel" 
                   whiletop={{ cursor: "grabbing" }} 
                >
                    <motion.div 
                        className="inner"
                        drag="x"
                        dragConstraints={{ right: 0, left:-width}}
                    >
                    {
                        projetos.map((projeto, indice) => { 
                            return( 
                                <Card 
                                    key={indice}
                                    projeto={projeto}
                                /> 
                            )
                        })
                        }
                    </motion.div>
                </motion.div>
        </div>
    )
}
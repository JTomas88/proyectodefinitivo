import React, { useState } from "react";
import Info from "../info/Info"
import Registro from "../registro/Registro";
import './contenido.css';

const Contenido = () => {
    const [botonQuienes, setBotonQuienes] = useState("Quienes somos");
    const [botonObjetivos, setBotonObjetivos] = useState("Objetivos");


    const [botonLogin, setBotonLogin] = useState ("Entrar")

    return (
        <div className="container">
            <div className="row ajuste-fila">
                <div className="col-6 ajuste-columna ">
                    <Info
                    
                    />
                </div>
                <div className="col-6 registro">
                    <Registro
                    />

                </div>
            </div>

        </div>

    )

};

export default Contenido;
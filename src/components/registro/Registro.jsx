import React, { useState, useEffect } from "react";
import './registro.css';
import FormularioRegistro from "./FormularioRegistro";

const Registro = () => {

    const [inputEmail, setInputEmail] = useState("");
    const [inputPassword, setInputPassword] = useState("");

    const handleChangeEmail = (evento) => {
        setInputEmail(evento.target.value); //esto se pasa a "inputEmail"
    }

    const handleChangePassword = (evento) => {
        setInputPassword(evento.target.value);
    }

    const [showRegistro, setShowRegistro] = useState(false);
    const handleOpenRegistro = () => {
        setShowRegistro(true);
    }

    const handleCloseRegistro = () => {
        setShowRegistro(false);
    }

    // useEffect(() => {
    //     if (inputPassword.length < 8){
    //         alert("contraseña demasiado corta")
    //     }
    // }, [inputEmail, inputPassword ])





    return (
        <div className="container">
            <div className="row d-flex justify-content-center align-items-center  registrate">
                <div className="col d-flex justify-content-center align-items-center">
                   <h2> Registrate</h2>
                </div>
                <div className="col">
                <button class="btn btn-primary" type="button" onClick={handleOpenRegistro}>Registro</button>
                {showRegistro && <FormularioRegistro 
                show = {showRegistro} onClose={handleCloseRegistro}
                />}
                </div>
            </div>


            <div className="row d-flex justify-content-center align-items-center entra">
                <div className="col d-flex justify-content-center align-items-center">
                    <h3>Entra</h3>
                </div>
                <div className="col">
                    <form className="formulario">
                    <input type="email"  placeholder="Tu email" onChange={handleChangeEmail}/>
                    <input type="password" placeholder="Tu contraseña" onChange={handleChangePassword}/>
                    </form>
                    <button class="btn btn-primary loginBoton" type="button">Login</button>
                </div>

            </div>
        </div>

    )

};

export default Registro;
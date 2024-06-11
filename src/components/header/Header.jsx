import React from "react";
import './header.css';
import gif from '../../assets/gif-cabecera-unscreen.gif';

const Header = () => {

    return (
        <div className="container cabecera bg-danger">
            <div className="row  titulo">
                <div className="col d-flex margen-titulo">
                    <a href="/" className="home-link">
                        <h1>OnlyCars</h1>
                    </a>
                </div>

                <div className="col-3">
                    <img src={gif} className="gifCabecera" />
                </div>
            </div>
        </div>

    );
};

export default Header;
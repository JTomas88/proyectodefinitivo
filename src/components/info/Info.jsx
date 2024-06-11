import React, { useState } from "react";
import './info.css';

const Info = () => {

    return (
        <div class="info d-flex align-items-center justify-content-center">
            <div class="d-grid gap-2 ">
                <button class="btn btn-primary" type="button">Quienes somos</button>
                <button class="btn btn-primary" type="button">Objetivos</button>
                <button class="btn btn-primary" type="button">Derechos y obligaciones</button>
            </div>
        </div>

    )

};

export default Info;
import React, { useState } from "react";
//

const FormularioRegistro = () => {

    const provincias = [
        "Álava (Araba)",
        "Albacete",
        "Alicante",
        "Almería",
        "Asturias",
        "Ávila",
        "Badajoz",
        "Barcelona",
        "Burgos",
        "Cáceres",
        "Cádiz",
        "Cantabria",
        "Castellón (Castelló)",
        "Ciudad Real",
        "Córdoba",
        "Cuenca",
        "Gerona (Girona)",
        "Granada",
        "Guadalajara",
        "Guipúzcoa (Gipuzkoa)",
        "Huelva",
        "Huesca",
        "Islas Baleares (Illes Balears)",
        "Jaén",
        "La Coruña (A Coruña)",
        "La Rioja",
        "Las Palmas",
        "León",
        "Lérida (Lleida)",
        "Lugo",
        "Madrid",
        "Málaga",
        "Murcia",
        "Navarra (Nafarroa)",
        "Orense (Ourense)",
        "Palencia",
        "Pontevedra",
        "Salamanca",
        "Santa Cruz de Tenerife",
        "Segovia",
        "Sevilla",
        "Soria",
        "Tarragona",
        "Teruel",
        "Toledo",
        "Valencia",
        "Valladolid",
        "Vizcaya (Bizkaia)",
        "Zamora",
        "Zaragoza"
    ];




    return (
        <form>
            <div className="mb-3">
                <label for="Nombre" className="form-label">Nombre</label>
                <input type="text" className="form-control" id="Nombre" />

                <label for="Apellido1" className="form-label">Apellido 1</label>
                <input type="text" className="form-control" id="Apellido1" />

                <label for="Apellido2" className="form-label">Apellido 2</label>
                <input type="text" className="form-control" id="Apellido2" />
            </div>


            <div className="mb-3">
                <label for="Documento" className="form-label">Documento</label>
                <input type="text" className="form-control" id="Documento" />
            </div>

            <div className="mb-3">
                <label for="localidad" className="form-label">localidad</label>
                <input type="text" className="form-control" id="localidad" />

                <label for="cp" className="form-label">Codigo Postal</label>
                <input type="number" className="form-control" id="cp" />

                <select class="form-select" aria-label="Default select example">
                    <option selected>Selecciona una provincia:</option>
                    {provincias.map((provincia, index) => (
                    <option key={index} value={provincia}>{provincia}</option>
                    ))}
                </select>


            </div>


            <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                <label className="form-check-label" for="exampleCheck1">Check me out</label>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    )

};

export default FormularioRegistro;
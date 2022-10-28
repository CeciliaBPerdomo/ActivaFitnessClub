import React, {useState, useContext} from "react";

import {Context} from "../store/appContext";

export const CrearEjercicio = () => {
    const [nombreEjercicio, setNombreEjercicio] = useState("")
    const [tipoEjercicio, setTipoEjercicio] = useState("")
    const [imagen, setImagen] = useState("")
    const [descripcionEjercicio, setDescripcionEjercicio] = useState("")

    const agregarEjercicio = (event) => {

        event.preventDefault();

        setNombreEjercicio("")
        setTipoEjercicio("")
        setImagen("")
        setDescripcionEjercicio("")

    }


    return (
        <>
            <div className="bg.crearEjercicio">

                <br/>
                <br/>
                <br/>

                <div className="card container-md center"
                    style={
                        {width: "40rem"}
                }>
                    <h5 className="card-header">Crear Ejercicio</h5>

                    <div className="card-body">
                        <div className="input-group input-group-sm mb-3">
                            <span className="input-group-text" id="inputGroup-sizing-sm">Nombre del ejercicio</span>
                            <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"
                                onChange={
                                    (event) => setNombreEjercicio(event.target.value)
                                }
                                value={nombreEjercicio}/>
                        </div>
                        <label htmlFor="basic-url" className="form-label">Ingrese URL</label>
                        <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon3">Foto</span>
                            <input type="text" className="form-control" id="basic-url" aria-describedby="basic-addon3"
                                onChange={
                                    (event) => setImagen(event.target.value)
                                }
                                value={imagen}/>
                        </div>
                        <div className="input-group input-group-sm mb-3">
                            <span className="input-group-text" id="inputGroup-sizing-sm">Tipo</span>
                            <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"
                                onChange={
                                    (event) => setTipoEjercicio(event.target.value)
                                }
                                value={tipoEjercicio}/>
                        </div>
                        <div className="input-group input-group-sm mb-3">
                            <span className="input-group-text" id="inputGroup-sizing-sm">Descripción</span>
                            <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"
                                onChange={
                                    (event) => setDescripcionEjercicio(event.target.value)
                                }
                                value={descripcionEjercicio}/>
                        </div>

                        <button type="button" className="btn btn-success"
                            onClick={agregarEjercicio}>Agregar nuevo ejercicio</button>

                    </div>

                </div>
            </div>
        </>


    )

};

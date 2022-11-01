import React, {useState, useContext} from "react";

import {Context} from "../store/appContext";


// ///////////////////////////////////////////
// ADMIN PUEDE AGREGAR NUEVAS MENSUALIDADES//
// /////////////////////////////////////////

export const CrearMensualidad = () => {
    const [nombreUsuario, setNombreUsuario] = useState("")
    const [apellido, setApellido] = useState("")
    const [descripcion, setDescripcion] = useState("")
    const [fechaPago, setFechaPago] = useState("")
    const [numeroFactura, setNumeroFactura] = useState("")
    const [monto, setMonto] = useState("")

    const agregarMensualidad = (event) => {

        event.preventDefault();

        setNombreUsuario("")
        setApellido("")
        setImagen("")
        setDescripcion("")
        setFechaPago("")
        setNumeroFactura("")
        setMonto("")
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
                    <h5 className="card-header">
                        Nueva mensualidad
                    </h5>

                    <div className="card-body">
                        <div className="input-group input-group-sm mb-3">
                            <span className="input-group-text" id="inputGroup-sizing-sm">Nombre</span>
                            <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"
                                onChange={
                                    (event) => setNombreUsuario(event.target.value)
                                }
                                value={nombreUsuario}/>
                        </div>

                        <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon3">Apellido</span>
                            <input type="text" className="form-control" id="basic-url" aria-describedby="basic-addon3"
                                onChange={
                                    (event) => setApellido(event.target.value)
                                }
                                value={apellido}/>
                        </div>
                        <div className="input-group input-group-sm mb-3">
                            <span className="input-group-text" id="inputGroup-sizing-sm">Fecha de pago</span>
                            <input type="date" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"
                                onChange={
                                    (event) => setFechaPago(event.target.value)
                                }
                                value={fechaPago}/>
                        </div>
                        <div className="d-flex">
                            <div className="input-group input-group-sm mb-3">
                                <span className="input-group-text" id="inputGroup-sizing-sm">Monto</span>
                                <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"
                                    onChange={
                                        (event) => setMonto(event.target.value)
                                    }
                                    value={monto}/>
                            </div>
                            <div className="input-group input-group-sm mb-3">
                                <span className="input-group-text" id="inputGroup-factura">Nº Factura</span>
                                <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"
                                    onChange={
                                        (event) => setNumeroFactura(event.target.value)
                                    }
                                    value={numeroFactura}/>
                            </div>
                        </div>
                        <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon3">Descripción</span>
                            <input type="text" className="form-control" id="basic-description" aria-describedby="basic-addon3"
                                onChange={
                                    (event) => setDescripcion(event.target.value)
                                }
                                value={descripcion}/>
                        </div>

                        <button type="button" className="btn btn-success"
                            onClick={agregarMensualidad}>Agregar nueva mensualidad</button>

                    </div>

                </div>
            </div>
        </>
    )

}

import React, {useState, useContext, useEffect} from "react";
import {Link, useParams} from "react-router-dom";
import {Context} from "../store/appContext";


// ///////////////////////////////////////////
// ADMIN PUEDE MODIFICAR LAS MENSUALIDADES //
// /////////////////////////////////////////

export const EditarMensualidad = () => {

    const {store, actions} = useContext(Context);
    const params = useParams();


    const [nombreUsuario, setNombreUsuario] = useState("")
    const [apellido, setApellido] = useState("")
    const [descripcion, setDescripcion] = useState(store.mensualidades.description)
    const [fechaPago, setFechaPago] = useState(store.mensualidades.payment_date)
    const [numeroFactura, setNumeroFactura] = useState(store.mensualidades.bill_n)
    const [monto, setMonto] = useState(store.mensualidades.payment_amount)

    useEffect(() => {
        actions.obtenerMensualidades();
    }, []);

    const modificarMensualidad = (e) => {
        e.preventDefault();

        let id = parseInt(params.theid);

        actions.modificarMensualidad(id, user_id, descripcion, fechaPago, numeroFactura, monto,);
    };


    return (<>

        <div className="bg.crearEjercicio">

            <br/>
            <br/>
            <br/>

            <div className="card container-md center"
                style={
                    {width: "40rem"}
            }>
                <h5 className="card-header">
                    Editar mensualidad
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
                            defaultValue={fechaPago}/>
                    </div>
                    <div className="d-flex">
                        <div className="input-group input-group-sm mb-3">
                            <span className="input-group-text" id="inputGroup-sizing-sm">Monto</span>
                            <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"
                                onChange={
                                    (event) => setMonto(event.target.value)
                                }
                                defaultValue={monto}/>
                        </div>
                        <div className="input-group input-group-sm mb-3">
                            <span className="input-group-text" id="inputGroup-factura">Nº Factura</span>
                            <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"
                                onChange={
                                    (event) => setNumeroFactura(event.target.value)
                                }
                                defaultValue={numeroFactura}/>
                        </div>
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon3">Descripción</span>
                        <input type="text" className="form-control" id="basic-description" aria-describedby="basic-addon3"
                            onChange={
                                (event) => setDescripcion(event.target.value)
                            }
                            defaultValue={descripcion}/>
                    </div>

                    <button type="button" className="btn btn-success"
                        onClick={modificarMensualidad}>Agregar nueva mensualidad</button>

                </div>

            </div>
        </div>
    </>)

}

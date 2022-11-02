import React, {useState, useContext, useEffect} from "react";
import {Link, useParams} from "react-router-dom";
import {Context} from "../store/appContext";


// ///////////////////////////////////////////
// CLIENTE PUEDE VER LISTADO DE SUS PAGOS  //
// /////////////////////////////////////////


export const MisPagos = () => {
    const {store, actions} = useContext(Context);
    const params = useParams();

    useEffect(() => {
        actions.obtenerMensualidadId(parseInt(params.theid));
        actions.obtenerAlumnoId(parseInt(params.theid));
    }, []);

    return (
        <>
            <br/> {/* <Link to={
                "/pagarMensualidad/" + params.theid
            }> */}
            <button type="button" class="btn btn-success justify-content-md-end float-end"
                style={
                    {marginRight: "70px"}
            }>
                Pagar
            </button>
            {/* </Link> */}
            <div className="container">
                <div>
                    <br/>
                    <h1>Mis pagos</h1>
                </div>

                {/* Listado de pagos */}
                <table className="table table-hover table-secondary">
                    <thead>
                        <tr> {" "}
                            {/* Cabezeras */}
                            <th scope="col">Fecha de ingreso</th>
                            <th scope="col">Fecha de pago</th>
                            <th scope="col">Monto</th>
                            <th scope="col">Factura</th>
                            <th scope="col">Descripción</th>
                        </tr>
                    </thead>

                    <tbody> {" "}
                        {
                        store.mens.map((item, id) => (
                            <tr key={id}>
                                <td>{
                                    store.alumno.date_of_admission
                                }</td>
                                <td>{
                                    item.payment_date
                                }</td>
                                <td>{
                                    item.payment_amount
                                }</td>
                                <td>{
                                    item.bill_n
                                }</td>
                                <td>{
                                    item.description
                                }</td>
                            </tr>
                        ))
                    }
                        {" "} </tbody>
                </table>
            </div>
        </>
    );
};

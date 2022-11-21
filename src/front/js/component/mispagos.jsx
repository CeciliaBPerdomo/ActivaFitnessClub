import React, {useState, useContext, useEffect} from "react";
import {Link, useParams} from "react-router-dom";
import {Context} from "../store/appContext";
import titulo from "../../img/Cabeceras/pagos.jpg";

// ///////////////////////////////////////////
// CLIENTE PUEDE VER LISTADO DE SUS PAGOS  //
// /////////////////////////////////////////

export const MisPagos = () => {
    const {store, actions} = useContext(Context);
    const params = useParams();

    useEffect(() => {
        actions.obtenerMensualidadId(parseInt(params.theid));

        const getInfo = async () => {
            let {cuota} = await actions.obtenerAlumnoId(parseInt(params.theid));
            // Mercado pago
            actions.pagoMercadoPago(cuota);
        };
        getInfo();
    }, []);

    const pagoMercadoPago = () => {
        window.location.replace(store ?. mercadopago.sandbox_init_point);
    };

    return (
        <>
            <br/>
            <br/>
            <br/>
            <br/>

            <button type="button" className="btn btn-outline-danger justify-content-md-end float-end relative"
                style={
                    {
                        marginRight: "125px",


                        marginBottom: "20px",
                        color: "white"

                    }
                }
                onClick={pagoMercadoPago}>
                Pagar mensualidad on-line
            </button>
            {/* </Link> */}
            <div className="container">
                <div>
                    <br/> {/* <img src={titulo} style={{ width: "75%", height: "150px" }} /> */}
                    <h1 style={
                        {color: "white"}
                    }>Mis pagos</h1>
                    <br/>
                </div>

                {/* Listado de pagos */}
                <table className="table table-hover table-secondary">
                    <thead>
                        <tr> {/* Cabezeras */}
                            <th scope="col" className="text-center">
                                Fecha de ingreso
                            </th>
                            <th scope="col" className="text-center">
                                Fecha de pago
                            </th>
                            <th scope="col" className="text-center">
                                Monto
                            </th>
                            <th scope="col" className="text-center">
                                Factura
                            </th>
                            <th scope="col">Descripción</th>
                        </tr>
                    </thead>

                    <tbody> {
                        store.mens.map((item, id) => (
                            <tr key={id}>
                                <td className="text-center">
                                    {
                                    store.alumno.date_of_admission
                                } </td>
                                <td className="text-center">
                                    {
                                    item.payment_date
                                }</td>
                                <td className="text-center">$ {
                                    item.payment_amount
                                }</td>
                                <td className="text-center">
                                    {
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

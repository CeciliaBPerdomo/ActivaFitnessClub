import React, {useState, useContext, useEffect} from "react";
import {Link} from "react-router-dom";
import {Context} from "../store/appContext";

export const MisPagos = () => {

    const {store, actions} = useContext(Context);

    return (
        <>
            <br/>
            <Link to={"mispagos/:theid"}>
                <button type="button" class="btn btn-success">Agregar pago</button>
            </Link>
            <div className="container">
                <div>
                    <br/>
                    <h1>Mis pagos</h1>
                </div>


                {/* Listado de pagos */}
                <table className="table table-hover table-secondary">
                    <thead>
                        <tr> {/* Cabezeras */}
                            <th scope="col">Fecha de ingreso</th>
                            <th scope="col">Fecha de pago</th>
                            <th scope="col">Monto</th>
                            <th scope="col">Estado</th>
                        </tr>
                    </thead>

                    {/* <tbody> {
                        store.alumnos.map((item, id) => (
                            <tr key={id}>
                                <td>{item.date_of_admission}</td>
                                <td>{item.payment_date}</td>
                                <td>{item.payment_amount}</td>
                                <td>{item.state}</td>
                                <td></td>
                            </tr>
                        )) */}
                    {/* } </tbody> */} </table>
            </div>
        </>
    )
}

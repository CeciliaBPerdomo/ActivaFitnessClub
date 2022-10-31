import React, {useState, useContext, useEffect} from "react";
import {Link} from "react-router-dom";
import {Context} from "../store/appContext";

export const MisPagos = () => {

    const {store, actions} = useContext(Context);

    return (
        <>

            <div className="container">
                <div>
                    <br/>
                    <h1>Alumnos</h1>
                </div>

                {/* Buscar */}
                <div>
                    <label htmlFor="exampleDataList" className="form-label">
                        <h3>Buscar</h3>
                    </label>
                    <input className="form-control" list="datalistOptions" id="exampleDataList" placeholder="Buscar..."/>
                </div>

                {/* Listado de alumnos */}
                <table className="table table-hover table-secondary">
                    <thead>
                        <tr> {/* Cabezeras */}
                            <th scope="col">Cedula</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Apellido</th>
                            <th scope="col">Fecha de ingreso</th>
                            <th scope="col">Fecha de pago</th>
                            <th scope="col">Estado</th>
                        </tr>
                    </thead>

                    <tbody> {
                        store.alumnos.map((item, id) => (
                            <tr key={id}>
                                <td>{
                                    item.ci
                                }</td>
                                <td>{
                                    item.name
                                }</td>
                                <td>{
                                    item.last_name
                                }</td>
                                <td>{
                                    item.date_of_admission
                                }</td>
                                <td>{
                                    item.mutualist
                                }</td>
                                <td>{
                                    item.medical_conditions
                                }</td>
                                <td></td>
                            </tr>
                        ))
                    } </tbody>
                </table>
            </div>
        </>
    )
}

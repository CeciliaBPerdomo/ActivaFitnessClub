import React, {useState, useContext, useEffect} from "react";
import {Link} from "react-router-dom";
import {Context} from "../store/appContext";
import swal from "sweetalert";

export const VistaMensualidades = () => {
    const {store, actions} = useContext(Context);

    useEffect(() => {
        actions.obtenerMensualidades();
        actions.obtenerAlumnoId(parseInt(params.theid));
    }, []);

    return (
        <> {" "}
            {/* Buscar */}
            <div>
                <label htmlFor="exampleDataList" className="form-label">
                    <h3>Buscar</h3>
                </label>
                <input className="form-control" list="datalistOptions" id="exampleDataList" placeholder="Buscar..."/>
            </div>
            {" "}
            {/* Nueva mensualidad */}
            <br/>
            <div className="w-75">
                <Link to={"/crearMensualidad"}>
                    <button type="button" className="btn btn-outline-success w-25">
                        Ingresar nueva mensualidad
                    </button>
                </Link>
            </div>
            <br/>
            <table className="table table-hover table-secondary">
                <thead>
                    <tr> {/* Cabezeras */}
                        <th scope="col">Nombre</th>
                        <th scope="col">Apellido</th>
                        <th scope="col">Fecha de ingreso</th>
                        <th scope="col">Fecha de pago</th>
                        <th scope="col">Monto</th>
                        <th scope="col">Factura</th>
                        <th scope="col">Celular</th>
                        <th scope="col">Editar</th>
                        <th scope="col">Borrar</th>
                    </tr>
                </thead>

                {/* Listado */}
                <thead>
                    <tbody> {
                        store.mensualidades.map((item, id) => (
                            <tr key={id}>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>{
                                    item.payment_date
                                }</td>
                                <td>{
                                    item.payment_amount
                                }</td>
                                <td>{
                                    item.bill_n
                                }</td>
                                <td></td>

                                {/* Modificar alumno */}
                                <td> {/* <button type="button" className="btn btn-outline-dark">
                                        <i className="fa fa-pen"></i>
                                    </button> */} </td>
                                <td> {/* Borrar alumno */}
                                    {/* <button type="button" className="btn btn-outline-danger"
                                        onClick={
                                            (e) => borrar(e, item)
                                    }></button> */} </td>
                                <td> {/* Ver rutina */}
                                    {/* <button type="button" className="btn btn-outline-dark">
                                        <i className="fa fa-eye"></i>
                                    </button> */} </td>
                                <td> {/* Modificar alumno */}
                                    {/* <button type="button" className="btn btn-outline-dark">
                                        <i className="fa fa-pen"></i>
                                    </button> */} </td>
                                <td> {" "}
                                    {/* Borrar alumno */}
                                    {/* <button type="button" className="btn btn-outline-danger"
                                        onClick={
                                            (e) => borrar(e, item)
                                    }>
                                        value={item}
                                        <i className="fa fa-trash"></i>
                                    </button> */} </td>
                            </tr>
                        ))
                    }
                        {" "} </tbody>
                </thead>
            </table>
        </>
    );
};

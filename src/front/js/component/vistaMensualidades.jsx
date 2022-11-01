import React, {useState, useContext, useEffect} from "react";
import {Link, useParams} from "react-router-dom";
import {Context} from "../store/appContext";
import swal from "sweetalert";


// //////////////////////////////////////////////
// ADMIN VE LISTA DE TODAS LAS MENSUALIDADES //
// ////////////////////////////////////////////

export const VistaMensualidades = () => {
    const {store, actions} = useContext(Context);
    const params = useParams();

    useEffect(() => {
        actions.obtenerMensualidades();
        // actions.obtenerAlumnos();
    }, []);

    const borrar = (e, item) => {
        e.preventDefault();

        // Elimina el alumno!
        swal({
            title: `Desea borrar a: ${
                item.name
            } ${
                item.last_name
            }`,
            text: "Una vez eliminado, no se podra recuperar",
            icon: "warning",
            buttons: true,
            dangerMode: true
        }).then((willDelete) => {
            if (willDelete) {
                swal(`Poof! el alumno ${
                    item.name
                } ${
                    item.last_name
                } fue borrado`, {
                    icon: "success",
                    actions: actions.borrarAlumno(item.id)
                });
            } else {
                swal("Ups! Casi, casi!");
            }
        });
    };

    return (
        <> {" "}
            {/* Buscar */}
            <div className="w-75">
                <label htmlFor="exampleDataList" className="form-label">
                    <h3>Buscar</h3>
                </label>
                <input className="form-control" list="datalistOptions" id="exampleDataList" placeholder="Buscar..."/>
            </div>
            {/* Nueva mensualidad */}
            <br/>
            <div className="w-75">
                <Link to={"/crearMensualidad"}>
                    <button type="button" className="btn btn-outline-success w-25 float-end"
                        style={
                            {marginBottom: "15px"}
                    }>
                        Ingresar nueva mensualidad
                    </button>
                </Link>
            </div>
            <br/>
            <table className="table table-hover table-secondary w-75">
                <thead>
                    <tr className="text-center">
                        {/* Cabezeras */}
                        <th scope="col">Nombre</th>
                        <th scope="col">Apellido</th>
                        <th scope="col">Fecha de ingreso</th>
                        <th scope="col">Fecha de pago</th>
                        <th scope="col">Monto</th>
                        <th scope="col">Factura</th>
                        <th scope="col">Editar</th>
                        <th scope="col">Borrar</th>
                    </tr>
                </thead>

                {/* Mensualidades */}
                <tbody className="align-middle text-center">
                    {
                    store.mensualidades.map((item, id) => (
                        <tr key={id}>
                            <td></td>
                            <td>Apellido</td>
                            <td>Fecha</td>
                            <td>{
                                item.payment_date
                            }</td>
                            <td>{
                                item.payment_amount
                            }</td>
                            <td>{
                                item.bill_n
                            }</td>

                            {/* Modificar */}
                            <td>
                                <Link to={
                                    "/editarMensualidad/" + item.id
                                }>
                                    <button type="button" className="btn btn-outline-dark">
                                        <i className="fa fa-pen"></i>
                                    </button>
                                </Link>
                            </td>

                            {/* Eliminar */}
                            <td>
                                <button type="button" className="btn btn-outline-danger"
                                    onClick={
                                        (e) => borrar(e, item)
                                }>
                                    <i className="fa fa-trash"></i>
                                </button>
                            </td>
                        </tr>
                    ))
                }
                    {" "} </tbody>
            </table>
        </>
    );
};

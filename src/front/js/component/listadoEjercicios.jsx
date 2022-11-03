import React, {useState, useContext, useEffect} from "react";
import {Link} from "react-router-dom";
import {Context} from "../store/appContext";
import swal from "sweetalert";

// layout:
// import { ListadoEjercicios } from "./component/listadoEjercicios.jsx";
// <Route element={<ListadoEjercicios/>}
// path="/ListadoEjercicios"/>

export const ListadoEjercicios = () => {
    const {store, actions} = useContext(Context);

    // Inicio
    useEffect(() => {
        actions.obtenerEjercicios();
    }, []);
    return (<>
        <div className="container"
            style={
                {
                    marginTop: "20px",
                    marginBottom: "35px"
                }
        }> {/* Titulo */}
            <h1>
                <i className="fa fa-dumbbell"></i>
                Listado de ejercicios
            </h1>
            <br/> {/* Buscar */}
            <div>
                <input className="form-control" list="datalistOptions" id="exampleDataList" placeholder="Buscar por nombre..."/>
            </div>
            <br/> {/* Crea un nuevo ejercicio */}
            <div>
                <Link to={"/crearEjericio"}>
                    <button type="button" className="btn btn-outline-danger w-50 float-end"
                        style={
                            {marginBottom: "20px"}
                    }>
                        Crear nuevo ejercicio
                    </button>
                </Link>
            </div>
            <br/> {/* Listado de ejercicio */}
            <table className="table table-hover table-secondary">
                <thead>
                    <tr className="text-center"> {/* Cabeceras */}
                        <th scope="col">Nombre</th>
                        <th scope="col">Tipo de musculo</th>
                        <th scope="col">Descripción</th>
                        <th scope="col">Foto</th>
                        <th scope="col">Video</th>
                        <th scope="col">+Info</th>
                        <th scope="col">Editar</th>
                        <th scope="col">Borrar</th>
                    </tr>
                </thead>

                {/* Listado */}
                {/* Listado */}
                <tbody className="align-middle text-center"> {
                    store.ejercicios.map((item, id) => (<tr key={id}>
                        <td> {
                            item.exercise_name
                        }</td>
                        <td> {
                            item.type_of_muscle
                        }</td>
                        <td> {
                            item.description
                        }</td>
                        <td> {
                            item.photo_exercise
                        }</td>
                        <td> {
                            item.video_exercise
                        }</td>

                        {/* Mas informacion */}
                        <td>
                            <Link to={
                                    "" + item.id
                                }
                                className="btn btn-outline-dark">
                                <i className="fa fa-user-plus"></i>
                            </Link>
                        </td>

                        {/* Modificar alumno */}
                        <td>
                            <Link to={
                                    "/modificarAlumno/" + item.id
                                }
                                className="btn btn-outline-dark">
                                <i className="fa fa-pen"></i>
                            </Link>
                        </td>

                        <td> {/* Borrar alumno */}
                            <button type="button" className="btn btn-outline-danger"
                                onClick={
                                    (e) => borrar(e, item)
                            }>
                                <i className="fa fa-trash"></i>
                            </button>
                        </td>
                    </tr>))
                } </tbody>
            </table>


            {/* div del container */} </div>
    </>);
};

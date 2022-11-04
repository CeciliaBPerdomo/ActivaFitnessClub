import React, {useState, useContext, useEffect} from "react";
import {Link, useParams} from "react-router-dom";
import {Context} from "../store/appContext";

// ///////////////////////////////////////////
// ADMIN PUEDE MODIFICAR LOS EJERCICIOS   //
// /////////////////////////////////////////

export const EditarEjercicio = () => {
    const {store, actions} = useContext(Context);
    const params = useParams();

    const [nombreEjercicio, setNombreEjercicio] = useState(store.ejercicio.exercise_name);
    const [tipoEjercicio, setTipoEjercicio] = useState(store.ejercicio.type_of_muscle);
    const [descripcionEjercicio, setDescripcionEjercicio] = useState(store.ejercicio.description);
    const [imagen, setImagen] = useState(store.ejercicio.photo_exercise);
    const [video, setVideo] = useState(store.ejercicio.video_exercise);

    useEffect(() => {
        actions.obtenerEjercicioId(parseInt(params.theid));
    }, []);

    const modificarEjercicio = (event) => {
        event.preventDefault();

        let id = parseInt(params.theid);
        // Guarda el formulario
        actions.modificarEjercicio(id, nombreEjercicio, tipoEjercicio, descripcionEjercicio, imagen, video);


    };

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
                Editar ejercicio
            </h1>
            <br/> {/* Listado de ejercicios */}
            <div>
                <Link to={"/ListadoEjercicios"}>
                    <button type="button" className="btn btn-outline-danger w-35 float-end"
                        style={
                            {marginBottom: "20px"}
                    }>
                        Listado de ejercicios
                    </button>
                </Link>
            </div>
            <br/>

            <div className="formulario">
                <form>
                    <div className="container text-start "
                        style={
                            {marginTop: "10px"}
                    }>
                        <div className="row"></div>
                    </div>

                    <div className="row"
                        style={
                            {
                                marginBottom: "15px",
                                marginTop: "25px"
                            }
                    }>
                        <div className="col">
                            <label htmlFor="nombre" className="form-label">
                                <b>Nombre del ejercicio:</b>
                            </label>

                            <input type="text" className="form-control"
                                onChange={
                                    (event) => setNombreEjercicio(event.target.value)
                                }
                                defaultValue={
                                    store.ejercicio.exercise_name
                                }/>
                        </div>

                        <div className="col">
                            <label htmlFor="nombre" className="form-label">
                                <b>Tipo de ejercicio:</b>
                            </label>

                            <input type="text" className="form-control"
                                onChange={
                                    (event) => setTipoEjercicio(event.target.value)
                                }
                                defaultValue={
                                    store.ejercicio.type_of_muscle
                                }/>
                        </div>
                    </div>

                    <div className="row"
                        style={
                            {
                                marginBottom: "15px",
                                marginTop: "25px"
                            }
                    }>
                        <div className="col">
                            <label htmlFor="nombre" className="form-label">
                                <b>Descripción del ejercicio:</b>
                            </label>
                            <input type="text" className="form-control"
                                onChange={
                                    (event) => setDescripcionEjercicio(event.target.value)
                                }
                                defaultValue={
                                    store.ejercicio.description
                                }/>
                        </div>
                    </div>

                    <div className="row"
                        style={
                            {
                                marginBottom: "15px",
                                marginTop: "25px"
                            }
                    }>
                        <div className="col">
                            <label htmlFor="nombre" className="form-label">
                                <b>Foto del ejercicio (URL):</b>
                            </label>

                            <input type="text" className="form-control" id="basic-url"
                                onChange={
                                    (event) => setImagen(event.target.value)
                                }
                                defaultValue={
                                    store.ejercicio.photo_exercise
                                }/>
                        </div>

                        <div className="col">
                            <label htmlFor="nombre" className="form-label">
                                <b>Video del ejercicio (URL):</b>
                            </label>

                            <input type="text" className="form-control" id="basic-url"
                                onChange={
                                    (event) => setVideo(event.target.value)
                                }
                                defaultValue={
                                    store.ejercicio.video_exercise
                                }/>
                        </div>
                    </div>

                    <div className="row"
                        style={
                            {
                                marginBottom: "15px",
                                marginTop: "25px"
                            }
                    }>
                        <div className="col">
                            <button type="button" className="btn btn-outline-danger w-25 float-end"
                                onClick={modificarEjercicio}>
                                Guardar
                            </button>
                        </div>
                    </div>
                </form>
            </div>
            {/* cierra div container */} </div>
    </>);


}
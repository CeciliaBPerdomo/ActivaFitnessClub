import React, {useState, useContext, useEffect} from "react";
import {Context} from "../store/appContext";
import {Link} from "react-router-dom";
import swal from "sweetalert";

export const CrearEjercicio = () => {
    const [nombreEjercicio, setNombreEjercicio] = useState("");
    const [tipoEjercicio, setTipoEjercicio] = useState("");
    const [imagen, setImagen] = useState("");
    const [descripcionEjercicio, setDescripcionEjercicio] = useState("");
    const [video, setVideo] = useState("");

    const {actions} = useContext(Context);

    const agregarEjercicio = (event) => { // event.preventDefault();

        swal({
            title: "Ejercicio Creado",
            icon: "success",
            buttons: {
                confirm: {
                    text: 'Entendido',
                    className: 'sweet-warning'
                }

            },

            // Guarda el formulario
            actions: actions.crearEjercicio(nombreEjercicio, tipoEjercicio, descripcionEjercicio, imagen, video)
        });

        // Limpia el formulario
        setNombreEjercicio("");
        setTipoEjercicio("");
        setImagen("");
        setDescripcionEjercicio("");
        setVideo("");
    };

    return (
        <>
            <div className="container vh-100"
                style={
                    {
                        marginTop: "90px",
                        marginBottom: "35px"
                    }
            }>
                {/* Titulo */}
                <h1 style={
                    {color: "white"}
                }>
                    <i className="fa fa-dumbbell"></i>
                    Ingresar nuevo ejercicio
                </h1>
                <br/> {/* Listado de ejercicios */}
                <div>
                    <Link to={"/ListadoEjercicios"}>
                        <button type="button" className="btn btn-danger w-50 float-end border border-white"
                            style={
                                {
                                    background: "#A00404",
                                    marginBottom: "20px",
                                    color: "white"
                                }
                        }>
                            Listado de ejercicios
                        </button>
                    </Link>
                </div>
                <br/>
                <div className="formulario text-light">
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

                                <input type="text" placeholder="Nombre del ejercicio" className="form-control"
                                    onChange={
                                        (event) => setNombreEjercicio(event.target.value)
                                    }
                                    value={nombreEjercicio}/>
                            </div>

                            <div className="col">
                                <label htmlFor="tipo" className="form-label">
                                    <b>Tipo de ejercicio:</b>
                                </label>

                                <input type="text" placeholder="Tipo de ejercicio" className="form-control"
                                    onChange={
                                        (event) => setTipoEjercicio(event.target.value)
                                    }
                                    value={tipoEjercicio}/>
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
                                <input type="text" placeholder="Descripción del ejercicio" className="form-control"
                                    onChange={
                                        (event) => setDescripcionEjercicio(event.target.value)
                                    }
                                    value={descripcionEjercicio}/>
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

                                <input type="text" placeholder="URL Foto del ejercicio" className="form-control" id="basic-url"
                                    onChange={
                                        (event) => setImagen(event.target.value)
                                    }
                                    value={imagen}/>
                            </div>

                            <div className="col">
                                <label htmlFor="nombre" className="form-label">
                                    <b>Video del ejercicio (URL):</b>
                                </label>

                                <input type="text" placeholder="URL Vídeo del ejercicio" className="form-control" id="basic-url"
                                    onChange={
                                        (event) => setVideo(event.target.value)
                                    }
                                    value={video}/>
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
                                <button type="button"
                                    style={
                                        {
                                            color: "white",
                                            background: "#A00404"
                                        }
                                    }
                                    className="btn btn-danger w-50 float-end border border-white"
                                    onClick={
                                        () => agregarEjercicio()
                                }>
                                    Agregar nuevo ejercicio
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
                {/* cierra div container */}
                {" "} </div>
        </>
    );
};

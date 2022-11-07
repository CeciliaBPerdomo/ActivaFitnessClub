import React, {useState, useContext, useEffect} from "react";
import {Link, useParams} from "react-router-dom"
import {Context} from "../store/appContext";
import ReactPlayer from 'react-player'


export const VistaEjercicio = () => {

    const {store, actions} = useContext(Context);
    const params = useParams();

    const [nombreEjercicio, setNombreEjercicio] = useState(store.ejercicio.exercise_name);
    const [tipoEjercicio, setTipoEjercicio] = useState(store.ejercicio.type_of_muscle);
    const [descripcionEjercicio, setDescripcionEjercicio] = useState(store.ejercicio.description);
    const [imagen, setImagen] = useState(store.ejercicio.photo_exercise);
    const [video, setVideo] = useState(store.ejercicio.video_exercise);

    const [next, setNext] = useState("")
    const [down, setDown] = useState("")

    useEffect(() => {
        actions.obtenerEjercicioId(parseInt(params.theid));

        setDown(String(Number(params.theid) - 1))
        setNext(String(Number(params.theid) + 1))
    }, [params.theid]);


    return (<>
        <div>
            <br/> {/* Titulo */}
            <h1 className="justify-content-center d-flex">
                <i className="fa fa-dumbbell"></i>
                {
                store.ejercicio.exercise_name
            } </h1>
            <br/>


            <div className="justify-content-center d-flex">
                <div className="card"
                    style={
                        {

                            width: "47%",
                            display: "flex",
                            margin: "auto",
                            borderRadius: "7px",
                            boxShadow: "0px 14px 32px 0px rgb(0, 0, 0, 0.5)",
                            overflow: "hidden",
                            boxSizing: "border-box"
                        }

                }>
                    <div style={
                        {borderRadius: "10 5 5 5 5"}
                    }>
                        <img src={
                                store.ejercicio.photo_exercise
                            }
                            className="card-img-top"
                            alt="..."/>
                    </div>
                    <div className="card-body"
                        style={
                            {width: "50%"}
                    }>
                        <h5 style={
                            {
                                marginLeft: "38px",
                                fontSize: "34px",
                                paddingTop: "10px"
                            }
                        }>Descripción</h5>
                        <p className="card-text"
                            style={
                                {
                                    fontSize: "20px",
                                    paddingTop: "10px"
                                }
                        }> {
                            store.ejercicio.description
                        }</p>
                    </div>
                    <ul className="list-group list-group-flush">

                        <div className="d-flex">
                            <ReactPlayer style={
                                    {
                                        width: "100%",
                                        height: "100%"
                                    }
                                }
                                url={
                                    store.ejercicio.video_exercise
                                }
                                controls
                                playing
                                muted></ReactPlayer>
                        </div>

                    </ul>

                </div>
            </div>

            <br/>
            <div className="btn " role="group" aria-label="Basic outlined example"
                //     style={
                //         {marginRight: "70px"}
                // }
            >
                <Link to={
                    "/vistaEjercicio/" + down
                }>
                    <button className="btn btn-dark float-left"
                        style={
                            {}
                    }>Down</button>
                </Link>
                <Link to={
                    "/vistaEjercicio/" + next
                }>
                    <button className="btn btn-dark float-right">Next</button>
                </Link>
            </div>
            <br/>

        </div>
    </>)
};

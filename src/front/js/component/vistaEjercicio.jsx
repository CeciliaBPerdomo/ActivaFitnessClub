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

        <br/> {/* Titulo */}
        <h1 className="justify-content-center d-flex">
            <i className="fa fa-dumbbell"></i>
            {
            store.ejercicio.exercise_name
        } </h1>
        <br/>


        <div className="justify-content-center d-flex"
            style={
                {

                    width: "50%",
                    display: "flex",
                    margin: "auto",
                    borderRadius: "7px",
                    boxShadow: "0px 14px 32px 0px rgb(0, 0, 0, 0.5)",
                    overflow: "hidden",
                    boxSizing: "border-box"
                }

        }>
            <div className="card"
                style={
                    {
                        width: "40rem",
                        display: "flex",
                        margin: "auto",
                        borderRadius: "7px"
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
                    <p className="card-text"> {
                        store.ejercicio.description
                    }</p>
                </div>
                <ul className="list-group list-group-flush">

                    <div className="d-flex">
                        <ReactPlayer // style={
                            //         {
                            //             width: "370",
                            //             height: "215"
                            //         }
                            //     }
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
        <div className="d-flex justify-content-end " role="group" aria-label="Basic outlined example"
            style={
                {marginRight: "70px"}
        }>
            <Link to={
                "/vistaEjercicio/" + down
            }>
                <button className="btn btn-outline-primary">Down</button>
            </Link>
            <Link to={
                "/vistaEjercicio/" + next
            }>
                <button className="btn btn-outline-primary">Next</button>
            </Link>
        </div>
        <br/>
        */

    </>)
};


{ /* <div className="justify-content-center d-flex"
style={
    {

        width: "50%",
        display: "flex",
        margin: "auto",
        borderRadius: "7px",
        boxShadow: "0px 14px 32px 0px rgb(0, 0, 0, 0.5)",
        overflow: "hidden",
        boxSizing: "border-box"
    }

}>
<div className="card"
    style={
        {
            width: "40rem",
            display: "flex",
            margin: "auto",
            borderRadius: "7px"
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
        <p className="card-text"> {
            store.ejercicio.description
        }</p>
    </div>
    <ul className="list-group list-group-flush">

        <div className="d-flex">
            <ReactPlayer // style={
                //         {
                //             width: "370",
                //             height: "215"
                //         }
                //     }
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
<div className="d-flex justify-content-end " role="group" aria-label="Basic outlined example"
style={
    {marginRight: "70px"}
}>
<Link to={
    "/vistaEjercicio/" + down
}>
    <button className="btn btn-outline-primary">Down</button>
</Link>
<Link to={
    "/vistaEjercicio/" + next
}>
    <button className="btn btn-outline-primary">Next</button>
</Link>
</div>
<br/> */
}

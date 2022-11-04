import React, {useState, useContext, useEffect} from "react";
import {Link, useParams} from "react-router-dom"
import {Context} from "../store/appContext";


export const VistaEjercicio = () => {

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


    return (<>
        <div className="card"
            style={
                {width: "18rem"}
        }>
            <img src="..." className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title"> {
                    store.ejercicio.exercise_name
                }</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
            <ul className="list-group list-group-flush">

                <li className="list-group-item">ACA VA EL VIDEO</li>
            </ul>
            <div className="card-body">
                <Link to="" className="card-link">Card link</Link>
                <Link to="" className="card-link">Another link</Link>
            </div>
        </div>
    </>)
};

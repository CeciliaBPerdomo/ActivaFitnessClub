import React from "react";
import {Link} from "react-router-dom";
import {EjerciciosTodos} from "../pages/todosEjercicios.jsx";

export const VerEjercicio = () => {

    return (
        <>
            <div className="card-group">
                {/* Buscar */}
                <div>
                    <input className="form-control" list="datalistOptions" id="exampleDataList" placeholder="Buscar por nombre..."/>
                </div>

                <div className="card">
                    <div className="card-body">
                        <h2 className="display-6">
                            <i className="fa fa-dumbbell"></i>
                            {
                            store.ejercicio.exercise_name
                        }</h2>
                        <img src={
                                store.ejercicio.photo_exercise
                            }
                            className="card-img-top"
                            alt="..."/>
                    </div>
                    <div className="card-body text-center">
                        <button type="button" className="btn btn-outline-info">
                            <i className="fa fa-eye"></i>
                        </button>
                    </div>
                </div>


            </div>
            <hr/>


            <br/>
            <br/>
            <div>
                <Link to={"/crearEjercicio"}>
                    <a href="#" className="link-primary">Crear otro ejercicio</a>
                </Link>
            </div>
        </>
    )
}

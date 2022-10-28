import React, {useState, useContext, useEffect} from "react";
import {Link} from "react-router-dom";
import {Context} from "../store/appContext";

export const MisPagos = () => {

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

                {/* Nuevo Alumno */}
                <br/>
                <div className="w-75">
                    <Link to={"/crearAlumno"}>
                        <button type="button" className="btn btn-outline-success w-25">
                            Ingresar nuevo alumno
                        </button>
                    </Link>
                </div>
                <br/>
            </div>
        </>
    )
}

import React from "react";
import {Link} from "react-router-dom";

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
                        <h1 className="display-6">Ejercicios de Pecho</h1>
                        <img src="https://mejorconsalud.as.com/wp-content/uploads/2021/11/ejercicio-polea-pecho.jpg" className="card-img-top" alt="..."/>
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

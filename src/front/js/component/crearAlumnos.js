import React from "react";
import {Link} from "react-router-dom"

export const CrearAlumno = () => {
    return (
        <>
        <div className="container">
        <div className="mb-3 w-75">
            <label for="exampleDataList" className="form-label">Buscar</label>
            <input className="form-control" list="datalistOptions" id="exampleDataList" placeholder="Buscar..."/>
                <datalist id="datalistOptions"/>
                    <option value="..."/>
                    <option value="..."/>
                    <option value="..."/>
                    <option value="..."/>
                    <option value="..."/>
        </div>

    <form>
        <div className="mb-3">
            <label for="" className="form-label">Cedula</label>
            <input type="" className="form-control" id="exampleInputEmail1"/>
            <div id="emailHelp" className="form-text"></div>
        </div>
        <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">Nombre</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            <div id="emailHelp" className="form-text"></div>
        </div>
        <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">Apellido</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            <div id="emailHelp" className="form-text"></div>
        </div>
        <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">Celular</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            <div id="emailHelp" className="form-text"></div>
        </div>
        <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">Fecha de nacimiento</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            <div id="emailHelp" className="form-text"></div>
        </div>
        <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">Fecha de ingreso</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            <div id="emailHelp" className="form-text"></div>
        </div>
        <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">Mutualista</label>
            <select className="form-select" id="inputGroupSelect01">
            <option selected>Choose...</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
            </select>
        </div>
        <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">Afecciones medicas</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            <div id="emailHelp" className="form-text"></div>
        </div>
        <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">Objetivo entrenamiento</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            <div id="emailHelp" className="form-text"></div>
        </div>
        <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">Email</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            <div id="emailHelp" className="form-text"></div>
        </div>
        <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1"/>
        </div>
        <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">Actividades</label>
            <select className="form-select" id="inputGroupSelect01">
            <option selected>Choose...</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
            </select>
        </div>
        <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">Rol</label>
            <select className="form-select" id="inputGroupSelect01">
            <option selected>Choose...</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
            </select>
        </div>
        <div>
            <button type="button" className="btn btn-outline-primary w-100">Agregar</button>
        </div>
    </form>
    </div>
    </>

    );
};
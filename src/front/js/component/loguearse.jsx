import React, {useContext, useState, useEffect} from "react";
import {Link} from "react-router-dom";
import {Context} from "../store/appContext";
import {useNavigate} from "react-router-dom";

import fondologin from "../../img/fondologin.png";
import "../../styles/loginn.css";

const Log_in = () => {
    const [guardadoEmail, setGuardadoEmail] = useState("");
    const [guardadoPassword, setGuardadoPassword] = useState("");
    const {actions, store} = useContext(Context);
    let navegacion = useNavigate();

    // Prevenir el envio
    const ingreso = async (e) => {
        e.preventDefault();

        let logged = await actions.login(guardadoEmail, guardadoPassword);


        if (logged.user.role === "Alumno") {
            navegacion("/homeUsuario");
        } else if (logged.user.role === "Administrador") {
            navegacion("/homeAdmin");
        } else {
            null;
        }

        setGuardadoEmail("");
        setGuardadoPassword("");
    };

    return (
        <>
            <div className="bg-loguearse vh-100">
                <br/>
                <div style={
                        {width: "100%"}
                    }
                    className="d-flex justify-content-center">
                    <div className="card"
                        style={
                            {width: "23rem"}
                    }>
                        <div className="card-body">
                            {/* Titulo */}
                            <div className="titulo"
                                style={
                                    {marginTop: "25px"}
                            }>
                                <h1 style={
                                    {
                                        justifyContent: "center",
                                        display: "flex"
                                    }
                                }>
                                    Iniciar sesión
                                </h1>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">
                                    Email:
                                </label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                                    onChange={
                                        (e) => setGuardadoEmail(e.target.value)
                                    }
                                    value={guardadoEmail}
                                    // onKeyDown={}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">
                                    Contraseña:
                                </label>
                                <input type="password" className="form-control" id="exampleInputPassword1"
                                    onChange={
                                        (e) => setGuardadoPassword(e.target.value)
                                    }
                                    value={guardadoPassword}
                                    // onKeyDown={}
                                />
                            </div>
                            <div style={
                                {
                                    display: "d-flex",
                                    justifyContent: "center",
                                    alignContent: "center"
                                }
                            }>
                                <Link className="btn btn-secundary mx-2" type="submit"
                                    to={"/cambiarcontra"}>
                                    <i>¿Has olvidado de tu contraseña?</i>
                                </Link>
                                <button type="submit" className="btn btn-primary d-flex content-justify-center"
                                    onClick={ingreso}>
                                    Ingresar
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Log_in;

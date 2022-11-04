import React, {useContext, useState, useEffect} from "react";
import {Link, useHistory} from "react-router-dom"
import {Context} from "../store/appContext";
import fondologin from "../../img/fondologin.png"
import "../../styles/loginn.css";

const Log_in = () => {

    const [guardadoEmail, setGuardadoEmail] = useState("")
    const [guardadoPassword, setGuardadoPassword] = useState("")
    const {actions, store} = useContext(Context);
    // const history = useHistory()

    // Prevenir el envio
    const ingreso = (e) => {
        e.preventDefault()

        let logged = actions.login(guardadoEmail, guardadoPassword)

        logged ? navegacion.push("/") : null

        setGuardadoEmail("")
        setGuardadoPassword("")
    }

    // const unirse = (e) => {
    //     e.preventDefault()
    //     navegacion.push("/registrarse")
    // }
    return (
        <>
            <div className="bg-loguearse vh-100">
                <br/>
                <div style={
                        {width: '100%'}
                    }
                    className="d-flex justify-content-center">
                    <div className="card"
                        style={
                            {width: "23rem"}
                    }>
                        <div className="card-body">
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                                    onChange={
                                        (e) => setGuardadoEmail(e.target.value)
                                    }
                                    value={guardadoEmail}
                                    onKeyDown={ingreso}/>
                                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1"
                                    onChange={
                                        (e) => setGuardadoPassword(e.target.value)
                                    }
                                    value={guardadoPassword}
                                    onKeyDown={ingreso}/>
                            </div>
                            <Link className="btn btn-secundary mx-2" type="submit"
                                to={"/cambiarcontra"}>
                                <i>¿Has olvidado de tu contraseña?</i>
                            </Link>
                            <button type="submit" className="btn btn-primary"
                                onClick={sumbit}>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Log_in;


/* <div style={
                {backgroundImage: `url("https://img.freepik.com/foto-gratis/pesos-ejercicio-pesas-fuerte-atletica_1139-709.jpg?w=740&t=st=1666975970~exp=1666976570~hmac=40bbde5e75ccacb3bd71337b68456e9e88f66a069bddace0d1c927a9be174ce4")`}
            }> */
/* </div> */

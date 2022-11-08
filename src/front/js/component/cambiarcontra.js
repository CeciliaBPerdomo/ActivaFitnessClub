import React, {useState, useContext} from "react";
import {Link} from "react-router-dom";
import {Context} from "../store/appContext";
import {useNavigate} from "react-router-dom";


export const Cambiarcontra = () => {

    const [cambioContra, setCambioContra] = useState("")
    let navegacion = useNavigate()
    const {store, actions} = useContext(Context)

    const envioMail = async (e) => {
        e.preventDefault()
        actions.cambioPass(cambioContra)


        let mail = (cambioContra)
        console.log(mail);


    }

    return (
        <>
            <div className="container">
                <br/>
                <h1 className="display-5 text-center">Cambio de contraseña</h1>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"
                        value={cambioContra}
                        onChange={
                            (e) => setCambioContra(e.target.value)
                        }/>
                </div>

                <div>
                    <button type="submit" className="btn btn-warning"
                        onClick={envioMail}>Solicitar nueva contraseña</button>
                </div>
            </div>

        </>
    )
}

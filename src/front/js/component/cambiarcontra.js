import React, {useState} from "react";
import {Link} from "react-router-dom";

export const Cambiarcontra = () => {
    const [cambiarcontra, setCambiarContra] = useState("")
    const returnToLog = async (e) => {}

    return (
        <>
            <div className="container">
                <br/>
                <h1 className="display-5 text-center">Cambio de contraseña</h1>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"
                        onChange={
                            (e) => setCambiarContra(e.target.value)
                        }
                        value={cambiarcontra}/>
                </div>

                <div>
                    <button type="button" className="btn btn-warning"
                        onClick={
                            () => Cambiarcontra
                    }>Solicitar nueva contraseña</button>
                </div>
            </div>

        </>
    )
}

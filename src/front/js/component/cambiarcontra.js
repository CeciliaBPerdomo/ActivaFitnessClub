import React from "react";
import { Link } from "react-router-dom";

export const Cambiarcontra = () => {

    return (
      <>
      <div className="container">
        <br />
        <h1 className="display-5 text-center">Cambio de contraseña</h1>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                </div>

                <div>
                <button type="button" className="btn btn-warning">Solicitar nueva contraseña</button>
                </div>
      </div>
      
      </>
    )
}
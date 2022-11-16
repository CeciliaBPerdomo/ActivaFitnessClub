import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

export const Cambiarcontra = () => {
  const [cambioContra, setCambioContra] = useState("");
  let navegacion = useNavigate();
  const { store, actions } = useContext(Context);

  const envioMail = async (e) => {
    e.preventDefault();
    actions.cambioPass(cambioContra);

    let mail = cambioContra;
    console.log(mail);
  };

  return (
    <>
      <div className="container">
        <br />
        <div
          style={{ width: "100%" }}
          className="d-flex justify-content-center"
        >
          <div className="card" style={{ width: "30rem" }}>
            <div className="card-body">
              <div className="titulo" style={{ marginTop: "25px" }}>
                <h1
                  style={{
                    justifyContent: "center",
                    display: "flex",
                  }}
                ></h1>
                <h1 className="display-5 text-center">Cambio de contraseña</h1>
                <br />
                <div className="mb-3">
                  <label
                    htmlFor="exampleFormControlInput1"
                    className="form-label"
                  >
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="name@example.com"
                    value={cambioContra}
                    onChange={(e) => setCambioContra(e.target.value)}
                  />
                </div>

                <div>
                  <button
                    type="submit"
                    className="btn btn-warning"
                    onClick={envioMail}
                  >
                    Solicitar nueva contraseña
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
    </>
  );
};

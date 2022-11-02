import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";

// ///////////////////////////////////////////
// ADMIN PUEDE AGREGAR NUEVAS MENSUALIDADES//
// /////////////////////////////////////////

export const CrearMensualidad = () => {
  const [nombreUsuario, setNombreUsuario] = useState("");
  const [apellido, setApellido] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [fechaPago, setFechaPago] = useState("");
  const [numeroFactura, setNumeroFactura] = useState("");
  const [monto, setMonto] = useState("");

  const { actions, store } = useContext(Context);

  useEffect(() => {
    actions.obtenerAlumnos();
  }, []);

  const agregarMensualidad = (event) => {
    event.preventDefault();

    setNombreUsuario("");
    setApellido("");
    setImagen("");
    setDescripcion("");
    setFechaPago("");
    setNumeroFactura("");
    setMonto("");
  };

  return (
    <>
      <div
        className="container"
        style={{ marginTop: "20px", marginBottom: "35px" }}
      >
        {/* Titulo */}
        <h1>
          <i className="fa fa-wallet"></i> Pago de mensualidades
        </h1>
        <br />

        <div className="formulario w-75">
          <form onSubmit={agregarMensualidad}>
            <div
              className="container text-start "
              style={{ marginTop: "10px" }}
            >
              <div className="row"></div>
            </div>

            <div className="row">
              <div className="col">
                <label htmlFor="Alumno" className="form-label">
                  <b>Alumnos:</b>
                </label>

                <select className="form-select" id="inputGroupSelect01">
                  {store.alumnos.map((item, id) => (
                    <option key={id} value={item.value}>
                      {item.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </form>
        </div>
        <div className="card container-md center" style={{ width: "40rem" }}>
          <div className="card-body">
            <div className="input-group input-group-sm mb-3">
              <span className="input-group-text" id="inputGroup-sizing-sm">
                Nombre
              </span>
              <input
                type="text"
                className="form-control"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-sm"
                onChange={(event) => setNombreUsuario(event.target.value)}
                value={nombreUsuario}
              />
            </div>

            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon3">
                Apellido
              </span>
              <input
                type="text"
                className="form-control"
                id="basic-url"
                aria-describedby="basic-addon3"
                onChange={(event) => setApellido(event.target.value)}
                value={apellido}
              />
            </div>
            <div className="input-group input-group-sm mb-3">
              <span className="input-group-text" id="inputGroup-sizing-sm">
                Fecha de pago
              </span>
              <input
                type="date"
                className="form-control"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-sm"
                onChange={(event) => setFechaPago(event.target.value)}
                value={fechaPago}
              />
            </div>
            <div className="d-flex">
              <div className="input-group input-group-sm mb-3">
                <span className="input-group-text" id="inputGroup-sizing-sm">
                  Monto
                </span>
                <input
                  type="text"
                  className="form-control"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-sm"
                  onChange={(event) => setMonto(event.target.value)}
                  value={monto}
                />
              </div>
              <div className="input-group input-group-sm mb-3">
                <span className="input-group-text" id="inputGroup-factura">
                  Nº Factura
                </span>
                <input
                  type="text"
                  className="form-control"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-sm"
                  onChange={(event) => setNumeroFactura(event.target.value)}
                  value={numeroFactura}
                />
              </div>
            </div>
            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon3">
                Descripción
              </span>
              <input
                type="text"
                className="form-control"
                id="basic-description"
                aria-describedby="basic-addon3"
                onChange={(event) => setDescripcion(event.target.value)}
                value={descripcion}
              />
            </div>
          </div>
          {/* Boton */}
          <div style={{ marginBottom: "15px" }}>
            <button
              type="button"
              className="btn btn-outline-success w-50 float-end"
              onClick={agregarMensualidad}
            >
              Agregar pago nueva mensualidad
            </button>
          </div>
        </div>
        <br />
      </div>
    </>
  );
};

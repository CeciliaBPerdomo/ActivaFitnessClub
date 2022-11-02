import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";

// ///////////////////////////////////////////
// ADMIN PUEDE AGREGAR NUEVAS MENSUALIDADES//
// /////////////////////////////////////////

export const CrearMensualidad = () => {
  const [idUsuario, setId] = useState("");
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

        {/* Listado de mensualidades */}
        <div>
          <Link to={"/mensualidades"}>
            <button
              type="button"
              className="btn btn-outline-danger float-end"
              style={{ marginBottom: "20px" }}
            >
              Listado de mensualidades
            </button>
          </Link>
        </div>
        <br />

        <div className="formulario">
          <form onSubmit={agregarMensualidad}>
            <div
              className="container text-start "
              style={{ marginTop: "10px" }}
            >
              <div className="row"></div>
            </div>

            <div
              className="row"
              style={{ marginBottom: "15px", marginTop: "25px" }}
            >
              <div className="col">
                <label htmlFor="Alumno" className="form-label">
                  <b>Alumno:</b>
                </label>

                <select className="form-select" id="inputGroupSelect01">
                  {store.alumnos.map((item, id) => (
                    <option key={id} value={item.id}>
                      {item.name} {item.last_name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="row" style={{ marginBottom: "15px" }}>
              <div className="col">
                <label htmlFor="validationCustom01" className="form-label">
                  <b>Fecha de pago:</b>
                </label>
                <input
                  type="date"
                  className="form-control"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-sm"
                  onChange={(event) => setFechaPago(event.target.value)}
                  value={fechaPago}
                />
              </div>
            </div>

            <div className="row" style={{ marginBottom: "15px" }}>
              <div className="col">
                <label htmlFor="validationCustom01" className="form-label">
                  <b>Monto:</b>
                </label>
                <input
                  type="text"
                  className="form-control"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-sm"
                  onChange={(event) => setMonto(event.target.value)}
                  value={monto}
                />
              </div>

              <div className="col">
                <label htmlFor="validationCustom01" className="form-label">
                  <b>No. de Factura:</b>
                </label>

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

            <div className="row" style={{ marginBottom: "15px" }}>
              <div className="col">
                <label htmlFor="validationCustom01" className="form-label">
                  <b>Comentarios:</b>
                </label>
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
          </form>
        </div>

        {/* Boton */}
        <div style={{ marginBottom: "100px", marginTop: "30px" }}>
          <button
            type="button"
            className="btn btn-outline-danger w-50 float-end"
            onClick={agregarMensualidad}
          >
            Agregar pago nueva mensualidad
          </button>
        </div>
      </div>
    </>
  );
};

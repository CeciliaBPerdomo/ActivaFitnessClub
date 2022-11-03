import React, { useState, useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

// ///////////////////////////////////////////
// ADMIN PUEDE MODIFICAR LAS MENSUALIDADES //
// /////////////////////////////////////////

export const EditarMensualidad = () => {
  const { store, actions } = useContext(Context);
  const params = useParams();

  const [descripcion, setDescripcion] = useState(store.mens.description);
  const [fechaPago, setFechaPago] = useState(store.mens.payment_date);
  const [numeroFactura, setNumeroFactura] = useState(store.mens.bill_n);
  const [monto, setMonto] = useState(store.mens.payment_amount);
  const [user_id, setUser_id] = useState(store.mens.user_id);

  useEffect(() => {
    actions.obtenerMensualidadIdMensualidad(parseInt(params.theid));
  }, []);

  let nombre = store.mens?.userInfo?.name;
  let apellido = store.mens?.userInfo?.last_name;
  let nombreCompleto = nombre + " " + apellido;

  const modificarMensualidad = (e) => {
    e.preventDefault();

    let id = parseInt(params.theid);

    actions.modificarMensualidad(
      id,
      user_id,
      fechaPago,
      numeroFactura,
      monto,
      descripcion
    );
  };

  return (
    <>
      <div
        className="container"
        style={{
          marginTop: "20px",
          marginBottom: "35px",
        }}
      >
        {" "}
        {/* Titulo */}
        <h1>
          <i className="fa fa-wallet"></i> Editar mensualidad
        </h1>{" "}
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
        {/* Formulario */}
        <div className="formulario">
          <form onSubmit={modificarMensualidad}>
            <div
              className="container text-start "
              style={{ marginTop: "10px" }}
            >
              <div className="row"></div>
            </div>

            <div
              className="row"
              style={{
                marginBottom: "15px",
                marginTop: "25px",
              }}
            >
              <div className="col">
                <label htmlFor="Alumno" className="form-label">
                  <b>Alumno:</b>
                </label>
                <input
                  type="text"
                  className="form-control"
                  value={nombreCompleto}
                />
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
                  onChange={(e) => setFechaPago(e.target.value)}
                  defaultValue={store.mens.payment_date}
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
                  onChange={(e) => setMonto(e.target.value)}
                  defaultValue={store.mens.payment_amount}
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
                  onChange={(e) => setNumeroFactura(e.target.value)}
                  defaultValue={store.mens.bill_n}
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
                  onChange={(e) => setDescripcion(e.target.value)}
                  defaultValue={store.mens.description}
                />
              </div>
            </div>
          </form>
        </div>
        {/* Boton */}
        <div
          style={{
            marginBottom: "100px",
            marginTop: "30px",
          }}
        >
          <button
            type="button"
            className="btn btn-outline-danger w-50 float-end"
            onClick={modificarMensualidad}
          >
            Guardar modificación
          </button>
        </div>
      </div>
    </>
  );
};

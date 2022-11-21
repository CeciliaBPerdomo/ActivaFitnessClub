import React, { useState, useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import swal from "sweetalert";

// ///////////////////////////////////////////
// ADMIN PUEDE MODIFICAR LAS MENSUALIDADES //
// /////////////////////////////////////////

export const EditarMensualidad = () => {
  const { store, actions } = useContext(Context);
  const params = useParams();

  const [descripcion, setDescripcion] = useState(store.mensualidad.description);
  const [fechaPago, setFechaPago] = useState(store.mensualidad.payment_date);
  const [numeroFactura, setNumeroFactura] = useState(store.mensualidad.bill_n);
  const [monto, setMonto] = useState(store.mensualidad.payment_amount);
  const [user_id, setUser_id] = useState(store.mensualidad.user_id);

  useEffect(() => {
    actions.obtenerMensualidadIdMensualidad(parseInt(params.theid));
  }, []);

  let nombre = store.mensualidad?.userInfo?.name;
  let apellido = store.mensualidad?.userInfo?.last_name;
  let nombreCompleto = nombre + " " + apellido;

  const modificarMensualidad = (e) => {
    e.preventDefault();
    let id = parseInt(params.theid);
    swal({
      title: "Cambios realizados",
      icon: "success",
      button: "Aceptar",
      actions: actions.modificarMensualidad(
        id,
        user_id,
        fechaPago,
        numeroFactura,
        monto,
        descripcion
      ),
    });
  };

  return (
    <>
      <div
        className="container"
        style={{
          marginTop: "80px",
          marginBottom: "35px",
          color: "white",
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
              className="btn btn-outline-danger w-50 float-end"
              style={{ marginBottom: "20px", color: "white" }}
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
              <div className="col" style={{ color: "white" }}>
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
                  defaultValue={store.mensualidad.payment_date}
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
                  defaultValue={store.mensualidad.payment_amount}
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
                  defaultValue={store.mensualidad.bill_n}
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
                  onChange={(e) => setDescripcion(e.target.value)}
                  defaultValue={store.mensualidad.description}
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
            style={{ color: "white" }}
            onClick={(e) => modificarMensualidad(e)}
          >
            Guardar modificación
          </button>
        </div>
      </div>
    </>
  );
};

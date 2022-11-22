import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";

export const Alumno = () => {
  const { store, actions } = useContext(Context);
  const params = useParams();

  useEffect(() => {
    actions.obtenerAlumnoId(parseInt(params.theid));
    actions.obtenerMensualidadId(parseInt(params.theid));
  }, []);

  return (
    <>
      <div
        className="titulo"
        style={{
          marginTop: "60px",
          color: "white",
          marginLeft: "15px",
        }}
      >
        <br />{" "}
        <h1>
          <i className="fa fa-user"></i> Información detallada
        </h1>
        <br />
      </div>
      <div>
        {" "}
        {/* Informacion detalla del alumno */}
        <div
          className="card text-start border-danger"
          style={{ margin: "15px" }}
        >
          <div className="card-header border-danger">
            <h3 style={{ color: "#A00404" }}>
              {store.alumno.name} {store.alumno.last_name}{" "}
            </h3>
          </div>
          <div className="card-body">
            <h4 className="card-title">
              Motivo del entrenamiento:
              <b> {store.alumno.training_goals}</b>
            </h4>
            <br />
            <h4>
              Actividad:
              <b> {store.alumno.activities}</b>
            </h4>
            <br />
            <div className="container text-start">
              <div className="row">
                <div className="col">
                  {" "}
                  <h5>
                    Cédula:
                    <b> {store.alumno.ci}</b>
                  </h5>
                </div>
                <div className="col">
                  <h5>
                    Fecha de nacimiento:
                    <b> {store.alumno.birthday}</b>
                  </h5>
                </div>
                <div className="col">
                  <h5>
                    Fecha de ingreso:
                    <b> {store.alumno.date_of_admission}</b>
                  </h5>
                </div>
              </div>

              <div className="row">
                <div className="col">
                  <h5>
                    Mutualista:
                    <b> {store.alumno.mutualist}</b>
                  </h5>
                </div>

                <div className="col">
                  <h5>
                    Afecciones médicas:
                    <b> {store.alumno.medical_conditions}</b>
                  </h5>
                </div>
                <div className="col">
                  <h5>
                    Medicamentos:
                    <b> {store.alumno.medicines}</b>
                  </h5>
                </div>
              </div>

              <div className="row">
                <div className="col">
                  <h5>
                    Mail:
                    <b> {store.alumno.email}</b>
                  </h5>
                </div>
                <div className="col">
                  <h5>
                    Mensualidad:
                    <b> ${store.alumno.cuota}</b>
                  </h5>
                </div>
                <div className="col"></div>
              </div>
            </div>
          </div>
          <div className="card-footer text-end border-danger">
            <Link to={"/listaAlumno"}>
              <button type="button" className="btn btn-outline-danger w-25">
                Listado de alumnos
              </button>
            </Link>
          </div>
        </div>
        {/* Rutina actual del alumno */}
        {/* <div
          className="card text-start border-success"
          style={{ margin: "35px" }}
        >
          <div className="card-header border-success">
            <h3>Rutina actual</h3>
          </div>
          <div className="card-body">
            <h4 className="card-title">Rutina</h4>

            <div className="container text-start">Rutina!</div>
          </div>
          <div className="card-footer text-end border-success"> */}
        {/* <Link to={"/listaAlumno"}> */}
        {/* <button type="button" className="btn btn-outline-success">
              Listado de rutinas
            </button> */}
        {/* </Link> */}
        {/* </div>
        </div> */}
        {/* Mensualidades */}
        <div
          className="card text-start border-danger"
          style={{ margin: "15px", marginTop: "30px" }}
        >
          <div className="card-header border-danger">
            <h3 style={{ color: "#A00404" }}>Mensualidad</h3>
          </div>
          <div className="card-body">
            {store.mens.map((item, id) => (
              <div className="row" key={id}>
                <div className="col">
                  <h5>
                    Fecha de pago:
                    <b> {item.payment_date}</b>
                  </h5>
                </div>
                <div className="col">
                  <h5>
                    Monto:
                    <b> ${item.payment_amount}</b>
                  </h5>
                </div>
                <div className="col">
                  <h5>
                    Factura:
                    <b> {item.bill_n}</b>
                  </h5>
                </div>
              </div>
            ))}{" "}
          </div>
          <div className="card-footer text-end border-danger">
            <Link to={"/mensualidades/"}>
              <button type="button" className="btn btn-outline-danger w-25">
                Listado de mensualidades
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

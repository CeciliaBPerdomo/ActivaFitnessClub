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
      <div>
        {/* Informacion detalla del alumno */}
        <div
          className="card text-start border-danger"
          style={{ margin: "35px" }}
        >
          <div className="card-header border-danger">
            <h3>
              <i className="fa fa-user"></i> {store.alumno.name}{" "}
              {store.alumno.last_name}{" "}
            </h3>
          </div>
          <div className="card-body">
            <h4 className="card-title">
              Motivo del entrenamiento: <b>{store.alumno.training_goals}</b>
            </h4>
            <br />
            <h4>
              Actividad: <b>{store.alumno.activities}</b>
            </h4>
            <br />
            <div className="container text-start">
              <div className="row">
                <div className="col">
                  Cedula: <b>{store.alumno.ci}</b>
                </div>
                <div className="col">
                  Fecha de nacimiento: <b>{store.alumno.birthday}</b>
                </div>
                <div className="col">
                  Fecha de ingreso: <b>{store.alumno.date_of_admission}</b>
                </div>
              </div>

              <div className="row">
                <div className="col">
                  Mutualista: <b>{store.alumno.mutualist}</b>
                </div>
                <div className="col">
                  Afecciones medicas: <b>{store.alumno.medical_conditions}</b>
                </div>
                <div className="col">
                  Medicamentos: <b>{store.alumno.medicines}</b>
                </div>
              </div>

              <div className="row">
                <div className="col">
                  Mail: <b>{store.alumno.email}</b>
                </div>
                <div className="col">
                  Mensualidad: <b>$</b>
                </div>
                <div className="col"></div>
              </div>
            </div>
          </div>
          <div className="card-footer text-end border-danger">
            <Link to={"/listaAlumno"}>
              <button type="button" className="btn btn-outline-danger">
                Listado de alumnos
              </button>
            </Link>
          </div>
        </div>

        {/* Rutina actual del alumno */}
        <div
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
          <div className="card-footer text-end border-success">
            {/* <Link to={"/listaAlumno"}> */}
            <button type="button" className="btn btn-outline-success">
              Listado de rutinas
            </button>
            {/* </Link> */}
          </div>
        </div>

        {/* Mensualidades */}
        <div
          className="card text-start border-danger"
          style={{ margin: "35px" }}
        >
          <div className="card-header border-danger">
            <h3>Mensualidad</h3>
          </div>
          <div className="card-body">
            {store.mens.map((item, id) => (
              <div className="row" key={id}>
                <div className="col">
                  Fecha de pago: <b>{item.payment_date}</b>
                </div>
                <div className="col">
                  Monto: <b>${item.payment_amount}</b>
                </div>
                <div className="col">
                  Factura: <b>{item.bill_n}</b>
                </div>
              </div>
            ))}
          </div>
          <div className="card-footer text-end border-danger">
            <Link to={"/vistaMensualidades/"}>
              <button type="button" className="btn btn-outline-danger">
                Listado de mensualidades
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

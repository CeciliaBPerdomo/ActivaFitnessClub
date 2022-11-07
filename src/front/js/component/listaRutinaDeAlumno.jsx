import React, { useState, useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const ListaRutinaDeAlumno = () => {
  const { store, actions } = useContext(Context);
  const params = useParams();

  useEffect(() => {
    actions.obtenerAlumnoId(parseInt(params.theid));
  }, []);

  return (
    <>
      <div className="container" style={{ marginBottom: "25px" }}>
        {/* Titulo */}
        <div className="titulo" style={{ marginTop: "25px" }}>
          <h1>
            <i className="fa fa-dumbbell"></i> Rutinas de: {store.alumno.name}{" "}
            {store.alumno.last_name}
          </h1>
        </div>{" "}
        <br />
        {/* Ir al listado de todos los alumnos */}
        <div>
          <Link to={"/listaAlumno"}>
            <button
              type="button"
              className="btn btn-outline-danger float-end"
              style={{ marginBottom: "20px" }}
            >
              Listado de alumnos
            </button>
          </Link>
        </div>
        <br />
        <table className="table table-hover table-secondary">
          <thead>
            <tr className="text-center">
              {/* Cabeceras */}
              <th scope="col">Finaliza</th>
              <th scope="col">Ejercicio</th>
              <th scope="col">Semana</th>
              <th scope="col">Series</th>
              <th scope="col">Repeticiones</th>
              <th scope="col">Carga</th>
              <th scope="col">Ver Ejercicio</th>
            </tr>
          </thead>
        </table>
      </div>
    </>
  );
};

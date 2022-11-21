import React, { useState, useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const ListaRutinaDeAlumno = () => {
  const { store, actions } = useContext(Context);
  const params = useParams();

  useEffect(() => {
    actions.obtenerAlumnoId(parseInt(params.theid));
    actions.obtenerRutinaEjercicioIdUser(parseInt(params.theid));
  }, []);

  return (
    <>
      <div className="container" style={{ marginBottom: "25px" }}>
        {/* Titulo */}
        <div className="titulo" style={{ marginTop: "80px" }}>
          <h1 style={{ color: "white" }}>
            <i className="fa fa-dumbbell"></i> Rutinas de: {store.alumno.name}{" "}
            {store.alumno.last_name}
          </h1>
        </div>{" "}
        <br />
        {/* Ir al listado de todos los alumnos */}
        <div>
          {store.auth && store.profile.role === "Administrador" ? (
            <Link to={"/listaAlumno"}>
              <button
                type="button"
                className="btn btn-outline-danger w-50 float-end"
                style={{ marginBottom: "20px" }}
              >
                Listado de alumnos
              </button>
            </Link>
          ) : null}
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

          {/* Listado */}
          <tbody className="align-middle text-center">
            {store.rutinasEjercicios.length > 0
              ? store.rutinasEjercicios.map((item) => (
                  <>
                    <tr>
                      <th colSpan="7">Rutina: {item.idRutina}</th>
                    </tr>
                    <>
                      {item.results.map((dato) => (
                        <tr>
                          <td>{dato.finaliza}</td>
                          <td>{dato.exerciseInfo.exercise_name}</td>
                          <td>{dato.semana}</td>
                          <td>{dato.series}</td>
                          <td>{dato.repeticiones}</td>
                          <td>{dato.carga}</td>
                          <td>
                            <Link
                              to={"/vistaEjercicio/" + dato.idEjercicios}
                              className="btn btn-outline-dark"
                            >
                              <i className="fa fa-eye"></i>
                            </Link>
                          </td>
                        </tr>
                      ))}
                    </>
                  </>
                ))
              : null}
          </tbody>
        </table>
      </div>
    </>
  );
};

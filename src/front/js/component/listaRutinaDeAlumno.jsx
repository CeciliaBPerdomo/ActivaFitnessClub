import React, { useState, useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import Table from "react-bootstrap/Table";

export const ListaRutinaDeAlumno = () => {
  const { store, actions } = useContext(Context);
  const params = useParams();

  useEffect(() => {
    const getInfo = async () => {
      await actions.obtenerAlumnoId(parseInt(params.theid));
      await actions.obtenerRutinaEjercicioIdUser(parseInt(params.theid));
    };
    getInfo();
  }, []);

  return (
    <>
      <div className="container" style={{ marginBottom: "50px" }}>
        {/* Titulo */}
        <div className="titulo" style={{ marginTop: "80px" }}>
          <h1 style={{ color: "white" }}>
            <i className="fa fa-dumbbell"></i> Rutinas de: {store.alumno.name}{" "}
            {store.alumno.last_name}
          </h1>
        </div>{" "}
        <br />
        <br />
        <pre className="d-flex mx-3 chroma">
          <Table
            striped
            bordered
            hover
            variant="dark"
            className="table table-hover table-secondary"
          >
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
                        <th colSpan="7">
                          <b>Rutina</b>
                        </th>
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
                                className="btn btn-outline-dark border border-white"
                                style={{ color: "white" }}
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
          </Table>
        </pre>
      </div>
    </>
  );
};

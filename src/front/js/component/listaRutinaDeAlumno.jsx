import React, { useState, useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";

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
        <Table className="table table-hover table-secondary">
          <Thead>
            <Tr className="text-center">
              {/* Cabeceras */}
              <Th scope="col">Finaliza</Th>
              <Th scope="col">Ejercicio</Th>
              <Th scope="col">Semana</Th>
              <Th scope="col">Series</Th>
              <Th scope="col">Repeticiones</Th>
              <Th scope="col">Carga</Th>
              <Th scope="col">Ver Ejercicio</Th>
            </Tr>
          </Thead>

          {/* Listado */}
          <Tbody className="align-middle text-center">
            {store.rutinasEjercicios.length > 0
              ? store.rutinasEjercicios.map((item) => (
                  <>
                    <Tr>
                      <Th colSpan="7">Rutina: {item.idRutina}</Th>
                    </Tr>
                    <>
                      {item.results.map((dato) => (
                        <Tr>
                          <Td>{dato.finaliza}</Td>
                          <Td>{dato.exerciseInfo.exercise_name}</Td>
                          <Td>{dato.semana}</Td>
                          <Td>{dato.series}</Td>
                          <Td>{dato.repeticiones}</Td>
                          <Td>{dato.carga}</Td>
                          <Td>
                            <Link
                              to={"/vistaEjercicio/" + dato.idEjercicios}
                              className="btn btn-outline-dark"
                            >
                              <i className="fa fa-eye"></i>
                            </Link>
                          </Td>
                        </Tr>
                      ))}
                    </>
                  </>
                ))
              : null}
          </Tbody>
        </Table>
      </div>
    </>
  );
};

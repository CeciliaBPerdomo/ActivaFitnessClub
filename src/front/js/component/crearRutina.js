import React, { useState, useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const CrearRutina = () => {
  const { store, actions } = useContext(Context);
  const params = useParams();

  const [preRutina, setPreRutina] = useState([]);
  const [ejercicio, setEjercicio] = useState([]);

  const [series, setSeries] = useState("");
  const [repeticiones, setRepeticiones] = useState("");
  const [carga, setCarga] = useState("");
  const [semana, setSemana] = useState("");

  useEffect(() => {
    actions.obtenerAlumnoId(parseInt(params.theid));
    actions.obtenerEjercicios();
    actions.obtenerRutinaEjercicioId(parseInt(params.theid));
  }, []);

  let nombre = store.alumno.name;
  let apellido = store.alumno.last_name;
  let nombreCompleto = nombre + " " + apellido;

  function cargarRutina() {}

  return (
    <>
      <div className="container">
        {/* Titulo */}
        <div>
          <br />
          <p className="h1">
            <i className="fa fa-dumbbell"></i> Crear rutina
          </p>
        </div>
        <br />

        {/* Ver todas las rutinas del alumno */}
        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
          <button
            className="btn btn-outline-success w-25"
            type="button"
            style={{ marginBottom: "20px" }}
          >
            Ver rutinas del alumno
          </button>

          {/* Listado de todas las rutinas */}
          <button
            className="btn btn-outline-success w-25"
            type="button"
            style={{ marginBottom: "20px" }}
          >
            Ver todas las rutinas
          </button>
        </div>

        {/* <div className="d-grid gap-2 d-md-flex justify-content-md-end"></div> */}
        <div className="formulario">
          <form>
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
              {/* Alumno */}
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

              {/* Ejercicio */}
              <div className="col">
                <label htmlFor="Alumno" className="form-label">
                  <b>Ejercicio:</b>
                </label>

                <select
                  className="form-select"
                  id="inputGroupSelect01"
                  //onChange={(e) => setEjercicio({ ejercicio: e.target.value })}
                  //value={idUsuario}
                >
                  <option>Seleccionar ejercicio</option>
                  {store.ejercicios.map((item, id) => (
                    <option key={id} value={item.id}>
                      {item.exercise_name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Series */}
            <div
              className="row"
              style={{
                marginBottom: "15px",
                marginTop: "25px",
              }}
            >
              <div className="col">
                <label htmlFor="Alumno" className="form-label">
                  <b>Series:</b>
                </label>
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) => setSeries(e.target.value)}
                  value={series}
                />
              </div>

              <div className="col">
                <label htmlFor="Alumno" className="form-label">
                  <b>Repeticiones:</b>
                </label>
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) => setRepeticiones(e.target.value)}
                  value={repeticiones}
                />
              </div>

              <div className="col">
                <label htmlFor="Alumno" className="form-label">
                  <b>Carga:</b>
                </label>
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) => setCarga(e.target.value)}
                  value={carga}
                />
              </div>

              <div className="col">
                <label htmlFor="Alumno" className="form-label">
                  <b>Semana:</b>
                </label>

                <select
                  className="form-select"
                  onChange={(e) => setSemana(e.target.value)}
                  value={semana}
                >
                  <option selected>1, 2, 3 o 4</option>
                  <option value="1">Semana 1</option>
                  <option value="2">Semana 2</option>
                  <option value="3">Semana 3</option>
                  <option value="3">Semana 4</option>
                </select>
              </div>
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
                  <b>Finaliza:</b>
                </label>
                <input
                  type="date"
                  className="form-control"
                  id="inputNacimiento"
                  onChange={(e) => setEjercicio({ finaliza: e.target.value })}
                />
              </div>

              <div className="col">
                <button
                  className="btn btn-outline-success float-end w-50"
                  type="button"
                  style={{ marginTop: "31px" }}
                  onClick={() => cargarRutina()}
                >
                  Añadir ejercicio
                </button>
              </div>
            </div>
          </form>
        </div>

        <table className="table table-hover table-secondary">
          <thead>
            <tr className="text-center">
              <th scope="col" className="text-start">
                Ejercicio
              </th>
              <th scope="col" className="text-start">
                Tipo/Músculo
              </th>
              <th scope="col">Series</th>
              <th scope="col">Repeticiones</th>
              <th scope="col">Carga</th>
              <th scope="col">Semana</th>
              <th scope="col">Finaliza</th>
              {/* <th scope="col">Modificar</th> */}
              <th scope="col">Borrar</th>
            </tr>
          </thead>

          <tbody className="align-middle text-center">
            {store.rutinasEjercicios.map((item, id) => (
              <tr key={id}>
                <td className="text-start">
                  {item.exerciseInfo.exercise_name}
                </td>
                <td className="text-start">{item.exerciseInfo.description}</td>
                <td>{item.series}</td>
                <td>{item.repeticiones}</td>
                <td>{item.carga}</td>
                <td>{item.semana}</td>
                <td>{item.finaliza}</td>
                {/* <td>
                <i className="fa fa-pen"></i>
              </td> */}
                <td>
                  <i className="fa fa-trash"></i>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <br />
      </div>
    </>
  );
};

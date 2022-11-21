import React, { useState, useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import swal from "sweetalert";

export const CrearRutina = () => {
  const { store, actions } = useContext(Context);
  const params = useParams();

  const [ejercicio, setEjercicio] = useState("");
  const [series, setSeries] = useState("");
  const [repeticiones, setRepeticiones] = useState("");
  const [carga, setCarga] = useState("");
  const [semana, setSemana] = useState("");
  const [finaliza, setFinaliza] = useState("");

  useEffect(() => {
    actions.obtenerAlumnoId(parseInt(params.idAlumno));
    actions.obtenerEjercicios();
    actions.obtenerRutinaEjercicioId(parseInt(params.theid));
  }, []);

  let nombre = store.alumno.name;
  let apellido = store.alumno.last_name;
  let nombreCompleto = nombre + " " + apellido;
  let user = store?.alumno.id;

  const cargarRutina = (e) => {
    // Agrega el ejercicio a la rutina actual
    e.preventDefault();

    let idRutina = parseInt(params.theid);

    //Guarda
    actions.agregarEjerciciosenRutina(
      idRutina,
      ejercicio,
      series,
      repeticiones,
      carga,
      semana,
      finaliza
    );

    //Limpia el formulario
    setSeries("");
    setRepeticiones("");
    setCarga("");
    setSemana("");
    setFinaliza("");
  };

  //Borrar rutinas
  const borrarEjercicio = (e, item) => {
    e.preventDefault();

    swal({
      title: `Desea borrar el ejercicio: ${item.exerciseInfo.exercise_name}`,
      text: "Una vez eliminado, no se podra recuperar",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        swal(
          `Poof! el ejercicio ${item.exerciseInfo.exercise_name} fue borrado de la rutina`,
          {
            icon: "success",
            actions: actions.borrarEjerciciosdeRutina(item.id),
          }
        );
      } else {
        swal("Ups! Casi, casi!");
      }
    });
  };

  return (
    <>
      <div className="container">
        {/* Titulo */}
        <div>
          <br />
          <p className="h1" style={{ marginTop: "80px", color: "white" }}>
            <i className="fa fa-dumbbell"></i> Crear nueva rutina
          </p>
        </div>
        <br />

        {/* Ver todas las rutinas del alumno */}
        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
          <Link
            to={"/ListaRutinaDeAlumno/" + user}
            className="btn btn-outline-danger w-50"
            type="button"
            style={{ marginBottom: "20px", color: "white" }}
          >
            Ver rutinas del alumno
          </Link>

          {/* Listado de todas las rutinas */}
          {/* <button
            className="btn btn-outline-success w-25"
            type="button"
            style={{ marginBottom: "20px" }}
          >
            Ver todas las rutinas
          </button>*/}
        </div>

        <div className="formulario" style={{ color: "white" }}>
          <form onSubmit={cargarRutina}>
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
                  onChange={(e) => setEjercicio(e.target.value)}
                  value={ejercicio}
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
                  onChange={(e) => setFinaliza(e.target.value)}
                  value={finaliza}
                />
              </div>

              <div className="col">
                <button
                  className="btn btn-outline-danger float-end w-50"
                  type="button"
                  style={{ marginTop: "31px", color: "white" }}
                  onClick={cargarRutina}
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
                Tipo / Músculo
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
                <td className="text-start">
                  {item.exerciseInfo.type_of_muscle}
                </td>
                <td>{item.series}</td>
                <td>{item.repeticiones}</td>
                <td>{item.carga}</td>
                <td>{item.semana}</td>
                <td>{item.finaliza}</td>
                {/* <td>
                <i className="fa fa-pen"></i>
              </td> */}
                <td>
                  <i
                    className="fa fa-trash"
                    onClick={(e) => borrarEjercicio(e, item)}
                  ></i>
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

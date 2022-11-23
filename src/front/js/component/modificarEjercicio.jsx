import React, { useState, useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";

// ///////////////////////////////////////////
// ADMIN PUEDE MODIFICAR LOS EJERCICIOS   //
// /////////////////////////////////////////

export const EditarEjercicio = () => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  let navegacion = useNavigate();

  const [nombreEjercicio, setNombreEjercicio] = useState(
    store.ejercicio.exercise_name
  );
  const [tipoEjercicio, setTipoEjercicio] = useState(
    store.ejercicio.type_of_muscle
  );
  const [descripcionEjercicio, setDescripcionEjercicio] = useState(
    store.ejercicio.description
  );
  const [imagen, setImagen] = useState(store.ejercicio.photo_exercise);
  const [video, setVideo] = useState(store.ejercicio.video_exercise);

  useEffect(() => {
    const getInfo = async () => {
      await actions.obtenerEjercicioId(parseInt(params.theid));
    };
    getInfo();
  }, []);

  const modificarEjercicio = (event) => {
    event.preventDefault();
    let id = parseInt(params.theid);

    swal({
      title: "Ejercicio Modificado",
      icon: "success",
      buttons: "Aceptar",
      // Guarda el formulario modificado
      actions: actions.modificarEjercicio(
        id,
        nombreEjercicio,
        tipoEjercicio,
        descripcionEjercicio,
        imagen,
        video
      ),
    });
    navegacion("/ListadoEjercicios/");
  };

  return (
    <>
      <div
        className="container text-light"
        style={{
          marginTop: "90px",
          marginBottom: "20px",
        }}
      >
        {" "}
        {/* Titulo */}
        <h1>
          <i className="fa fa-dumbbell"> </i> Editar información de:{" "}
          {store.ejercicio.exercise_name}
        </h1>
        <br /> {/* Listado de ejercicios */}
        <div>
          <Link to={"/ListadoEjercicios"}>
            <button
              type="button"
              className="btn btn-outline-danger w-50 float-end"
              style={{ marginBottom: "20px", color: "white" }}
            >
              Listado de ejercicios
            </button>
          </Link>
        </div>
        <br />
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
              <div className="col">
                <label htmlFor="nombre" className="form-label">
                  <b>Nombre del ejercicio:</b>
                </label>

                <input
                  type="text"
                  className="form-control"
                  onChange={(event) => setNombreEjercicio(event.target.value)}
                  defaultValue={store.ejercicio.exercise_name}
                />
              </div>

              <div className="col">
                <label htmlFor="nombre" className="form-label">
                  <b>Tipo de ejercicio:</b>
                </label>

                <input
                  type="text"
                  className="form-control"
                  onChange={(event) => setTipoEjercicio(event.target.value)}
                  defaultValue={store.ejercicio.type_of_muscle}
                />
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
                <label htmlFor="nombre" className="form-label">
                  <b>Descripción del ejercicio:</b>
                </label>
                <input
                  type="text"
                  className="form-control"
                  onChange={(event) =>
                    setDescripcionEjercicio(event.target.value)
                  }
                  defaultValue={store.ejercicio.description}
                />
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
                <label htmlFor="nombre" className="form-label">
                  <b>Foto del ejercicio (URL):</b>
                </label>

                <input
                  type="text"
                  className="form-control"
                  id="basic-url"
                  onChange={(event) => setImagen(event.target.value)}
                  defaultValue={store.ejercicio.photo_exercise}
                />
              </div>

              <div className="col">
                <label htmlFor="nombre" className="form-label">
                  <b>Video del ejercicio (URL):</b>
                </label>

                <input
                  type="text"
                  className="form-control"
                  id="basic-url"
                  onChange={(event) => setVideo(event.target.value)}
                  defaultValue={store.ejercicio.video_exercise}
                />
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
                <button
                  type="button"
                  className="btn btn-outline-danger w-50 float-end"
                  style={{ color: "white" }}
                  onClick={(e) => modificarEjercicio(e)}
                >
                  Guardar modificaciones
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

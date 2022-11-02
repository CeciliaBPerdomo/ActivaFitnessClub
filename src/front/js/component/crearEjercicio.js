import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";

export const CrearEjercicio = () => {
  const [nombreEjercicio, setNombreEjercicio] = useState("");
  const [tipoEjercicio, setTipoEjercicio] = useState("");
  const [imagen, setImagen] = useState("");
  const [descripcionEjercicio, setDescripcionEjercicio] = useState("");

  const { actions, store } = useContext(Context);

  const agregarEjercicio = (event) => {
    event.preventDefault();

    setNombreEjercicio("");
    setTipoEjercicio("");
    setImagen("");
    setDescripcionEjercicio("");
  };

  return (
    <>
      <div
        className="container"
        style={{ marginTop: "20px", marginBottom: "35px" }}
      >
        {/* Titulo */}
        <h1>
          <i class="fa fa-dumbbell"></i> Carga de ejercicios
        </h1>
        <br />

        {/* Listado de ejercicios */}
        <div>
          <Link to={"/verEjercicios"}>
            <button
              type="button"
              className="btn btn-outline-danger float-end"
              style={{ marginBottom: "20px" }}
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
              style={{ marginBottom: "15px", marginTop: "25px" }}
            >
              <div className="col">
                <label htmlFor="nombre" className="form-label">
                  <b>Nombre del ejercicio:</b>
                </label>

                <input
                  type="text"
                  className="form-control"
                  onChange={(event) => setNombreEjercicio(event.target.value)}
                  value={nombreEjercicio}
                />
              </div>
            </div>
          </form>
        </div>

        <div className="card container-md center" style={{ width: "40rem" }}>
          <div className="card-body">
            <div className="input-group input-group-sm mb-3">
              <span className="input-group-text" id="inputGroup-sizing-sm">
                Nombre del ejercicio
              </span>
            </div>
            <label htmlFor="basic-url" className="form-label">
              Ingrese URL
            </label>
            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon3">
                Foto
              </span>
              <input
                type="text"
                className="form-control"
                id="basic-url"
                aria-describedby="basic-addon3"
                onChange={(event) => setImagen(event.target.value)}
                value={imagen}
              />
            </div>
            <div className="input-group input-group-sm mb-3">
              <span className="input-group-text" id="inputGroup-sizing-sm">
                Tipo
              </span>
              <input
                type="text"
                className="form-control"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-sm"
                onChange={(event) => setTipoEjercicio(event.target.value)}
                value={tipoEjercicio}
              />
            </div>
            <div className="input-group input-group-sm mb-3">
              <span className="input-group-text" id="inputGroup-sizing-sm">
                Descripción
              </span>
              <input
                type="text"
                className="form-control"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-sm"
                onChange={(event) =>
                  setDescripcionEjercicio(event.target.value)
                }
                value={descripcionEjercicio}
              />
            </div>

            <button
              type="button"
              className="btn btn-success"
              onClick={agregarEjercicio}
            >
              Agregar nuevo ejercicio
            </button>
          </div>
        </div>
        {/* cierra div container */}
      </div>
    </>
  );
};

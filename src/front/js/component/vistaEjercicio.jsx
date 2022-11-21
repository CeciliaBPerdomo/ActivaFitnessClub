import React, { useState, useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import ReactPlayer from "react-player";

export const VistaEjercicio = () => {
  const { store, actions } = useContext(Context);
  const params = useParams();

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

  const [next, setNext] = useState("");
  const [down, setDown] = useState("");

  useEffect(() => {
    actions.obtenerEjercicioId(parseInt(params.theid));

    setDown(String(Number(params.theid) - 1));
    setNext(String(Number(params.theid) + 1));
  }, [params.theid]);

  return (
    <>
      <div>
        <br /> {/* Titulo */}
        <h1
          className="justify-content-center d-flex"
          style={{ color: "white", marginTop: "80px" }}
        >
          <i className="fa fa-dumbbell"></i>
          {store.ejercicio.exercise_name}{" "}
        </h1>
        <br />
        <div className="justify-content-center d-flex">
          <div
            className="card"
            style={{
              width: "47%",
              display: "flex",
              margin: "auto",
              borderRadius: "7px",
              boxShadow: "0px 14px 32px 0px rgb(0, 0, 0, 0.5)",
              overflow: "hidden",
              boxSizing: "border-box",
            }}
          >
            {/* Foto del ejercicio */}
            <div
              className="d-flex justify-content-center"
              style={{
                borderRadius: "10 5 5 5 5",
                margin: "10px",
              }}
            >
              <img
                src={store.ejercicio.photo_exercise}
                className="d-flex justify-content-center"
                style={{ width: "520px" }}
              />
            </div>
            <div className="card-body">
              <h5
                style={{
                  marginLeft: "8px",
                  fontSize: "34px",
                  paddingTop: "10px",
                }}
              >
                Descripción del ejercicio:
              </h5>
              <p
                className="card-text"
                style={{
                  fontSize: "20px",
                  paddingTop: "10px",
                  textAlign: "justify",
                }}
              >
                {store.ejercicio.description}
              </p>
            </div>
            <ul className="list-group list-group-flush">
              <div className="d-flex justify-content-center">
                <ReactPlayer url={store.ejercicio.video_exercise}></ReactPlayer>
              </div>
            </ul>
          </div>
        </div>
        <br />
        <div className="btn d-flex justify-content-center" role="group">
          <Link to={"/vistaEjercicio/" + down}>
            <button
              className="btn btn-outline-danger float-left"
              style={{ color: "white" }}
            >
              Anterior
            </button>
          </Link>
          <Link to={"/vistaEjercicio/" + next}>
            <button
              className="btn btn-outline-danger float-right"
              style={{ color: "white" }}
            >
              Siguiente
            </button>
          </Link>
        </div>
        <br />
      </div>
    </>
  );
};

import React, { useEffect, useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const VerEjercicio = () => {
  const { store, actions } = useContext(Context);

  const [buscaejer, setBuscaejer] = useState("");

  const handlebuscarejer = (e) => {
    if (e.key === "Enter") {
      if (buscaejer === "") {
        actions.obtenerEjercicios();
      } else {
        actions.buscadorejercicios(e.target.value);
      }
    }
  };

  useEffect(() => {
    actions.obtenerEjercicios();
  }, []);

  return (
    <>
      <br />
      <br />
      {/* Titulo */}
      <h1
        className="text-light text-center"
        style={{ marginBottom: "25px", marginTop: "75px" }}
      >
        <i className="fa fa-dumbbell"> </i>
        Ejercicios
      </h1>
      <br />

      {/* Buscar */}
      <br />
      <div
        className="d-flex"
        style={{
          marginTop: "10px",
          marginLeft: "15px",
          marginBottom: "10px",
          MaxWidth: "500px",
        }}
      >
        <input
          className="form-control d-flex"
          list="datalistOptions"
          id="exampleDataList"
          placeholder="Buscar por nombre..."
          onChange={(e) => setBuscaejer(e.target.value)}
          onKeyPress={handlebuscarejer}
          value={buscaejer}
          style={{ width: "95%" }}
        />
      </div>
      <br />
      <br />

      <div className="d-flex justify-content-center">
        <div className="container row">
          {store.ejercicios.map((item, id) => (
            <div className="col-sm-4" style={{ marginBottom: "40px" }}>
              <div
                className="card border-success text-center"
                style={{ width: "18rem" }}
              >
                <h2 className="text-center" style={{ marginBottom: "15px" }}>
                  {item.exercise_name}
                </h2>
                <div className="rounded mx-auto d-block">
                  <img
                    src={item.photo_exercise}
                    className="rounded"
                    style={{
                      width: "200px",
                      height: "175px",
                      marginTop: "10px",
                    }}
                  />
                </div>
                <div className="card-body text-center">
                  <Link
                    type="button"
                    className="btn btn-outline-danger float-end"
                    to={"/vistaEjercicio/" + item.id}
                  >
                    <i className="fa fa-eye"></i>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

{
  /* <div className="d-flex justify-content-center">
        <div className="container row">
          {store.ejercicios.map((item, id) => (
            <div className="col-sm-4" style={{ marginBottom: "40px" }}>
              <div
                className="card border-success text-center"
                style={{
                  width: "25%",
                  margin: "20px",
                  borderRadius: "6px",
                  overflow: "hidden",
                  background: "#ffff",
                  boxShadow: "0px 1px 10px rgb(0, 0, 0, 0.2)",
                  cursor: "default",
                  transition: "all 400ms ease",
                }}
              >
                <div className="card-body">
                  <h2 className="display-6" style={{ marginBottom: "15px" }}>
                    {item.exercise_name}
                  </h2>
                  <div className="rounded mx-auto d-block">
                    <img
                      className="rounded"
                      src={item.photo_exercise}
                      style={{
                        width: "200px",
                        height: "175px",
                        marginTop: "10px",
                      }}
                    />
                  </div>
                </div>
                <div className="card-body text-center">
                  <Link
                    type="button"
                    className="btn btn-outline-danger float-end"
                    to={"/vistaEjercicio/" + item.id}
                  >
                    <i className="fa fa-eye"></i>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div> */
}

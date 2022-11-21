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
      {" "}
      {/* Buscar */}
      <br />
      <div
        style={{ marginTop: "70px", marginLeft: "15px", marginBottom: "10px" }}
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
      <div className="container">
        <div className="d-flex row">
          {" "}
          {store.ejercicios.map((item, id) => (
            <div
              className="card"
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
                <img
                  src={item.photo_exercise}
                  style={{
                    width: "100%",
                    height: "210px",
                  }}
                  className="card-img-top"
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
          ))}{" "}
        </div>
      </div>
    </>
  );
};

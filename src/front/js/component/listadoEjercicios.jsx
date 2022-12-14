import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import swal from "sweetalert";

export const ListadoEjercicios = () => {
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

  const borrar = (e, item) => {
    e.preventDefault();

    // Elimina el ejercicio!
    swal({
      title: `Desea borrar el ejercicio ${item.exercise_name}`,
      text: "Una vez eliminado, no se podra recuperar",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        swal(`Poof! el alumno ${item.exercise_name} fue borrado`, {
          icon: "success",
          actions: actions.borrarEjercicio(item.id),
        });
      } else {
        swal("Ups! Casi, casi!");
      }
    });
  };
  // Inicio
  useEffect(() => {
    actions.obtenerEjercicios();
  }, []);
  return (
    <>
      <div
        className="container vh-100"
        style={{
          marginTop: "100px",
          marginBottom: "35px",
        }}
      >
        {" "}
        {/* Titulo */}
        <h1 style={{ color: "white" }}>
          <i className="fa fa-dumbbell"></i> Listado de ejercicios
        </h1>
        <br /> {/* Buscar */}
        <div>
          <input
            onChange={(e) => setBuscaejer(e.target.value)}
            onKeyPress={handlebuscarejer}
            value={buscaejer}
            className="form-control"
            list="datalistOptions"
            id="exampleDataList"
            placeholder="Buscar por nombre..."
          />
        </div>
        <br /> {/* Crea un nuevo ejercicio */}
        <div>
          <Link to={"/crearEjercicio"}>
            <button
              type="button"
              className="btn btn-danger w-50 float-end border border-white"
              style={{ marginBottom: "20px", color: "white", background:"#A00404" }}
            >
              Crear nuevo ejercicio
            </button>
          </Link>
        </div>
        <br /> {/* Listado de ejercicio */}
        <table className="table" style={{ color: "white" }}>
          <thead>
            <tr className="text-center">
              {" "}
              {/* Cabeceras */}
              <th scope="col">Nombre</th>
              <th scope="col">Tipo de m??sculo</th>
              <th scope="col">Descripci??n</th>
              <th scope="col">Foto</th>
              <th scope="col">+Info</th>
              <th scope="col">Editar</th>
              <th scope="col">Borrar</th>
            </tr>
          </thead>

          {/* Listado */}
          <tbody className="align-middle text-center">
            {" "}
            {store.ejercicios.map((item, id) => (
              <tr key={id}>
                <td> {item.exercise_name}</td>
                <td> {item.type_of_muscle}</td>
                <td> {item.description}</td>
                <td>
                  <img
                    src={item.photo_exercise}
                    style={{ width: "75px" }}
                  ></img>
                </td>

                {/* Mas informacion */}
                <td>
                  <Link
                    to={"/vistaEjercicio/" + item.id}
                    className="btn btn-outline-light"
                  >
                    <i className="fa fa-eye"></i>
                  </Link>
                </td>

                {/* Modificar ejercicio */}
                <td>
                  <Link
                    to={"/editarEjercicio/" + item.id}
                    className="btn btn-outline-light"
                  >
                    <i className="fa fa-pen"></i>
                  </Link>
                </td>

                <td>
                  {" "}
                  {/* Borrar alumno */}
                  <button
                    type="button"
                    className="btn btn-outline-danger"
                    onClick={(e) => borrar(e, item)}
                  >
                    <i className="fa fa-trash"></i>
                  </button>
                </td>
              </tr>
            ))}{" "}
          </tbody>
        </table>
        {/* div del container */}{" "}
      </div>
    </>
  );
};

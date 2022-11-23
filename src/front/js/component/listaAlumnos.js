import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";

export const ListaAlumno = () => {
  const { store, actions } = useContext(Context);
  let navegacion = useNavigate();

  const [busqueda, setBusqueda] = useState("");
  const buscar = (e) => {
    if (e.key === "Enter") {
      if (busqueda === "") {
        actions.obtenerAlumnos();
      } else {
        actions.buscador(e.target.value);
      }
    }
  };

  // Inicio
  useEffect(() => {
    actions.obtenerAlumnos();
  }, []);

  const crearRutina = async (e, item) => {
    e.preventDefault();
    // Crea la nueva rutina
    await actions.crearRutina(item.id);
    // Busca por el ultimo id creado
    await actions.obtenerUltimoId();

    let idRutina = store.rutina?.id;
    let idUsuario = item.id;

    navegacion("/crearRutina/" + idRutina + "/" + idUsuario);
  };

  const borrar = (e, item) => {
    e.preventDefault();

    // Elimina el alumno!
    swal({
      title: `Desea borrar a: ${item.name} ${item.last_name}`,
      text: "Una vez eliminado, no se podra recuperar",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        swal(`Poof! el alumno ${item.name} ${item.last_name} fue borrado`, {
          icon: "success",
          actions: actions.borrarAlumno(item.id),
        });
      } else {
        swal("Ups! Casi, casi!");
      }
    });
  };

  return (
    <>
      <div
        className="container"
        style={{
          marginBottom: "15px",
          color: "white",
          marginTop: "60px",
        }}
      >
        <div>
          <br />
          <h1>
            <i className="fa fa-user"></i> Alumnos
          </h1>{" "}
          <br />
        </div>
        {/* Buscar */}
        <div>
          <input
            onChange={(e) => setBusqueda(e.target.value)}
            onKeyPress={buscar}
            value={busqueda}
            className="form-control"
            list="datalistOptions"
            id="exampleDataList"
            placeholder="Buscar por nombre..."
          />
        </div>
        {/* Nuevo Alumno */}
        <br />
        <div className="crearAlumno">
          <Link to={"/crearAlumno"}>
            <button
              type="button"
              className="btn btn-danger w-50 float-end"
              style={{
                marginBottom: "18px",
                color: "white",
                background:"#A00404"
              }}
            >
              Ingresar nuevo alumno
            </button>
          </Link>
        </div>
        <br /> {/* Listado de alumnos */}
        <table className="table" style={{ color: "white" }}>
          <thead>
            <tr className="text-center">
              {/* Cabeceras */}
              <th scope="col">Cedula</th>
              <th scope="col">Nombre</th>
              <th scope="col">Apellido</th>
              <th scope="col">Fecha de nacimiento</th>
              <th scope="col">Fecha de ingreso</th>
              <th scope="col">Mensualidad</th>
              <th scope="col">+Info</th>
              <th scope="col">Rutinas</th>
              <th scope="col">Crear rutina</th>
              <th scope="col">Editar</th>
              <th scope="col">Borrar</th>
            </tr>
          </thead>

          {/* Listado */}
          <tbody className="align-middle text-center">
            {store.alumnos.map((item, id) => (
              <tr key={id}>
                <td>{item.ci}</td>
                <td>{item.name}</td>
                <td>{item.last_name}</td>
                <td>{item.birthday}</td>
                <td>{item.date_of_admission}</td>
                <td>${item.cuota}</td>

                {/* Mas informacion */}
                <td>
                  <Link
                    to={"/alumno/" + item.id}
                    className="btn btn-outline-dark"
                  >
                    <i className="fa fa-user-plus"></i>
                  </Link>
                </td>
                <td>
                  {" "}
                  {/* Ver rutina */}
                  <Link
                    to={"/listaRutinaDeAlumno/" + item.id}
                    className="btn btn-outline-dark"
                  >
                    <i className="fa fa-eye"></i>
                  </Link>
                </td>

                <td>
                  {" "}
                  {/* Crear rutina */}
                  <button
                    type="button"
                    className="btn btn-outline-dark"
                    onClick={(e) => crearRutina(e, item)}
                  >
                    <i className="fa fa-dumbbell"></i>
                  </button>
                </td>

                <td>
                  {" "}
                  {/* Modificar alumno */}
                  <Link
                    to={"/modificarAlumno/" + item.id}
                    className="btn btn-outline-dark"
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
      </div>
    </>
  );
};

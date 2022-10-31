import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import swal from "sweetalert";

export const ListaAlumno = () => {
  const { store, actions } = useContext(Context);

  //const [ListaAlumno, setListaAlumnos] = useState([]);

  //Inicio
  useEffect(() => {
    actions.obtenerAlumnos();
  }, []);

  //Pendiente de los cambios
  // useEffect(() => {
  //   actions.obtenerAlumnos();
  // }, [store.alumnos]);

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
      <div className="container">
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
              className="btn btn-outline-success float-end"
              style={{ marginBottom: "18px" }}
            >
              Ingresar nuevo alumno
            </button>
          </Link>
        </div>
        <br />

        {/* Listado de alumnos */}
        <table className="table table-hover table-secondary">
          <thead>
            <tr className="text-center">
              {/* Cabezeras */}
              <th scope="col">Cedula</th>
              <th scope="col">Nombre</th>
              <th scope="col">Apellido</th>
              <th scope="col">Fecha de nacimiento</th>
              <th scope="col">Fecha de ingreso</th>
              {/* <th scope="col">Mutualista</th>
              <th scope="col">Afecciones</th>
              <th scope="col">Medicamentos</th>
              <th scope="col">Email</th> */}
              <th scope="col">+Info</th>
              <th scope="col">Rutina</th>
              <th scope="col">Editar</th>
              <th scope="col">Borrar</th>
            </tr>
          </thead>

          {/* Listado */}
          {/* <thead> */}
          <tbody className="align-middle text-center">
            {store.alumnos.map((item, id) => (
              <tr key={id}>
                <td>{item.ci}</td>
                <td>{item.name}</td>
                <td>{item.last_name}</td>
                <td>{item.birthday}</td>
                <td>{item.date_of_admission}</td>
                {/* <td>{item.mutualist}</td>
                <td>{item.medical_conditions}</td>
                <td>{item.medicines}</td>
                <td>{item.email}</td> */}

                {/* Mas informacion */}
                <td>
                  <button type="button" className="btn btn-outline-dark">
                    <i className="fa fa-user-plus"></i>
                  </button>
                </td>
                <td>
                  {/* Ver rutina */}
                  <button type="button" className="btn btn-outline-dark">
                    <i className="fa fa-eye"></i>
                  </button>
                </td>
                <td>
                  {/* Modificar alumno */}
                  <button type="button" className="btn btn-outline-dark">
                    <i className="fa fa-pen"></i>
                  </button>
                </td>

                <td>
                  {/* Borrar alumno */}
                  <button
                    type="button"
                    className="btn btn-outline-danger"
                    onClick={(e) => borrar(e, item)}
                  >
                    {/* value={item} */}
                    <i className="fa fa-trash"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

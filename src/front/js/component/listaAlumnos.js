import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const ListaAlumno = () => {
  const { store, actions } = useContext(Context);

  const borrar = (e, item) => {
    e.preventDefault();
    console.log("A borrar");
    console.log(item);

    return (
      <>
        <div className="modal" tabindex="-1">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Modal title</h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <p>Modal body text goes here.</p>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                {/* Borra */}
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={(e) => {
                    actions.borrarAlumno(item.id);
                  }}
                >
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <div className="container">
        <div>
          <br />
          <h1>Alumnos</h1>
        </div>

        {/* Buscar */}
        <div>
          <label htmlFor="exampleDataList" className="form-label">
            <h3>Buscar</h3>
          </label>
          <input
            className="form-control"
            list="datalistOptions"
            id="exampleDataList"
            placeholder="Buscar..."
          />
        </div>

        {/* Nuevo Alumno */}
        <br />
        <div className="w-75">
          <Link to={"/crearAlumno"}>
            <button type="button" className="btn btn-outline-success w-25">
              Ingresar nuevo alumno
            </button>
          </Link>
        </div>
        <br />

        {/* Listado de alumnos */}
        <table className="table table-hover table-secondary">
          <thead>
            <tr>
              {/* Cabezeras */}
              <th scope="col">Cedula</th>
              <th scope="col">Nombre</th>
              <th scope="col">Apellido</th>
              <th scope="col">Fecha de nacimiento</th>
              <th scope="col">Fecha de ingreso</th>
              <th scope="col">Mutualista</th>
              <th scope="col">Afecciones</th>
              <th scope="col">Medicamentos</th>
              <th scope="col">Email</th>
              <th scope="col">Actividades</th>
              <th scope="col">Rutina</th>
              <th scope="col">Editar</th>
              <th scope="col">Borrar</th>
            </tr>
          </thead>

          {/* Listado */}
          {/* <thead> */}
          <tbody>
            {store.alumnos.map((item, id) => (
              <tr key={id}>
                <td>{item.ci}</td>
                <td>{item.name}</td>
                <td>{item.last_name}</td>
                <td>{item.birthday}</td>
                <td>{item.date_of_admission}</td>
                <td>{item.mutualist}</td>
                <td>{item.medical_conditions}</td>
                <td>{item.medicines}</td>
                <td>{item.email}</td>
                <td>{item.activities}</td>
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

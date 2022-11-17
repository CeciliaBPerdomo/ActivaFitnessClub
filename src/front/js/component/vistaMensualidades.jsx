import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import swal from "sweetalert";

// //////////////////////////////////////////////
// ADMIN VE LISTA DE TODAS LAS MENSUALIDADES //
// ////////////////////////////////////////////

export const VistaMensualidades = () => {
  const { store, actions } = useContext(Context);

  const[buscarmens, setBuscarmens]= useState("")
  const handlebuscarmens= (e) =>  {
    e.preventDefault();
    setBuscarmens(e.target.value)
    console.log(buscarmens)

    if (buscarmens === ""){
      actions.obtenerMensualidades()
    } 
    else{ actions.buscadormens(e.target.value)
    }

  }

  useEffect(() => {
    actions.obtenerMensualidades();
  }, []);

  console.log(store.mens);

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
          actions: actions.borrarMensualidad(item.id),
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
        style={{ marginBottom: "15px", marginTop: "15px" }}
      >
        <h1>
          <i className="fa fa-wallet"></i> Mensualidades
        </h1>
        <br />

        {/* Buscar */}
        <div>
          <input
          onChange={handlebuscarmens}
            className="form-control"
            list="datalistOptions"
            id="exampleDataList"
            placeholder="Buscar por nombre..."
          />
        </div>
        {/* Nueva mensualidad */}
        <br />
        <div>
          <Link to={"/crearMensualidad"}>
            <button
              type="button"
              className="btn btn-outline-danger w-25 float-end"
              style={{ marginBottom: "25px", color: "white" }}
            >
              Pago de mensualidad
            </button>
          </Link>

          {/* Ver listado de alumnos */}
          <Link to={"/listaAlumno"}>
            <button
              type="button"
              className="btn btn-outline-danger w-25 float-end"
              style={{
                marginBottom: "25px",
                color: "white",
                marginRight: "25px",
              }}
            >
              Listado de alumnos
            </button>
          </Link>
        </div>
        <br />

        {/* Listado de mensualidades */}
        <table
          className="table table-hover table-secondary"
          style={{ marginBottom: "25px" }}
        >
          <thead>
            <tr className="text-center">
              {/* Cabeceras */}
              <th scope="col">Nombre</th>
              <th scope="col">Apellido</th>
              <th scope="col">Fecha de ingreso</th>
              <th scope="col">Fecha de pago</th>
              <th scope="col">Monto</th>
              <th scope="col">Factura</th>
              <th scope="col">Editar</th>
              <th scope="col">Borrar</th>
            </tr>
          </thead>

          {/* Mensualidades */}
          <tbody className="align-middle text-center">
            {store.mensualidades.map((item, id) => (
              <tr key={id}>
                <td>{item.userInfo.name}</td>
                <td>{item.userInfo.last_name}</td>
                <td>{item.userInfo.date_of_admission}</td>
                <td>{item.payment_date}</td>
                <td>{item.payment_amount}</td>
                <td>{item.bill_n}</td>

                {/* Modificar */}
                <td>
                  <Link to={"/editarMensualidad/" + item.id}>
                    <button type="button" className="btn btn-outline-dark">
                      <i className="fa fa-pen"></i>
                    </button>
                  </Link>
                </td>

                {/* Eliminar */}
                <td>
                  <button
                    type="button"
                    className="btn btn-outline-danger"
                    onClick={(e) => borrar(e, item.userInfo)}
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

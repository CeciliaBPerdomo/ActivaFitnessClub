import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const CrearProducto = () => {
  const [nombreProducto, setNombreProducto] = useState("");
  const [stock, setStock] = useState("");
  const [imagen, setImagen] = useState("");
  const [compra, setCompra] = useState("");
  const [venta, setVenta] = useState("");

  const { actions } = useContext(Context);

  const agregarProducto = (event) => {
    event.preventDefault();

    //Guarda el formulario
    actions.crearProducto(nombreProducto, stock, compra, imagen, venta);

    // Limpia el formulario
    setNombreProducto("");
    setStock("");
    setImagen("");
    setCompra("");
    setVenta("");
  };

  return (
    <>
      <div
        className="container"
        style={{ marginTop: "20px", marginBottom: "35px" }}
      >
        {/* Titulo */}
        <h1>Carga de productos</h1>
        <br />

        {/* Listado de productos */}
        <div>
          <Link to={"/ListadoProductos"}>
            <button
              type="button"
              className="btn btn-outline-danger w-50 float-end"
              style={{ marginBottom: "20px" }}
            >
              Listado de productos
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
                  <b>Nombre del producto:</b>
                </label>

                <input
                  type="text"
                  className="form-control"
                  onChange={(event) => setNombreProducto(event.target.value)}
                  value={nombreProducto}
                />
              </div>
            </div>

            <div
              className="row"
              style={{ marginBottom: "15px", marginTop: "25px" }}
            >
              <div className="col">
                <label htmlFor="nombre" className="form-label">
                  <b>Stock:</b>
                </label>

                <input
                  type="text"
                  className="form-control"
                  onChange={(event) => setStock(event.target.value)}
                  value={stock}
                />
              </div>

              <div className="col">
                <label htmlFor="nombre" className="form-label">
                  <b>Precio de Compra:</b>
                </label>
                <input
                  type="text"
                  className="form-control"
                  onChange={(event) => setCompra(event.target.value)}
                  value={compra}
                />
              </div>

              <div className="col">
                <label htmlFor="nombre" className="form-label">
                  <b>Precio de Venta:</b>
                </label>

                <input
                  type="text"
                  className="form-control"
                  id="basic-url"
                  onChange={(event) => setVenta(event.target.value)}
                  value={venta}
                />
              </div>
            </div>

            <div
              className="row"
              style={{ marginBottom: "15px", marginTop: "25px" }}
            >
              <div className="col">
                <label htmlFor="nombre" className="form-label">
                  <b>Foto del producto (URL):</b>
                </label>

                <input
                  type="text"
                  className="form-control"
                  id="basic-url"
                  onChange={(event) => setImagen(event.target.value)}
                  value={imagen}
                />
              </div>
            </div>

            <div
              className="row"
              style={{ marginBottom: "15px", marginTop: "25px" }}
            >
              <div className="col">
                <button
                  type="button"
                  className="btn btn-outline-danger w-50 float-end"
                  onClick={agregarProducto}
                >
                  Agregar nuevo producto
                </button>
              </div>
            </div>
          </form>
        </div>
        {/* cierra div container */}
      </div>
    </>
  );
};

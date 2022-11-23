import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import swal from "sweetalert";

export const CrearProducto = () => {
  const [nombreProducto, setNombreProducto] = useState("");
  const [stock, setStock] = useState("");
  const [imagen, setImagen] = useState("");
  const [compra, setCompra] = useState("");
  const [venta, setVenta] = useState("");

  const { actions } = useContext(Context);

  const agregarProducto = (event) => {
    event.preventDefault();

    swal({
      title: `Producto ${nombreProducto} creado`,
      text: "Producto creado correctamente",
      icon: "success",
      button: "okey",
      //Guarda el formulario
      actions: actions.crearProducto(
        nombreProducto,
        stock,
        compra,
        imagen,
        venta
      ),
    });

    // Limpia el formulario
    setNombreProducto("");
    setStock("");
    setImagen("");
    setCompra("");
    setVenta("");
  };

  return (
    <>
      <br />
      <br />
      <div
        className="container vh-100"
        style={{ marginTop: "50px", marginBottom: "50px" }}
      >
        {/* Titulo */}
        <h1 style={{ color: "white", marginBottom: "35px" }}>
          <i class="fa-thin fa-clipboard-list-check"></i> Ingreso de nuevos
          productos
        </h1>
        <br />

        {/* Boton listado de productos */}
        <div>
          <Link to={"/ListadoProductos"}>
            <button
              type="button "
              className="btn border border-white w-50 float-end border border-white"
              style={{
                marginBottom: "20px",
                color: "white",
                background: "#A00404",
              }}
            >
              Listado de productos
            </button>
          </Link>
        </div>
        <br />

        <div className="formulario" style={{ color: "white" }}>
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
                  placeholder="Nombre del producto"
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
                  placeholder="Stock"
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
                  placeholder="Precio de compra"
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
                  placeholder="Precio de venta"
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
                  placeholder="URL de la foto del producto"
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
                  style={{ color: "white", background: "#A00404" }}
                  className="btn border border-white w-50 float-end border border-white"
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

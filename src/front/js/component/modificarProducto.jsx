import React, { useState, useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";

// ///////////////////////////////////////////
// ADMIN PUEDE MODIFICAR LOS PRODUCTOS   //
// /////////////////////////////////////////

export const EditarProducto = () => {
  const { store, actions } = useContext(Context);
  const params = useParams();

  const [nombreProducto, setNombreProducto] = useState(store.producto.name);
  const [stock, setStock] = useState(store.producto.stock);
  const [compra, setCompra] = useState(store.producto.sale_price);
  const [imagen, setImagen] = useState(store.producto.photo);
  const [venta, setVenta] = useState(store.producto.purchase_price);

  let navegacion = useNavigate();

  useEffect(() => {
    actions.obtenerProductoId(parseInt(params.theid));
  }, []);

  const modificarProducto = async (event) => {
    event.preventDefault();

    let id = parseInt(params.theid);

    // Guarda el formulario
    await actions.modificarProducto(
      id,
      nombreProducto,
      stock,
      compra,
      imagen,
      venta
    );

    swal({
      title: "Modificación",
      text: `El producto fue modificado.`,
      icon: "success",
      button: "ok",
      actions: navegacion("/ListadoProductos"),
    });
  };

  return (
    <>
      <div
        className="container"
        style={{
          marginTop: "20px",
          marginBottom: "35px",
        }}
      >
        {" "}
        {/* Titulo */}
        <h1 style={{ marginTop: "85px", color: "white" }}>
          Modificar información de producto
        </h1>
        <br /> {/* Listado de productos */}
        <div>
          <Link to={"/ListadoProductos"}>
            <button
              type="button"
              className="btn btn-outline-danger w-50 float-end"
              style={{ marginBottom: "20px", color: "white" }}
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
              style={{
                marginBottom: "15px",
                marginTop: "25px",
              }}
            >
              <div className="col">
                <label htmlFor="nombre" className="form-label">
                  <b>Nombre del producto:</b>
                </label>

                <input
                  type="text"
                  className="form-control"
                  onChange={(event) => setNombreProducto(event.target.value)}
                  defaultValue={store.producto.name}
                />
              </div>
            </div>

            <div
              className="row"
              style={{
                marginBottom: "15px",
                marginTop: "25px",
              }}
            >
              <div className="col">
                <label htmlFor="nombre" className="form-label">
                  <b>Stock:</b>
                </label>

                <input
                  type="text"
                  className="form-control"
                  onChange={(event) => setStock(event.target.value)}
                  defaultValue={store.producto.stock}
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
                  defaultValue={store.producto.sale_price}
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
                  defaultValue={store.producto.purchase_price}
                />
              </div>
            </div>

            <div
              className="row"
              style={{
                marginBottom: "15px",
                marginTop: "25px",
              }}
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
                  defaultValue={store.producto.photo}
                />
              </div>
            </div>

            <div
              className="row"
              style={{
                marginBottom: "15px",
                marginTop: "25px",
              }}
            >
              <div className="col">
                <button
                  type="button"
                  style={{ color: "white" }}
                  className="btn btn-outline-danger w-50 float-end "
                  onClick={modificarProducto}
                >
                  Guardar cambios
                </button>
              </div>
            </div>
          </form>
        </div>
        {/* cierra div container */}{" "}
      </div>
    </>
  );
};

import React, { useState, useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Producto = () => {
  const { store, actions } = useContext(Context);
  const params = useParams();

  useEffect(() => {
    actions.obtenerProductoId(parseInt(params.theid));
  }, []);

  return (
    <>
      <div className="container vh-100">
        <div
          style={{
            marginBottom: "10px",
            marginTop: "10px",
          }}
        >
          <h1 style={{ marginTop: "80px", color: "white" }}>
            {" "}
            <i class="fa-thin fa-clipboard-list-check"></i> Producto:
          </h1>
          <br />

          <Link to={"/ListadoProductos"}>
            <button
              type="button"
              className="btn border-white w-50 float-start border border-white"
              style={{
                marginBottom: "20px",
                color: "white",
                background: "#A00404",
              }}
            >
              Listado de productos
            </button>
          </Link>
          <br />
        </div>
        <br />
        <div className="card mb-3" style={{ width: "560px" }}>
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src={store.producto.photo}
                className="img-fluid rounded-start"
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5
                  className="card-title"
                  style={{ marginBottom: "30px", color: "#A00404" }}
                >
                  <b> {store.producto.name}</b>
                </h5>
                <p className="card-text">
                  Precio venta: <b>${store.producto.sale_price}</b>
                </p>
                <p className="card-text">
                  {/* <small className="text-muted"> */}
                  Cantidad: {store.producto.stock}
                  {/* </small> */}
                </p>
              </div>
            </div>
          </div>
        </div>{" "}
      </div>
    </>
  );
};

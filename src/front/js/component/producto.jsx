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
      <div className="container">
        <div style={{ marginBottom: "45px", marginTop: "25px" }}>
          <h1>Producto:</h1>
        </div>
        <br />
        <div
          className="card d-flex align-items-center"
          style={{ width: "350px", marginBottom: "45px" }}
        >
          <img
            src={store.producto.photo}
            className="card-img-top"
            style={{ width: "270px" }}
          />
          <div className="card-body">
            <h2 className="card-title text-center">{store.producto.name}</h2>
            <p className="card-text text-center">
              Precio venta: <b>$ {store.producto.sale_price}</b>
            </p>
          </div>
        </div>
        {/* Listado de productos */}
        {/* <br /> 
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
        </div> */}
      </div>
    </>
  );
};

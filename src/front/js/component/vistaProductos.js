import React, { useState, useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const VistaProducto = () => {
  //const [cantidadProducto, setCantidadProducto] = useState("");
  const { actions, store } = useContext(Context);
  const params = useParams();

  useEffect(() => {
    actions.obtenerProducto();
    actions.obtenerAlumnoId(parseInt(params.theid));

    const getInfo = async () => {
      await actions.crearIdCarrito(store.alumno.id);
    };
    getInfo();
  }, []);

  let idCarrito = 2;
  const agregar = (e, producto) => {
    e.preventDefault();

    //Datos que se envian
    let idAlumno = store.alumno.id;
    //let idCarrito = store.idCarrito;
    let idProd = producto.id;
    let cantidad = 1;
    let precio = producto.sale_price;

    //Guarda
    actions.agregarProdCarrito(idAlumno, idCarrito, idProd, cantidad, precio);
  };

  return (
    <>
      <div style={{ backgroundColor: "" }}>
        <p style={{ marginLeft: "10px", marginTop: "10px", color: "white" }}>
          ¡Hola, <b>{store.alumno.name}</b>! ¿Qué vas a comprar hoy?
        </p>

        {/* Finaliza la compra */}
        <div style={{ marginBottom: "60px", marginTop: "0px" }}>
          <Link to={"/carrito/" + idCarrito}>
            <button
              type="button"
              className="btn btn-outline-danger float-end"
              style={{
                marginRight: "10px",
              }}
            >
              Finalizar compra
            </button>
          </Link>
        </div>
        <hr />
        <div className="text-center">
          <h3 className="fw-lighter" style={{ color: "white" }}>
            Nuestros productos:
          </h3>
        </div>
        <hr />
        <div className="d-flex justify-content-center">
          <div className="container row">
            {store.productos.map((item, id) => (
              <div
                className="col-sm-4"
                key={id}
                style={{ marginBottom: "40px" }}
              >
                <div
                  className="card border-success text-center"
                  style={{ width: "18rem" }}
                >
                  <div>
                    <button
                      type="button"
                      className="btn btn-outline-danger float-end"
                      style={{ marginTop: "10px", marginRight: "10px" }}
                      /* Agrega el producto al carrito */
                      onClick={(e) => agregar(e, item)}
                    >
                      <i className="fa fa-cart-plus"></i>
                    </button>
                  </div>
                  <div className="rounded mx-auto d-block">
                    <img
                      src={item.photo}
                      className="rounded"
                      style={{
                        width: "200px",
                        height: "150px",
                        marginTop: "10px",
                      }}
                    />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">
                      <b>{item.name}</b>
                    </h5>
                    <p>$ {item.sale_price}</p>
                    <div>
                      <p>Stock: {item.stock} </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}{" "}
          </div>
        </div>
      </div>
    </>
  );
};

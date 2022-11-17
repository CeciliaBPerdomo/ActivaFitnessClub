import React, { useState, useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/carr.css";

export const Carrito = () => {
  const { actions, store } = useContext(Context);
  const params = useParams();
  let total = 0;
  const [cantidad, setCantidad] = useState(1);

  useEffect(() => {
    const getInfo = async () => {
      await actions.obtenerCarrito(parseInt(params.theid));
      // Datos del usuario
      await actions.obtenerAlumnoId(parseInt(store.carrito.user_id));
    };

    getInfo();
  }, []);

  const totalCompra = () => {
    total = 0;
    {
      store.carrito.map(
        (item) => (total = total + item.cantidad * item.precio)
      );
    }
  };
  totalCompra();

  const mp = async () => {
    //Mercado pago
    await actions.pagoMercadoPago(total);
    window.location.replace(store?.mercadopago.sandbox_init_point);
  };

  const cambioCantidad = (cantidad, item) => {
    actions.modificarCantidad(item.idCarrito, item.product_id, cantidad);
  };

  return (
    <>
      <div>
        {/* Saludo */}
        <h2
          style={{
            color: "white",
            marginLeft: "10px",
            marginTop: "10px",
            marginBottom: "10px",
          }}
        >
          ¡Hola <b>{store.alumno.name}</b>, estás por finalizar tu compra!
        </h2>
      </div>

      <hr />

      <div className="container text-center">
        <div className="row">
          {/* carrito de compras */}
          <div className="col" style={{ marginBottom: "25px" }}>
            <div className="card">
              <div className="card-header">
                <h2>Carrito de compras</h2>
              </div>
              <ul className="list-group list-group-flush">
                <div className="card mb-3">
                  {store.carrito.map((item, id) => (
                    <div
                      key={id}
                      className="row g-0"
                      style={{ marginBottom: "15px" }}
                    >
                      <div
                        className="col-md-2"
                        style={{ marginTop: "10px", marginLeft: "15px" }}
                      >
                        <img
                          src={item.productInfo.photo}
                          className="card-img-top"
                          style={{ width: "135px" }}
                        />
                      </div>
                      <div
                        className="col-md-3 d-flex align-items-center"
                        style={{ marginLeft: "55px" }}
                      >
                        {item.productInfo.name}
                      </div>
                      <div className="col-md-2 d-flex align-items-center">
                        <button
                          type="button"
                          className="btn btn-outline-danger float-end"
                          style={{ marginRight: "5px" }}
                        >
                          <i className="fa fa-minus"></i>
                        </button>
                        <input
                          type="text"
                          defaultValue={cantidad}
                          className="col-4"
                          style={{ marginRight: "5px" }}
                        />
                        <button
                          type="button"
                          className="btn btn-outline-danger float-end"
                          style={{ marginRight: "5px" }}
                        >
                          <i className="fa fa-plus"></i>
                        </button>
                      </div>

                      <div className="col-md-2 d-flex align-items-center">
                        {/* <div className="btn-group-vertical"> */}
                        <button
                          type="button"
                          sytle={{ marginLeft: "1550px" }}
                          className="btn btn-outline-danger float-end"
                          onClick={() =>
                            actions.borrarProductoCarrito(
                              item.idCarrito,
                              item.product_id
                            )
                          }
                        >
                          <i className="fa fa-trash"></i>
                        </button>
                        {/* </div> */}
                      </div>
                    </div>
                  ))}
                </div>
              </ul>
            </div>
          </div>

          {/* Resumen de pedido */}
          <div className="col" style={{ marginBottom: "25px" }}>
            <div className="card">
              <div className="card-header">
                <h2>Resumen de compra</h2>
              </div>
              <ul className="list-group list-group-flush">
                <div className="card mb-3">
                  <div className="row g-0" style={{ marginBottom: "15px" }}>
                    <div className="col-md-2"></div>
                    <div className="col-md-6"></div>
                    <div className="card-body">
                      {store.carrito.map((item, id) => (
                        <div
                          className="input-group mb-3 justify-content-md-left"
                          key={id}
                        >
                          {item.cantidad} {item.productInfo.name} - ${" "}
                          {item.precio}
                        </div>
                      ))}
                    </div>
                    <div className="text-end" style={{ marginRight: "15px" }}>
                      <h4 style={{ marginRight: "35px", marginBottom: "10px" }}>
                        Total: $ {total}
                      </h4>
                    </div>
                    <div></div>
                    <div>
                      <button
                        type="button"
                        className="btn btn-outline-success w-50 float-end"
                        style={{ marginRight: "35px", marginTop: "15px" }}
                        onClick={mp}
                      >
                        Finalizar compra (pago on-line)
                      </button>
                    </div>
                  </div>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

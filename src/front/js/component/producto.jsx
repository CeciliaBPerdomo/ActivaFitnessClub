import React, {useState, useContext, useEffect} from "react";
import {Link, useParams} from "react-router-dom";
import {Context} from "../store/appContext";

export const Producto = () => {
    const {store, actions} = useContext(Context);
    const params = useParams();

    useEffect(() => {
        actions.obtenerProductoId(parseInt(params.theid));
    }, []);

    return (
        <>
            <div className="container">
                <div style={
                    {
                        marginBottom: "10px",
                        marginTop: "10px"

                    }
                }>
                    <h1>Producto:</h1>
                    <br/>

                    <Link to={"/ListadoProductos"}>
                        <button type="button" className="btn btn-outline-danger w-50 float-end"
                            style={
                                {marginBottom: "20px"}
                        }>
                            Listado de productos
                        </button>
                    </Link>
                    <br/>
                </div>
                <br/>
                <div className="card d-flex align-items-center"
                    style={
                        {
                            width: "350px",
                            marginBottom: "10px"
                        }
                }>
                    <img src={
                            store.producto.photo
                        }
                        className="card-img-top"
                        style={
                            {width: "270px"}
                        }/>
                    <div className="card-body">
                        <h2 className="card-title text-center">
                            {
                            store.producto.name
                        }</h2>
                        <p className="card-text text-center">
                            Precio venta:
                            <b>$ {
                                store.producto.sale_price
                            }</b>
                        </p>
                    </div>
                    <div className="card-body"></div>
                </div>
                <br/> {/* Listado de productos */}
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
        </div> */} </div>
        </>
    );
};

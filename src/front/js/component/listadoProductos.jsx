import React, {useState, useContext, useEffect} from "react";
import {Link} from "react-router-dom";
import {Context} from "../store/appContext";
import swal from "sweetalert";

export const ListadoProductos = () => {
    const {store, actions} = useContext(Context);

    // Inicio
    useEffect(() => {
        actions.obtenerProducto();
    }, []);
    return (<>
        <div className="container"
            style={
                {
                    marginTop: "20px",
                    marginBottom: "35px"
                }
        }> {/* Titulo */}
            <h1>
                Listado de productos
            </h1>
            <br/> {/* Buscar */}
            <div>
                <input className="form-control" list="datalistOptions" id="exampleDataList" placeholder="Buscar por nombre..."/>
            </div>
            <br/> {/* Crea un nuevo producto */}
            <div>
                <Link to={"/crearProducto"}>
                    <button type="button" className="btn btn-outline-danger w-50 float-end"
                        style={
                            {marginBottom: "20px"}
                    }>
                        Crear nuevo producto
                    </button>
                </Link>
            </div>
            <br/> {/* Listado de producto */}
            <table className="table table-hover table-secondary">
                <thead>
                    <tr className="text-center"> {/* Cabeceras */}
                        <th scope="col">Nombre</th>
                        <th scope="col">Stock</th>
                        <th scope="col">Precio de venta</th>
                        <th scope="col">Foto</th>
                        <th scope="col">Precio de compra</th>
                        <th scope="col">Editar</th>
                        <th scope="col">Borrar</th>
                    </tr>
                </thead>

                {/* Listado */}
                {/* Listado */}
                <tbody className="align-middle text-center"> {
                    store.productos.map((item, id) => (<tr key={id}>
                        <td> {
                            item.name
                        }</td>
                        <td> {
                            item.stock
                        }</td>
                        <td> {
                            item.sale_price
                        }</td>
                        <td> {
                            item.photo
                        }</td>
                        <td> {
                            item.purchase_price
                        }</td>

                        {/* Mas informacion */}
                        {/* <td>
                            <Link to={
                                    "" + item.id
                                }
                                className="btn btn-outline-dark">
                                <i className="fa fa-user-plus"></i>
                            </Link>
                        </td> */}

                        {/* Modificar producto */}
                        <td>
                            <Link to={
                                    "/editarProducto/" + item.id
                                }
                                className="btn btn-outline-dark">
                                <i className="fa fa-pen"></i>
                            </Link>
                        </td>

                        <td> {/* Borrar producto */}
                            <button type="button" className="btn btn-outline-danger"
                                onClick={
                                    (e) => borrar(e, item)
                            }>
                                <i className="fa fa-trash"></i>
                            </button>
                        </td>
                    </tr>))
                } </tbody>
            </table>


            {/* div del container */} </div>
    </>);
};
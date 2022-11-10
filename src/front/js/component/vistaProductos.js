import React, {useState, useContext, useEffect} from "react";
import {Link} from "react-router-dom";
import {Context} from "../store/appContext";


export const VistaProducto = () => {
    const [cantidadProducto, setCantidadProducto] = useState("")
    const {actions, store} = useContext(Context);
    console.log(store.productos);

    const agregar = async (e) => {
        e.preventDefault()

        console.log(cantidadProducto);


    }

    useEffect(() => {
        actions.obtenerProducto();
    }, []);


    return (
        <>
            <div style={
                {backgroundColor: ""}
            }>
                <hr/>

                <div className="text-center">
                    <h3 className="fw-lighter">Productos</h3>
                </div>
                <hr/>
                <div className="d-flex justify-content-center">

                    <div className="container row">
                        {
                        store.productos.map((item, id) => (
                            <div className="col-sm-4"
                                key={id}
                                style={
                                    {marginBottom: "70px"}
                            }>

                                <div className="card border-success text-center"
                                    style={
                                        {width: '18rem'}
                                }>
                                    <br/>
                                    <br/>
                                    <div clasName="rounded mx-auto d-block">

                                        <img src={
                                                item.photo
                                            }
                                            className="rounded"
                                            alt="..."
                                            style={
                                                {width: "70px"}
                                            }/>
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title">
                                            {
                                            item.name
                                        }</h5>
                                        <p>$ {
                                            item.purchase_price
                                        }</p>
                                        <div>
                                            <p>
                                                Cantidad: {
                                                item.stock
                                            } </p>
                                        </div>
                                        <div></div>
                                        <br/>
                                        <div>
                                            <button type="button" className="btn btn-outline-success"
                                                onClick={agregar}>Agregar al carrito</button>

                                        </div>
                                    </div>
                                </div>

                            </div>
                        ))
                    } </div>
                </div>
            </div>
        </>
    )
}

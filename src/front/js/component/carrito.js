import React from "react";
import {Link} from "react-router-dom";
import "../../styles/carr.css";

export const Carrito = () => {

    return (
        <>
            <div className="bg-carr vh-100">
                <div className=""
                    style={
                        {height: "800px"}
                }>

                    <br/>

                    <hr/>
                    <div className="container text-center">
                        <div className="row">
                            <div className="col">
                                <h1 className="text-light">Carrito de compras</h1>

                                <div className="card mb-3 border-danger"
                                    style={
                                        {width: "540px"}
                                }>
                                    <div className="row g-0 ">
                                        <div className="col-md-4">
                                            <img src="https://maxikiosco546.com.uy/wp-content/uploads/2021/05/590089.jpg" className="card-img-top" alt="..."/>

                                        </div>

                                        <div className="col-md-2 ">
                                            <div className="card-body">
                                                <div className="input-group mb-3 justify-content-md-left">
                                                    <label className="input-group-number" for="inputGroupSelect01"></label>
                                                    <select className="form-select" id="inputGroupSelect01">

                                                        <option value="1">1</option>
                                                        <option value="2">2</option>
                                                        <option value="3">3</option>
                                                    </select>
                                                </div>
                                                <div className="col-md-2 "></div>

                                                <div className="btn-group-vertical d-grid gap-2  justify-content-md-end">

                                                    <button type="button" className="btn btn-outline-success">Agregar</button>
                                                    <button type="button" className="btn btn-outline-danger">Quitar</button>
                                                </div>


                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <h1 className="text-light">vacio</h1>
                            </div>
                            <div className="col">
                                <h1 className="text-light">Resumen de Pedido</h1>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </>
    )
}

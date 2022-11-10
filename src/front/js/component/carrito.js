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
                        <div className="row  g-3">
                            <div className="col-md-5">
                                <h4 className="text-light">Carrito de compras</h4>

                                <div className="card mb-3 border-danger"
                                    style={
                                        {width: "540px"}
                                }>
                                    <div className="row g-0 ">
                                        <div className="col-md-2">
                                            <img src="https://maxikiosco546.com.uy/wp-content/uploads/2021/05/590089.jpg" className="card-img-top" alt="..."
                                                style={
                                                    {width: "100px"}
                                                }/>
                                            <img src="https://maxikiosco546.com.uy/wp-content/uploads/2021/05/0001941_barra-cereal-mix-yogurt-y-frutilla_550-300x300.jpeg" className="card-img-top" alt="..."
                                                style={
                                                    {width: "100px"}
                                                }/>
                                            <img src="https://valsegura.com/wp-content/uploads/2016/02/powerade-ion-icestorm-200x200.jpg" className="card-img-top" alt="..."
                                                style={
                                                    {width: "100px"}
                                                }/>

                                        </div>

                                        <div className="col-md-6 ">
                                            <br/>
                                            <br/>
                                            <p>Agua</p>
                                            <br/>
                                            <br/>
                                            <br/>
                                            <p>Barrita</p>
                                            <br/>
                                            <br/>
                                            <p>Powerade</p>
                                        </div>


                                        <div className="col-md-2  ">
                                            <div className="card-body">
                                                <br/>


                                                <div className="input-group mb-3 justify-content-md-left">
                                                    <label className="input-group-number" for="inputGroupSelect01"></label>
                                                    <select className="form-select" id="inputGroupSelect01">

                                                        <option value="1">1</option>
                                                        <option value="2">2</option>
                                                        <option value="3">3</option>
                                                    </select>
                                                </div>
                                                <br/>
                                                <br/>

                                                <div className="input-group mb-3 justify-content-md-left">
                                                    <label className="input-group-number" for="inputGroupSelect01"></label>
                                                    <select className="form-select" id="inputGroupSelect01">

                                                        <option value="1">1</option>
                                                        <option value="2">2</option>
                                                        <option value="3">3</option>
                                                    </select>
                                                </div>
                                                <br/>
                                                <br/>

                                                <div className="input-group mb-3 justify-content-md-left">
                                                    <label className="input-group-number" for="inputGroupSelect01"></label>
                                                    <select className="form-select" id="inputGroupSelect01">

                                                        <option value="1">1</option>
                                                        <option value="2">2</option>
                                                        <option value="3">3</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-2">


                                            <div className="btn-group-vertical">
                                                <br/>
                                                <br/>

                                                <button type="button" className="btn-close" aria-label="Close"></button>
                                                <br/>
                                                <br/>
                                                <br/>
                                                <button type="button" className="btn-close " aria-label="Close"></button>
                                                <br/>
                                                <br/>
                                                <br/>
                                                <button type="button" className="btn-close " aria-label="Close"></button>
                                            </div>

                                        </div>
                                    </div>


                                </div>
                            </div>
                            <div className="col-md-2">
                                <p className="text-ligth">vacio</p>
                            </div>
                            <div className="col-md-5">
                                <h1 className="text">
                                    <div className="card text-center">
                                        <div className="card-header">
                                            <h4 className="fw-light">Resumen de Pedido</h4>
                                        </div>
                                        <div className="card-body ">
                                            <h5 className="fw-light">Compras</h5>
                                            <button type="button" className="btn btn-outline-success">Finalizar compras</button>
                                        </div>

                                    </div>
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </>
    )
}

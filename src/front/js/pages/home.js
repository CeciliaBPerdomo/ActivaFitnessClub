import React, {useContext} from "react";
import {Context} from "../store/appContext";
import {Link} from "react-router-dom"


import "../../styles/home.css";

export const Home = () => {
    const {store, actions} = useContext(Context);

    return (
        <div className="bg-home vh-100">
            <div className="d-flex justify-content-between p-3 ">

                <Link to="/vistaProducto">
                    <button type="button" className="btn-group btn-secondary text-danger">Productos</button>
                </Link>
                <Link to={"/planes"}>
                <button type="button" className="btn-group btn-secondary text-danger">Planes</button>
                </Link>
                <Link to={"/quienesSomos"}>
                <button type="button" className="btn-group btn-secondary text-danger">Quienes Somos?</button>
                </Link>
                <div class="position-absolute top-50 start-50 translate-middle">
                    <p className="text-white fs-1 fw-semibold">Bienvenidos a Activa</p>
                </div>


            </div>
        </div>

    );
};

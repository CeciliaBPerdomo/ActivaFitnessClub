import React, {useContext} from "react";
import {Context} from "../store/appContext";
import {Link} from "react-router-dom"
import { Footer } from "../component/footer";


import "../../styles/home.css";

export const Home = () => {
    const {store, actions} = useContext(Context);

    return (
        <div className="bg-home vh-100">
            <div className="hstack gap-3 p-5" style={{height: "800px"}}>

                <Link to="/vistaProducto">
                    <button type="button" className="btn-group btn-info text-dark">Productos</button>
                </Link>
                <Link to={"/planes"}>
                <button type="button" className="btn-group btn-info text-dark">Planes</button>
                </Link>
                <Link to={"/quienesSomos"}>
                <button type="button" className="btn-group btn-info text-dark">Quienes Somos?</button>
                </Link>
                <div className="position-absolute top-50 start-50 translate-middle">
                    <h1 className="display-1 text-danger"><strong>Bienvenidos a Activa Fitness Club</strong></h1>
                </div>


            </div>
        </div>

    );
};

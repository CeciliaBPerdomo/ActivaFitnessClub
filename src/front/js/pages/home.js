import React, {useContext, useEffect, useState} from "react";
import {Context} from "../store/appContext";
import {Link} from "react-router-dom"
import logo from "../../img/Logo.jpg"
import { Footer } from "../component/footer";


import "../../styles/home.css";

export const Home = () => {
    const {store, actions} = useContext(Context);

    const [visibilidadBoton, setVisibilidadBoton] = useState("");
    
    useEffect(()=> {    
        if (store.auth === true)  {
            setVisibilidadBoton("show")    
        } else  {      
            setVisibilidadBoton("hidden")    
        }  
    })

    return (
        <>
        <nav className="navbar navbar-expand-lg bg-dark bg-gradient fixed-top">
                <div className="container-fluid">
                    <div>
                        <Link to="/">
                            <img className=""
                                src={logo}
                                style={
                                    {
                                        maxWidth: "50px",
                                        maxHeigth: "50px"
                                    }
                                }/></Link>
                    </div>


                    <div className="collapse navbar-collapse d-flex justify-content-md-end" id="navbarSupportedContent">


                        <button className="btn btn-ligth " type="submit">
                            <i className="bi bi-calendar3"></i>

                        </button>
                        <hr/>
                        <Link to="/login">
                        <button className="btn btn-danger" type="submit">Login</button>
                        </Link>
                    </div>
                    <div>
                        <button className="btn btn-ligth d-flex flex-row-reverse" type="submit">
                            <i className="bi bi-question-circle"></i>
                        </button>

                    </div>
                </div>
            </nav>
        <div className="bg-home vh-50">
            <div className="hstack gap-4 p-5" style={{height: "800px"}}>

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
        </>

    );
};

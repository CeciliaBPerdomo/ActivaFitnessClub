import React, {useContext, useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import {Context} from "../store/appContext";
import logo from "../../img/Logo.png";
import carrito from "../../img/Carrito/carrito.png";

export const Navbar = () => {
    let {store, actions} = useContext(Context);

    const [visibilidadBoton, setVisibilidadBoton] = useState("");
    const params = useParams();
    let idCarrito;

    useEffect(() => {
        if (store.auth === true) {
            setVisibilidadBoton("show");
        } else {
            setVisibilidadBoton("hidden");
        }
    }, []);

    const getInfo = async () => {
        await actions.obtenerCarritoIdUsuario(await store.profile.id);
        idCarrito = await store.carrito.idCarrito;
    };

    return (
        <> {" "}
            {/* ############################################
      ############# Navbar NO Logueado ###############
      ################################################*/}
            {
            !store.auth ? (
                <nav className="navbar navbar-expand-lg sticky-top bg-dark bg-gradient">
                    <div className="container-fluid">
                        <div>
                            <Link to="/">
                                <img className=""
                                    src={logo}
                                    style={
                                        {
                                            maxWidth: "80px",
                                            maxHeigth: "80px"
                                        }
                                    }/>
                            </Link>
                        </div>

                        <div className="collapse navbar-collapse d-flex justify-content-md-end" id="navbarSupportedContent"></div>
                        <div className="collapse navbar-collapse d-flex justify-content-md-end" id="navbarSupportedContent">
                            {
                            !store.auth ? (
                                <a href="/login"
                                    style={
                                        {textDecoration: "none"}
                                }>
                                    <button className="btn btn-danger border border-white d-flex" type="submit"
                                        style={
                                            {background: "#A00404"}
                                    }>
                                        Ingresar
                                    </button>
                                </a>
                            ) : null
                        }
                            {" "} </div>
                    </div>
                </nav>
            ) : null
        }
            {/* Fin de navbar sin loguearse */}
            {/* ############################################
      ############# Navbar Administrador #############
      ################################################*/}
            {
            store.auth && store.profile.role === "Administrador" ? (
                <nav className="navbar navbar-dark bg-danger fixed-top">
                    <div className="container">
                        <Link className="navbar-brand" to="/HomeAdmin">
                            <img src={logo}
                                style={
                                    {
                                        maxWidth: "50px",
                                        maxHeigth: "50px"
                                    }
                                }/>
                        </Link>

                        <ul className="nav justify-csontent-end">
                            <li className="nav-item">
                                <Link className="nav-link active text-black" aria-current="page" to="/listaAlumno">
                                    <strong>Alumnos</strong>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-black" to="/ListadoEjercicios">
                                    <strong>Ejercicios</strong>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-black" to="/ListadoProductos">
                                    <strong>Productos</strong>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-black" to="/mensualidades">
                                    <strong>Pagos de Clientes</strong>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link link-light"
                                    onClick={
                                        () => actions.logOut()
                                    }
                                    to="/">
                                    <strong>Cerrar Sesi??n</strong>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            ) : null
        }
            {/* {Fin de navbar admin} */}
            {/* ############################################
      ############# Navbar Usuario ###################
      ################################################*/}
            {
            store.auth && store.profile.role === "Alumno" ? (
                <nav className="navbar navbar-dark bg-dark fixed-top">
                    <div className="container">
                        <Link className="navbar-brand"
                            to={"/HomeUsuario"}>
                            <img src={logo}
                                style={
                                    {
                                        maxWidth: "50px",
                                        maxHeigth: "50px"
                                    }
                                }/>
                        </Link>

                        <ul className="nav justify-content-end">
                            <li className="nav-item">
                                <Link className="nav-link text-white"
                                    to={
                                        "/ListaRutinaDeAlumno/" + store.profile.id
                                }>
                                    Mi Rutina
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white"
                                    to={"/verEjercicios"}>
                                    Ejercicios
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white"
                                    to={
                                        "/vistaProducto/" + store.profile.id
                                }>
                                    Productos
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white"
                                    to={
                                        "/mispagos/" + store.profile.id
                                }>
                                    Mis Pagos
                                </Link>
                            </li>

                            {/* Mi carrito */}
                            <div className="btn-group">
                                <button type="button" className="btn btn-danger">
                                    <img src={carrito}
                                        style={
                                            {width: "20px"}
                                        }/>
                                </button>
                                <button type="button" className="btn btn-danger dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false"
                                    onClick={getInfo}>
                                    <span className="visually-hidden">Toggle Dropdown</span>
                                </button>
                                <ul className="dropdown-menu">
                                    {
                                    store.carrito.map((item, id) => (
                                        <li key={id}>
                                            <a className="dropdown-item">
                                                <img src={
                                                        item.productInfo.photo
                                                    }
                                                    style={
                                                        {width: "25px"}
                                                    }/>{" "}
                                                {
                                                item.cantidad
                                            }-{
                                                item.productInfo.name
                                            }
                                                {" "} </a>
                                        </li>
                                    ))
                                }
                                    <li>
                                        <hr className="dropdown-divider"/>
                                    </li>
                                    <li> {" "}
                                        {/* Finaliza la compra */}
                                        <a className="dropdown-item">Finalizar compra</a>
                                    </li>
                                </ul>
                            </div>

                            <li className="nav-item">
                                <Link className="nav-link link-danger"
                                    onClick={
                                        () => actions.logOut()
                                    }
                                    to="/">
                                    Cerrar Sesi??n
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            ) : null
        }
            {" "} </>
    );
};

import React, {useContext} from "react";
import {Link} from "react-router-dom";
import logo from "../../img/Logo.jpg"
import {Context} from "../store/appContext";
import "../../styles/homeUsua.css";

export const HomeUsuario = () => {

    const {store, actions} = useContext(Context);

    console.log(store.profile);
    return (<> {/* <nav className="navbar bg-black">
  <div className="container">
    <Link className="navbar-brand" to="#">
      <img src={logo} style={{maxWidth: "50px", maxHeigth: "50px"}}/>
    </Link>
  </div>
  
</nav> */}
        <nav className="navbar navbar-dark bg-dark fixed-top">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/login">
                    <img src={logo}
                        style={
                            {
                                maxWidth: "50px",
                                maxHeigth: "50px"
                            }
                        }/>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="offcanvas offcanvas-end text-bg-dark bg-danger" tabIndex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
                    <div className="offcanvas-header text-light">
                        <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">Bienvenido Usuario</h5>
                        <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="">Mi Rutina</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link"
                                    to={
                                        "/mispagos/" + store.profile.id
                                }>Mis Pagos</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="#">Ir al Carrito</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Otras Opciones
                                </Link>
                                <ul className="dropdown-menu dropdown-menu-dark">
                                    <Link to={"/quienesSomos"}>
                                        <li>
                                            <Link className="dropdown-item" to="">Quienes Somos</Link>
                                        </li>
                                    </Link>
                                    <Link to={"/planes"}>
                                        <li>
                                            <Link className="dropdown-item" to="">Nuestros Planes</Link>
                                        </li>
                                    </Link>
                                    <li>
                                        <hr className="dropdown-divider"/>
                                    </li>
                                    <Link to={"/"}>
                                        <li>
                                            <Link className="dropdown-item" to="">Cerrar Sesión</Link>
                                        </li>
                                    </Link>
                                </ul>
                            </li>
                        </ul>
                        <form className="d-flex mt-3" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                            <button className="btn btn-success" type="submit">Search</button>
                        </form>
                        <br/>
                        <div className="embed-responsive embed-responsive-16by9">
                            <iframe width="370" height="215" src="https://www.youtube.com/embed/ag9EWDlrPR4" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
        <div className="bg-homeUsua vh-100">
            <div className="hstack gap-3 p-5"
                style={
                    {height: "800px"}
            }>

                <div className="position-absolute top-50 start-50 translate-middle">
                    <h1 className="display-1 text-danger">
                        <strong>Welcome to Activa Fitness Club</strong>
                    </h1>
                </div>


            </div>
        </div>
    </>)
}

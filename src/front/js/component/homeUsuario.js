import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/Logo.jpg"
import "../../styles/homeUsua.css";

export const HomeUsuario = () => {

    return (
      <>
      {/* <nav className="navbar bg-black">
  <div className="container">
    <a className="navbar-brand" href="#">
      <img src={logo} style={{maxWidth: "50px", maxHeigth: "50px"}}/>
    </a>
  </div>
  
</nav> */}
<nav className="navbar navbar-dark bg-dark fixed-top">
  <div className="container-fluid">
    <a className="navbar-brand" href="login">
    <img src={logo} style={{maxWidth: "50px", maxHeigth: "50px"}}/>
        </a>
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
            <a className="nav-link" aria-current="page" href="#">Mi Rutina</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Mis Pagos</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Ir al Carrito</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Otras Opciones
            </a>
            <ul className="dropdown-menu dropdown-menu-dark">
                <Link to={"/quienesSomos"}>
                    <li><a className="dropdown-item" href="#">Quienes Somos</a></li>
                </Link>
                <Link to={"/planes"}>
                    <li><a className="dropdown-item" href="#">Nuestros Planes</a></li>
                </Link>
              <li>
                <hr className="dropdown-divider"/>
              </li>
              <Link to={"/"}>
                <li><a className="dropdown-item" href="#">Cerrar Sesión</a></li>
              </Link>
            </ul>
          </li>
        </ul>
        <form className="d-flex mt-3" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-success" type="submit">Search</button>
        </form>
        <br />
        <div className="embed-responsive embed-responsive-16by9">
        <iframe width="370" height="215" src="https://www.youtube.com/embed/ag9EWDlrPR4" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
</div>
      </div>
    </div>
  </div>
</nav>
            <div className="bg-homeUsua vh-100">
            <div className="hstack gap-3 p-5" style={{height: "800px"}}>

                <div className="position-absolute top-50 start-50 translate-middle">
                    <h1 className="display-1 text-danger"><strong>Welcome to Activa Fitness Club</strong></h1>
                </div>


            </div>
        </div>
      </>
    )
}
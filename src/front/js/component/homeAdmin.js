import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/Logo.png";
import "../../styles/homeAdmi.css";

export const HomeAdmin = () => {
  return (
    <>
      {/* <nav className="navbar navbar-dark bg-danger fixed-top">
  <div className="container">
    <Link className="navbar-brand" to="/login">
    <img src={logo} style={{maxWidth: "50px", maxHeigth: "50px"}}/>
        </Link>
      
    <ul className="nav justify-content-end">
  <li className="nav-item">
    <Link className="nav-link active text-black" aria-current="page" to="/listaAlumno"><strong>Alumnos</strong></Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link text-black" to="/ListadoEjercicios"><strong>Ejercicios</strong></Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link text-black" to="/ListadoProductos"><strong>Productos</strong></Link>
  </li>
  <li className="nav-item">
              <Link className="nav-link link-light" onClick={() => actions.logOut()} to="/">
              <strong>Cerrar Sesión</strong>
              </Link>
            </li>
            <li className="nav-item">
    <Link className="nav-link active text-black" aria-current="page" to="/calendario">
              <i className="bi bi-calendar3"></i>
    </Link>
  </li>
            <button className="navbar-toggler text-black " type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
      <span className="navbar-toggler-icon text-black"></span>
    </button>
</ul>
    <div className="offcanvas offcanvas-end text-bg-dark bg-black" tabIndex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
      <div className="offcanvas-header text-light">
        <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">Bienvenido Admin</h5>
        <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <hr className="text-light" />
      <div className="offcanvas-body">
        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
        
          <li className="nav-item">
            <Link className="nav-link" aria-current="page" to="/ListaRutinaDeAlumno/1">Rutinas de Clientes</Link>
          </li>
          
          <hr className="text-light" />
          
          <li className="nav-item">
            <Link className="nav-link" to="/">Pagos de Clientes</Link>
          </li>
        
          <li className="nav-item">
            <Link className="nav-link" aria-current="page" to="/crearAlumno">Ingresar Nuevo Alumno</Link>
          </li>
          
          <hr className="text-light" />
          
          <li className="nav-item">
            <Link className="nav-link" to="/vistaProducto">Stock de Productos</Link>
          </li>
          
          
          <li className="nav-item">
            <Link className="nav-link" aria-current="page" to="/carrito">Carrito</Link>
          </li>
          
          <hr className="text-light" />
          
          <li className="nav-item">
            <Link className="nav-link" to="/verEjercicios">Ver Ejercicios</Link>
          </li>
          
          
          <li className="nav-item">
            <Link className="nav-link" aria-current="page" to="/crearEjercicio">Crear Ejercicio</Link>
          </li>
          
          <hr className="text-light" />
          
          <li className="nav-item">
            <Link className="nav-link" to="/">Caja</Link>
          </li>
          
          <hr className="text-light" />
              </ul>
              <br />
      </div>
    </div>
  </div>
</nav> */}

      {/* </div>
      </nav> */}
      <div className="bg-homeAdmi vh-100">
        <div className="hstack gap-3 p-5" style={{ height: "800px" }}>
          <div className="position-absolute top-50 start-50 translate-middle">
            <h1 className="display-1 text-danger">
              <strong>Welcome Admin to Activa Fitness Club</strong>
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

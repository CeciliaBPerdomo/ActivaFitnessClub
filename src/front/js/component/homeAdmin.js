import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/Logo.png";
import "../../styles/homeAdmi.css";

export const HomeAdmin = () => {
  return (
    <>
      <nav className="navbar navbar-dark bg-danger fixed-top">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/login">
            <img src={logo} style={{ maxWidth: "50px", maxHeigth: "50px" }} />
          </Link>
          <button
            className="navbar-toggler text-black"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasDarkNavbar"
            aria-controls="offcanvasDarkNavbar"
          >
            <span className="navbar-toggler-icon text-black"></span>
          </button>
          <div
            className="offcanvas offcanvas-end text-bg-dark bg-black"
            tabIndex="-1"
            id="offcanvasDarkNavbar"
            aria-labelledby="offcanvasDarkNavbarLabel"
          >
            <div className="offcanvas-header text-light">
              <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">
                Bienvenido Admin
              </h5>
              <button
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to="/#">
                    Rutinas de Clientes
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    className="nav-link"
                    aria-current="page"
                    to="/crearRutina"
                  >
                    Crear Rutinas
                  </Link>
                </li>
                <hr className="text-light" />

                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    Pagos de Clientes
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/listaAlumno">
                    Alumnos
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    className="nav-link"
                    aria-current="page"
                    to="/crearAlumno"
                  >
                    Ingresar Nuevo Alumno
                  </Link>
                </li>

                <hr className="text-light" />

                <li className="nav-item">
                  <Link className="nav-link" to="/vistaProducto">
                    Stock de Productos
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to="/">
                    Carrito
                  </Link>
                </li>

                <hr className="text-light" />

                <li className="nav-item">
                  <Link className="nav-link" to="/verEjercicios">
                    Ver Ejercicios
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    className="nav-link"
                    aria-current="page"
                    to="/crearEjercicio"
                  >
                    Crear Ejercicio
                  </Link>
                </li>

                <hr className="text-light" />

                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    Caja
                  </Link>
                </li>

                <hr className="text-light" />
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    to="/"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Otras Opciones
                  </Link>
                  <ul className="dropdown-menu dropdown-menu-dark">
                    <li>
                      <Link className="dropdown-item" to="/quienesSomos">
                        Quienes Somos
                      </Link>
                    </li>

                    <li>
                      <Link className="dropdown-item" to="/planes">
                        Nuestros Planes
                      </Link>
                    </li>

                    <li>
                      <hr className="dropdown-divider" />
                    </li>

                    <li>
                      <Link className="dropdown-item" to="/">
                        Cerrar Sesión
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
              <form className="d-flex mt-3" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-success" type="submit">
                  Search
                </button>
              </form>
              <br />
              {/* <div className="embed-responsive embed-responsive-16by9">
        <iframe width="370" height="215" src="https://www.youtube.com/embed/ag9EWDlrPR4" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
</div> */}
            </div>
          </div>
        </div>
      </nav>
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

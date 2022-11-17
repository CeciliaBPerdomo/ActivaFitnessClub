import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import logo from "../../img/Logo.png";

export const Navbar = () => {
  let { store, actions } = useContext(Context);

  const [visibilidadBoton, setVisibilidadBoton] = useState("");
  const params = useParams();

  useEffect(() => {
    if (store.auth === true) {
      setVisibilidadBoton("show");
    } else {
      setVisibilidadBoton("hidden");
    }
    // actions.obtenerAlumnoId(parseInt(params.theid));
  }, []);

  console.log(store.profile);

  return (
    <>
      {/* ############################################
      ############# Navbar NO Logueado ###############
      ################################################*/}

      {!store.auth ? (
        <nav className="navbar navbar-expand-lg sticky-top bg-dark bg-gradient">
          <div className="container-fluid">
            <div>
              <Link to="/">
                <img
                  className=""
                  src={logo}
                  style={{
                    maxWidth: "80px",
                    maxHeigth: "80px",
                  }}
                />
              </Link>
            </div>

            <div
              className="collapse navbar-collapse d-flex justify-content-md-end"
              id="navbarSupportedContent"
            ></div>
            <div
              className="collapse navbar-collapse d-flex justify-content-md-end"
              id="navbarSupportedContent"
            >
              {!store.auth ? (
                <Link to="/login">
                  <button className="btn btn-danger d-flex" type="submit">
                    Login
                  </button>
                </Link>
              ) : null}
            </div>
          </div>
        </nav>
      ) : null}
      {/* Fin de navbar sin loguearse */}

      {/* ############################################
      ############# Navbar Administrador #############
      ################################################*/}

      {store.auth && store.profile.role === "Administrador" ? (
        <nav className="navbar navbar-dark bg-danger fixed-top">
          <div className="container">
            <Link className="navbar-brand" to="/">
              <img src={logo} style={{ maxWidth: "50px", maxHeigth: "50px" }} />
            </Link>

            <ul className="nav justify-csontent-end">
              <li className="nav-item">
                <Link
                  className="nav-link active text-black"
                  aria-current="page"
                  to="/listaAlumno"
                >
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
                  <strong> Pagos de Clientes</strong>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link link-light"
                  onClick={() => actions.logOut()}
                  to="/"
                >
                  <strong>Cerrar Sesión</strong>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active text-black"
                  aria-current="page"
                  to="/calendario"
                >
                  <i className="bi bi-calendar3"></i>
                </Link>
              </li>
              <button
                className="navbar-toggler text-black "
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasDarkNavbar"
                aria-controls="offcanvasDarkNavbar"
              >
                <span className="navbar-toggler-icon text-black"></span>
              </button>
            </ul>
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
              <hr className="text-light" />
              <div className="offcanvas-body">
                <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                  {/* <li className="nav-item">
                    <Link
                      className="nav-link"
                      aria-current="page"
                      to="/ListaRutinaDeAlumno/1"
                    >
                      Rutinas de Clientes
                    </Link>
                  </li> */}

                  {/* <hr className="text-light" /> */}

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
                    <Link
                      className="nav-link"
                      aria-current="page"
                      to="/carrito"
                    >
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

                  {/* <li className="nav-item">
                    <Link className="nav-link" to="/">
                      Caja
                    </Link>
                  </li> */}

                  {/* <hr className="text-light" /> */}
                </ul>
                <br />
              </div>
            </div>
          </div>
        </nav>
      ) : null}

      {/* {Fin de navbar admin} */}

      {/* ############################################
      ############# Navbar Usuario ###################
      ################################################*/}

      {store.auth && store.profile.role === "Alumno" ? (
        <nav className="navbar navbar-dark bg-dark fixed-top">
          <div className="container">
            <Link className="navbar-brand" to={"/"}>
              <img
                src={logo}
                style={{
                  maxWidth: "50px",
                  maxHeigth: "50px",
                }}
              />
            </Link>

            <ul className="nav justify-content-end">
              <li className="nav-item">
                <Link
                  className="nav-link text-white"
                  to={"/ListaRutinaDeAlumno/" + store.profile.id}
                >
                  Mi Rutina
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to={"/verEjercicios"}>
                  Ejercicios
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link text-white"
                  to={"/vistaProducto/" + store.profile.id}
                >
                  Productos
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle text-white"
                  data-bs-toggle="dropdown"
                  to={""}
                  role="button"
                  aria-expanded="false"
                >
                  Tus Opciones de Usuario
                </Link>
                <ul className="dropdown-menu bg-danger">
                  {/* <li>
                    <Link
                      className="dropdown-item text-black"
                      to={"/ListaRutinaDeAlumno/" + store.profile.id}
                    >
                      Mi Rutina
                    </Link>
                  </li> */}
                  <li>
                    <Link
                      className="dropdown-item text-black"
                      to={"/mispagos/" + store.profile.id}
                    >
                      Mis Pagos
                    </Link>
                  </li>
                  <li>
                    <a className="dropdown-item text-black" href="#">
                      Tus Compras
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link link-danger"
                  onClick={() => actions.logOut()}
                  to="/"
                >
                  Cerrar Sesión
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      ) : null}
    </>
  );
};

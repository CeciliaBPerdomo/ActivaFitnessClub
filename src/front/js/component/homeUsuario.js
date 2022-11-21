import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../img/Logo.png";
import { Context } from "../store/appContext";
import "../../styles/homeUsua.css";

export const HomeUsuario = () => {
  const { store, actions } = useContext(Context);

  return (
    <>
      {/* <nav className="navbar navbar-dark bg-dark fixed-top">
        <div className="container">
          <Link className="navbar-brand" to={"/login"}>
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
              <a
                className="nav-link active text-white"
                aria-current="page"
                href="#"
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to={"/vistaEjercicio/1"}>
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
                <li>
                  <Link
                    className="dropdown-item text-black"
                    to={"/ListaRutinaDeAlumno/" + store.profile.id}
                  >
                    Mi Rutina
                  </Link>
                </li>
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
      </nav> */}

      <div className="bg-homeUsua vh-100 col">
        <div className="hstack gap-3 p-5" style={{ height: "800px" }}>
          <div className="position-absolute top-50 start-50 translate-middle">
            <h1 className="display-1 text-danger">
              <strong>Bienvenido a Activa Fitness Club</strong>
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

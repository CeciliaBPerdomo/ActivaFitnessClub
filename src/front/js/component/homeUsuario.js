import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../img/Logo.png";
import { Context } from "../store/appContext";
import "../../styles/homeUsua.css";

export const HomeUsuario = () => {
  const { store, actions } = useContext(Context);

  console.log(store.profile);
  return (
    <>
      {" "}
      {/* <nav className="navbar bg-black">
  <div className="container">
    <Link className="navbar-brand" to="#">
      <img src={logo} style={{maxWidth: "50px", maxHeigth: "50px"}}/>
    </Link>
  </div>
  
</nav> */}
      <nav className="navbar navbar-dark bg-dark fixed-top">
        <div className="container">
          <Link className="navbar-brand" to="/login">
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
              <a className="nav-link text-white" href="/vistaEjercicio/1">
                Ejercicios
              </a>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/vistaProducto">
                Productos
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle text-white"
                data-bs-toggle="dropdown"
                href="#"
                role="button"
                aria-expanded="false"
              >
                Tú Opciones de Usuario
              </a>
              <ul className="dropdown-menu bg-danger">
                <li>
                  <Link className="dropdown-item text-black" to="/ListaRutinaDeAlumno/1">
                    Mi Rutina
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item text-black" to={"/mispagos/" + store.profile.id}>
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
              <Link className="nav-link link-danger" onClick={() => actions.logOut()} to="/">
                Cerrar Sesión
              </Link>
            </li>
          </ul>

        </div>
      </nav>
      {/* <div className="bg-homeUsua vh-100">
        <div className="hstack gap-3 p-5" style={{ height: "800px" }}>
          <div className="position-absolute top-50 start-50 translate-middle">
            <h1 className="display-1 text-danger">
              <strong>Welcome to Activa Fitness Club</strong>
            </h1>
          </div>
        </div>
      </div> */}
      {/* </div>

      </nav> */}
      <div className="bg-homeUsua vh-100">
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

import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import logo from "../../img/Logo.png";

export const Navbar = () => {
  let { store, actions } = useContext(Context);

  const [visibilidadBoton, setVisibilidadBoton] = useState("");

  useEffect(() => {
    if (store.auth === true) {
      setVisibilidadBoton("show");
    } else {
      setVisibilidadBoton("hidden");
    }
  });

  return (
    <>
      {/* Navbar sin estar logueado */}
      <nav className="navbar navbar-expand-lg bg-dark bg-gradient">
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
            {" "}
            <Link to="/login">
              <button className="btn btn-danger" type="submit">
                Login
              </button>
            </Link>
          </div>
        </div>
      </nav>
      {/* Fin de navbar sin loguearse */}
    </>
  );
};

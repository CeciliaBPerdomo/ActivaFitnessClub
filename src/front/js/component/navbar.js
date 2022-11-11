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
      <nav className="navbar navbar-expand-lg bg-dark bg-gradient">
        <div className="container-fluid">
          <div>
            <Link to="/">
              <img
                className=""
                src={logo}
                style={{
                  maxWidth: "50px",
                  maxHeigth: "50px",
                }}
              />
            </Link>
          </div>

          <div
            className="collapse navbar-collapse d-flex justify-content-md-end"
            id="navbarSupportedContent"
          >
            {/* <button className="btn btn-ligth " type="submit">
              <i className="bi bi-calendar3"></i>
            </button> */}
            <hr />
            {/* <Link className={"btn btn-outline-danger "+visibilidadBoton} type="submit" to="/login">
                            Login
                        </Link> */}
          </div>
          <div>
            {/* <button
              className="btn btn-ligth d-flex flex-row-reverse"
              type="submit"
            >
              <i className="bi bi-question-circle"></i>
            </button> */}
          </div>
        </div>
      </nav>
    </>
  );
};

import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../img/Logo.png";
import { Context } from "../store/appContext";
import "../../styles/homeUsua.css";

export const HomeUsuario = () => {
  const { store, actions } = useContext(Context);

  return (
    <>
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

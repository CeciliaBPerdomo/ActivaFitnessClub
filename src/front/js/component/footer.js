import React, { Component } from "react";
import logo from "../../img/wpp.jpg.png";
import { Link } from "react-router-dom";

export const Footer = () => (

  <footer className="bg-dark text-center text-white">
    <div className="container text-center">
      <div className="row">
        <div className="col">
          <h3>Dirección:</h3>
          <p>Fosalba 674, Colonia del Sacramento</p>
        </div>
        <div className="col">
          <h3>Redes sociales:</h3>
          <button className="bg-dark center rounded p-0">
            <img
              className="center rounded"
              src={logo}
              style={{
                maxWidth: "30px",
                maxHeigth: "30px",
              }}
              onClick={() =>
                (window.location.href =
                  "https://api.whatsapp.com/send?phone=59899387921")
              }
            />
          </button>
        </div>
      </div>
    </div>
  </footer>
);

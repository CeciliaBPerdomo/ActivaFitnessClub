import React, { Component } from "react";
import logo from "../../img/wpp.jpg.png";
import { Link } from "react-router-dom";

export const Footer = () => (

  // 
  <>
      <footer className="footer">
        <div className="container pt-5 pb-5 mt-5 text-white">
          <div className="row p-3">
            <div className="col-lg-5">
              <h3 className="display-6">Activa Fitness Club</h3>
              <h4>Dirección:</h4>
              <p>Fosalba 674, Colonia del Sacramento
                <br />
              </p>
            </div>

            <div className="col-5">
          <h3 className="display-6">Redes sociales:</h3>
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
                  "https://api.whatsapp.com/send?phone=59899626792")
              }
            />
          </button>
          <button className="bg-dark center rounded p-0">
            <img
              className="center rounded"
              src="https://cdn.pixabay.com/photo/2021/06/15/12/17/instagram-6338401_1280.png"
              style={{
                maxWidth: "30px",
                maxHeigth: "30px",
              }}
              onClick={() =>
                (window.location.href =
                  "https://www.instagram.com/activafitnessclub/?hl=es")
              }
            />
          </button>
          <button className="bg-dark center rounded p-0">
            <img
              className="center rounded"
              src="https://logodownload.org/wp-content/uploads/2014/09/facebook-logo-3-1.png"
              style={{
                maxWidth: "30px",
                maxHeigth: "30px",
              }}
              onClick={() =>
                (window.location.href =
                  "https://www.facebook.com/activafitnessclub2020/")
              }
            />
          </button>
        </div>
</div>
</div>
      
      </footer>
    </>
);

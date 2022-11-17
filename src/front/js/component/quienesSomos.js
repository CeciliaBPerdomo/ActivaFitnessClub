import React from "react";
import { Link } from "react-router-dom";
import ceci from "../../img/Perfiles/ceci.png";
import lk from "../../img/Perfiles/linkedin.png";
import fede from "../../img/Perfiles/Fede.jpg";
import norbis from "../../img/Perfiles/norbis.png";
import juan from "../../img/Perfiles/juan.png";

export const QuienesSomos = () => {
  return (
    <>
      <div className="text-start">
        <h1
          className="fw-lighter"
          style={{ color: "white", marginTop: "15px", marginLeft: "15px" }}
        >
          <b>Equipo de desarrollo</b>
        </h1>
        <hr />
      </div>
      <div className="container text-center" style={{ marginBottom: "25px" }}>
        <div className="row">
          {/* Ceci */}
          <div className="col" style={{ margin: "10px" }}>
            <div className="card" style={{ width: "18rem" }}>
              <img
                src={ceci}
                className="card-img-top rounded-circle"
                style={{ margin: "5px", width: "97%" }}
              />
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <h2
                    style={{
                      color: "blueviolet",
                      "font-family": "Inspiration, cursive",
                      "font-size": "48px",
                      marginTop: "20px",
                    }}
                  >
                    Cecilia Perdomo
                  </h2>
                </li>
                <li className="list-group-item">
                  <p>Full stack developer</p>
                  Colonia del Sacramento
                </li>
                <li className="list-group-item">
                  <img
                    src={lk}
                    className="card-img-top rounded-circle float-end"
                    style={{ margin: "5px", width: "20%" }}
                    onClick={() =>
                      (window.location.href =
                        "https://www.linkedin.com/in/cecilia-perdomo/")
                    }
                  />
                </li>
              </ul>
            </div>
          </div>
          {/* Fede */}
          <div className="col" style={{ margin: "10px" }}>
            <div className="card" style={{ width: "18rem" }}>
              <img
                src={fede}
                className="card-img-top rounded-circle"
                style={{ margin: "5px", width: "97%" }}
              />
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <h2
                    style={{
                      color: "blueviolet",
                      "font-family": "Inspiration, cursive",
                      "font-size": "48px",
                      marginTop: "20px",
                    }}
                  >
                    Federica Ramirez
                  </h2>
                </li>
                <li className="list-group-item">
                  <p>Full stack developer</p>
                  Tacuarembo
                </li>
                <li className="list-group-item">
                  <img
                    src={lk}
                    className="card-img-top rounded-circle float-end"
                    style={{ margin: "5px", width: "20%" }}
                    onClick={() =>
                      (window.location.href =
                        "https://www.linkedin.com/in/federica-ram%C3%ADrez-peluffo-b23bb0197/")
                    }
                  />
                </li>
              </ul>
            </div>
          </div>
          {/* Juan */}
          <div className="col" style={{ margin: "10px" }}>
            <div className="card" style={{ width: "18rem" }}>
              <img
                src={juan}
                className="card-img-top rounded-circle"
                style={{ margin: "5px", width: "97%" }}
              />
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <h2
                    style={{
                      color: "blueviolet",
                      "font-family": "Inspiration, cursive",
                      "font-size": "48px",
                      marginTop: "20px",
                    }}
                  >
                    Juan Moreira
                  </h2>
                </li>
                <li className="list-group-item">
                  <p>Full stack developer</p>
                  Cerro Largo
                </li>
                <li className="list-group-item">
                  <img
                    src={lk}
                    className="card-img-top rounded-circle float-end"
                    style={{ margin: "5px", width: "20%" }}
                    // onClick={window.location.replace(
                    //   "https://www.linkedin.com/in/cecilia-perdomo/"
                    // )}
                  />
                </li>
              </ul>
            </div>
          </div>
          {/* Norbis */}
          <div className="col" style={{ margin: "10px" }}>
            <div className="card" style={{ width: "18rem" }}>
              <img
                src={norbis}
                className="card-img-top rounded-circle"
                style={{ margin: "5px", width: "97%" }}
              />
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <h2
                    style={{
                      color: "blueviolet",
                      "font-family": "Inspiration, cursive",
                      "font-size": "48px",
                      marginTop: "20px",
                    }}
                  >
                    Norbis Silveira
                  </h2>
                </li>
                <li className="list-group-item">
                  <p>Full stack developer</p>
                  Vergara
                </li>
                <li className="list-group-item">
                  <img
                    src={lk}
                    className="card-img-top rounded-circle float-end"
                    style={{ margin: "5px", width: "20%" }}
                    // onClick={window.location.replace(
                    //   "https://www.linkedin.com/in/cecilia-perdomo/"
                    // )}
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

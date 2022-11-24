import React from "react";
import ceci from "../../img/Perfiles/ceci.png";
import lk from "../../img/Perfiles/linkedin.png";
import fede from "../../img/Perfiles/Fede.jpg";
import norbis from "../../img/Perfiles/norbis.png";
import juan from "../../img/Perfiles/juan.png";
import mail from "../../img/Perfiles/gmail.png";

export const QuienesSomos = () => {
  return (
    <>
      <br />
      <br />
      <br />
      <div className="container">
        <div
          className="d-flex"
          style={{
            background: "rgba(0,0,0, 0.315)",
            width: "100%",
            margin: "auto",
            display: "flex",
            flexWrap: "wrap",
            padding: "15px",
            boxShadow: "20px 20px 50px rgba(0,0,0, 0.5)",
            borderRadius: "15px",
            borderLeft: "0.5px solid rgba(255,255,255, 0.5)",
            borderRight: "0.5px solid rgba(255,255,255, 0.5)",
            borderTop: "0.5px solid rgba(255,255,255, 0.5)",
            borderBlock: "0.5px solid rgba(255,255,255, 0.5)",
          }}
        >
          <div className="text-start">
            <h1
              className="fw-lighter"
              style={{
                color: "white",
                marginTop: "15px",
                marginLeft: "15px",
                marginBottom: "25px",
              }}
            >
              <b>Equipo de desarrollo</b>
            </h1>
            <hr />
          </div>
          <div
            className="container text-center"
            style={{ marginBottom: "25px" }}
          >
            <div className="row justify-content-center">
              {" "}
              {/* Ceci */}
              <div className="col-sm-5" style={{ margin: "10px" }}>
                <div
                  className="card mb-3"
                  style={{
                    maxWidth: "470px",
                    boxShadow: "20px 20px 50px rgba(0,0,0, 0.5)",
                    borderRadius: "15px",
                  }}
                >
                  {/* Foto */}
                  <div className="row g-0">
                    <div className="col-md-3">
                      <img
                        src={ceci}
                        className="img-fluid rounded-circle"
                        style={{
                          margin: "10px",
                          width: "97%",
                          marginTop: "20px",
                        }}
                      />
                    </div>
                    <div className="col-md-8 ">
                      <div className="card-body">
                        <h5
                          className="card-title"
                          style={{
                            color: "blueviolet",
                            fontFamily: "Inspiration, cursive",
                            fontSize: "48px",
                            marginTop: "15px",
                          }}
                        >
                          Cecilia Perdomo
                        </h5>
                        <p className="card-text">
                          Full Stack developer
                          <br />
                          Colonia del Sacramento, Colonia
                        </p>
                        <p className="card-text">
                          <small className="text-muted">
                            <img
                              src={lk}
                              className="card-img-top rounded-circle float-end"
                              style={{
                                margin: "10px",
                                width: "12%",
                              }}
                              onClick={() =>
                                (window.location.href =
                                  "https://www.linkedin.com/in/cecilia-perdomo/")
                              }
                            />
                            <a href="/contacto/2">
                              <img
                                src={mail}
                                className="card-img-top rounded-circle float-end"
                                style={{
                                  margin: "10px",
                                  width: "12%",
                                }}
                              />
                            </a>
                          </small>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Fede */}
              <div className="col-sm-5" style={{ margin: "10px" }}>
                <div
                  className="card mb-3"
                  style={{
                    maxWidth: "470px",
                    boxShadow: "20px 20px 50px rgba(0,0,0, 0.5)",
                    borderRadius: "15px",
                  }}
                >
                  <div className="row g-0">
                    <div className="col-md-3">
                      <img
                        src={fede}
                        className="img-fluid rounded-circle"
                        style={{
                          margin: "10px",
                          width: "97%",
                          marginTop: "20px",
                        }}
                      />
                    </div>
                    <div className="col-md-8 ">
                      <div className="card-body">
                        <h5
                          className="card-title"
                          style={{
                            color: "blueviolet",
                            fontFamily: "Inspiration, cursive",
                            fontSize: "48px",
                            marginTop: "15px",
                          }}
                        >
                          Federica Ramirez
                        </h5>
                        <p className="card-text">
                          Full Stack developer
                          <br />
                          Melo, Cerro Largo
                        </p>
                        <p className="card-text">
                          <small className="text-muted">
                            <img
                              src={lk}
                              className="card-img-top rounded-circle float-end"
                              style={{
                                margin: "10px",
                                width: "12%",
                              }}
                              onClick={() =>
                                (window.location.href =
                                  "https://www.linkedin.com/in/federica-ram%C3%ADrez-peluffo-b23bb0197/")
                              }
                            />
                            <a href="/contacto/3">
                              <img
                                src={mail}
                                className="card-img-top rounded-circle float-end"
                                style={{
                                  margin: "10px",
                                  width: "12%",
                                }}
                              />
                            </a>
                          </small>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row justify-content-center">
              {" "}
              {/* Juan */}
              <div className="col-sm-5" style={{ margin: "10px" }}>
                <div
                  className="card mb-3"
                  style={{
                    maxWidth: "470px",
                    boxShadow: "20px 20px 50px rgba(0,0,0, 0.5)",
                    borderRadius: "15px",
                  }}
                >
                  <div className="row g-0">
                    <div className="col-md-3">
                      <img
                        src={juan}
                        className="img-fluid rounded-circle"
                        style={{
                          margin: "10px",
                          width: "97%",
                          marginTop: "20px",
                        }}
                      />
                    </div>
                    <div className="col-md-8 ">
                      <div className="card-body">
                        <h5
                          className="card-title"
                          style={{
                            color: "blueviolet",
                            fontFamily: "Inspiration, cursive",
                            fontSize: "48px",
                            marginTop: "15px",
                          }}
                        >
                          Juan Moreira
                        </h5>
                        <p className="card-text">
                          Full Stack developer
                          <br />
                          Melo, Cerro Largo
                        </p>
                        <p className="card-text">
                          <small className="text-muted">
                            <img
                              src={lk}
                              className="card-img-top rounded-circle float-end"
                              style={{
                                margin: "10px",
                                width: "12%",
                              }}
                              onClick={() =>
                                (window.location.href =
                                  "https://www.linkedin.com/in/juan-moreira-a0813b257/")
                              }
                            />
                            <a href="/contacto/4">
                              <img
                                src={mail}
                                className="card-img-top rounded-circle float-end"
                                style={{
                                  margin: "10px",
                                  width: "12%",
                                }}
                              />
                            </a>
                          </small>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Norbis */}
              <div className="col-sm-5" style={{ margin: "10px" }}>
                <div
                  className="card mb-3"
                  style={{
                    mawWidth: "470px",
                    boxShadow: "20px 20px 50px rgba(0,0,0, 0.5)",
                    borderRadius: "15px",
                  }}
                >
                  <div className="row g-0">
                    <div className="col-md-3">
                      <img
                        src={norbis}
                        className="img-fluid rounded-circle"
                        style={{
                          margin: "10px",
                          width: "97%",
                          marginTop: "20px",
                        }}
                      />
                    </div>
                    <div className="col-md-8 ">
                      <div className="card-body">
                        <h5
                          className="card-title"
                          style={{
                            color: "blueviolet",
                            fontFamily: "Inspiration, cursive",
                            fontSize: "48px",
                            marginTop: "15px",
                          }}
                        >
                          Norbis Silvera
                        </h5>
                        <p className="card-text">
                          Full Stack developer
                          <br />
                          Vergara, Treinta y Tres
                        </p>
                        <p className="card-text">
                          <small className="text-muted">
                            <img
                              src={lk}
                              className="card-img-top rounded-circle float-end"
                              style={{ margin: "10px", width: "12%" }}
                              onClick={() =>
                                (window.location.href =
                                  "https://www.linkedin.com/in/norbis-silvera/")
                              }
                            />
                            <a href="/contacto/1">
                              <img
                                src={mail}
                                className="card-img-top rounded-circle float-end"
                                style={{
                                  margin: "10px",
                                  width: "12%",
                                }}
                              />
                            </a>
                          </small>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
    </>
  );
};

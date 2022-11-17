import React from "react";
import {Link} from "react-router-dom";
import ceci from "../../img/Perfiles/ceci.png";
import lk from "../../img/Perfiles/linkedin.png";
import fede from "../../img/Perfiles/Fede.jpg";
import norbis from "../../img/Perfiles/norbis.png";
import juan from "../../img/Perfiles/juan.png";
import mail from "../../img/Perfiles/gmail.png";

export const QuienesSomos = () => {
    return (<>
        <div className="text-start">
            <h1 className="fw-lighter"
                style={
                    {
                        color: "white",
                        marginTop: "15px",
                        marginLeft: "15px"
                    }
            }>
                <b>Equipo de desarrollo</b>
            </h1>
            <hr/>
        </div>
        <div className="container text-center"
            style={
                {marginBottom: "25px"}
        }>
            <div className="row"> {/* Ceci */}
                <div className="col"
                    style={
                        {margin: "10px"}
                }>
                    <div className="card mb-3"
                        style={
                            {width: "540px"}
                    }>
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src={ceci}
                                    className="img-fluid rounded-circle"
                                    style={
                                        {
                                            margin: "10px",
                                            width: "97%",
                                            marginTop: "20px"
                                        }
                                    }/>
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title"
                                        style={
                                            {
                                                color: "blueviolet",
                                                fontFamily: "Inspiration, cursive",
                                                fontSize: "48px",
                                                marginTop: "15px"
                                            }
                                    }>
                                        Cecilia Perdomo
                                    </h5>
                                    <p className="card-text">
                                        Full Stack developer
                                        <br/>
                                        Colonia del Sacramento, Colonia
                                    </p>
                                    <p className="card-text">
                                        <small className="text-muted">
                                            <img src={lk}
                                                className="card-img-top rounded-circle float-end"
                                                style={
                                                    {
                                                        margin: "10px",
                                                        width: "12%"
                                                    }
                                                }
                                                onClick={
                                                    () => (window.location.href = "https://www.linkedin.com/in/cecilia-perdomo/")
                                                }/>
                                            <Link to={"/contacto/2"}>
                                                <img src={mail}
                                                    className="card-img-top rounded-circle float-end"
                                                    style={
                                                        {
                                                            margin: "10px",
                                                            width: "12%"
                                                        }
                                                    }/>
                                            </Link>
                                        </small>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Fede */}
                <div className="col"
                    style={
                        {margin: "10px"}
                }>
                    <div className="card mb-3"
                        style={
                            {width: "540px"}
                    }>
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src={fede}
                                    className="img-fluid rounded-circle"
                                    style={
                                        {
                                            margin: "10px",
                                            width: "97%",
                                            marginTop: "20px"
                                        }
                                    }/>
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title"
                                        style={
                                            {
                                                color: "blueviolet",
                                                fontFamily: "Inspiration, cursive",
                                                fontSize: "48px",
                                                marginTop: "15px"
                                            }
                                    }>
                                        Federica Ramirez
                                    </h5>
                                    <p className="card-text">
                                        Full Stack developer
                                        <br/>
                                        Melo, Cerro Largo
                                    </p>
                                    <p className="card-text">
                                        <small className="text-muted">
                                            <img src={lk}
                                                className="card-img-top rounded-circle float-end"
                                                style={
                                                    {
                                                        margin: "10px",
                                                        width: "12%"
                                                    }
                                                }
                                                onClick={
                                                    () => (window.location.href = "https://www.linkedin.com/in/federica-ram%C3%ADrez-peluffo-b23bb0197/")
                                                }/>
                                            <Link to={"/contacto/3"}>
                                                <img src={mail}
                                                    className="card-img-top rounded-circle float-end"
                                                    style={
                                                        {
                                                            margin: "10px",
                                                            width: "12%"
                                                        }
                                                    }/>
                                            </Link>
                                        </small>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row"> {/* Juan */}
                <div className="col"
                    style={
                        {margin: "10px"}
                }>
                    <div className="card mb-3"
                        style={
                            {width: "540px"}
                    }>
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src={juan}
                                    className="img-fluid rounded-circle"
                                    style={
                                        {
                                            margin: "10px",
                                            width: "97%",
                                            marginTop: "20px"
                                        }
                                    }/>
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title"
                                        style={
                                            {
                                                color: "blueviolet",
                                                fontFamily: "Inspiration, cursive",
                                                fontSize: "48px",
                                                marginTop: "15px"
                                            }
                                    }>
                                        Juan Moreira
                                    </h5>
                                    <p className="card-text">
                                        Full Stack developer
                                        <br/>
                                        Melo, Cerro Largo
                                    </p>
                                    <p className="card-text">
                                        <small className="text-muted">
                                            <img src={lk}
                                                className="card-img-top rounded-circle float-end"
                                                style={
                                                    {
                                                        margin: "10px",
                                                        width: "12%"
                                                    }
                                                }
                                                onClick={
                                                    () => (window.location.href = "https://www.linkedin.com/in/juan-moreira-a0813b257/")
                                                }/>
                                            <Link to={"/contacto/4"}>
                                                <img src={mail}
                                                    className="card-img-top rounded-circle float-end"
                                                    style={
                                                        {
                                                            margin: "10px",
                                                            width: "12%"
                                                        }
                                                    }/>
                                            </Link>
                                        </small>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Norbis */}
                <div className="col"
                    style={
                        {margin: "10px"}
                }>
                    <div className="card mb-3"
                        style={
                            {width: "540px"}
                    }>
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src={norbis}
                                    className="img-fluid rounded-circle"
                                    style={
                                        {
                                            margin: "10px",
                                            width: "97%",
                                            marginTop: "20px"
                                        }
                                    }/>
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title"
                                        style={
                                            {
                                                color: "blueviolet",
                                                fontFamily: "Inspiration, cursive",
                                                fontSize: "48px",
                                                marginTop: "15px"
                                            }
                                    }>
                                        Norbis Silvera
                                    </h5>
                                    <p className="card-text">
                                        Full Stack developer
                                        <br/>
                                        Vergara, Treinta y Tres
                                    </p>
                                    <p className="card-text">
                                        <small className="text-muted"> {/* <img
                          src={lk}
                          className="card-img-top rounded-circle float-end"
                          style={{ margin: "10px", width: "12%" }}
                          onClick={() =>
                            (window.location.href =
                              "https://www.linkedin.com/in/juan-moreira-a0813b257/")
                          }
                        /> */}
                                            <Link to={"/contacto/1"}>
                                                <img src={mail}
                                                    className="card-img-top rounded-circle float-end"
                                                    style={
                                                        {
                                                            margin: "10px",
                                                            width: "12%"
                                                        }
                                                    }/>
                                            </Link>
                                        </small>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>);
};

import React, {useContext, useEffect, useState} from "react";
import {Context} from "../store/appContext";
import {Link} from "react-router-dom"
import logo from "../../img/Logo.jpg"
import {Footer} from "../component/footer";
import pesawebp from "../../img/pesa.webp"
import ReactPlayer from 'react-player'
import pelado from "../../img/pelado.png"

import "../../styles/home.css";

export const Home = () => {
    const {store, actions} = useContext(Context);

    const [visibilidadBoton, setVisibilidadBoton] = useState("");

    useEffect(() => {
        if (store.auth === true) {
            setVisibilidadBoton("show")
        } else {
            setVisibilidadBoton("hidden")
        }
    })

    return (
        <> {/* COMIENZO NAVBAR */}
            <nav className="navbar navbar-expand-lg bg-dark bg-gradient fixed-top">
                <div className="container-fluid">
                    <div>
                        <Link to="/">
                            <img className=""
                                src={logo}
                                style={
                                    {
                                        maxWidth: "50px",
                                        maxHeigth: "50px"
                                    }
                                }/></Link>
                    </div>


                    <div className="collapse navbar-collapse d-flex justify-content-md-end" id="navbarSupportedContent">


                        <button className="btn btn-ligth " type="submit">
                            <i className="bi bi-calendar3"></i>

                        </button>
                        <hr/>
                        <Link to="/login">
                            <button className="btn btn-danger" type="submit">Login</button>
                        </Link>
                    </div>
                    <div>
                        <button className="btn btn-ligth d-flex flex-row-reverse" type="submit">
                            <i className="bi bi-question-circle"></i>
                        </button>

                    </div>
                </div>
            </nav>

            {/* FIN DE NAVBAR */}
            {/* COMIENZO PORTADA */}

            {/* <div className="container all"> */}

            <div className="container "
                style={
                    {
                        width: "100%",
                        height: "500px",
                        position: "relative",
                        top: "80px",
                        backgroundImage: "url(https://mrfitman.com/wp-content/uploads/2022/03/motivacion-gym.jpg)",
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        border: "50px"

                    }
            }>
                <div className="container"
                    style={
                        {
                            maxWidth: "800px",
                            height: "500px",
                            margin: "auto",
                            display: "flex",
                            flexDirection: "column",
                            textAlign: "center",
                            justifyContent: "center",
                            alignContent: "center",
                            color: "white"

                        }
                }>
                    <h1 style={
                        {
                            fontSize: "80px",
                            fontWeight: "500",
                            marginBottom: "20px"
                        }
                    }>Bienvenido a ActivaFitness</h1>
                    <p style={
                        {
                            fontSize: "28px",
                            fontWeight: "300"
                        }
                    }>Tu lugar</p>
                </div>
            </div>
            {/* </div> */}

            {/* FIN DE PORTADA */}
            <main style={
                {
                    maxWidth: "1200px",
                    backgroundColor: "#d2dae2",
                    position: "relative",
                    padding: "40px",
                    margin: "auto"
                }
            }>

                {/* PORTADA */}
                <div className="container"
                    style={
                        {
                            display: "flex",
                            justifyContent: "center",
                            marginTop: "60px"
                        }
                }>

                    <div className="information"
                        style={
                            {width: "50%"}
                    }>
                        <h1 style={
                            {fontSize: "50px"}
                        }>QUIENES SOMOS
                        </h1>
                        <p style={
                            {
                                fontSize: "18px",
                                marginTop: "40px"
                            }
                        }>Somos un Centro de Fitness con un enfoque integral del entrenamiento, buscando no solo mejorar tu rendimiento físico sino también potenciar el valor humano.</p>
                        <div>
                            <button>Contactate con nosotros</button>
                        </div>
                    </div>

                    <div className="media cover"
                        style={
                            {width: "60%"}
                    }>
                        <ReactPlayer url="https://www.youtube.com/watch?v=W96ITkVBRDE" controls playing muted
                            style={
                                {
                                    width: "100%",
                                    marginTop: "-40px"
                                }
                        }></ReactPlayer>
                    </div>
                </div>


            </main>


            {/* CUADRADO NEGRO CON PESA-NUESTROS PLANES */}
            <div className="container "
                style={
                    {marginTop: "80px"}
            }>
                <div className="container"
                    style={
                        {
                            height: "250px",
                            display: "flex",
                            alignContent: "center",
                            backgroundColor: "#1e272e",
                            position: "relative",
                            borderBox: "none"
                        }
                }>

                    <div className="container"
                        style={
                            {
                                width: "35%",
                                height: "100%"
                            }
                    }>
                        <img src="https://cdn.pixabay.com/photo/2016/03/31/19/34/black-1295124_960_720.png" alt=""
                            style={
                                {
                                    width: "400px",
                                    marginTop: "-20px",
                                    position: "relative",
                                    filter: "drop-shadow (-40px 0px 30px rgba(0,0,0,0.5))"
                                }
                            }/>
                    </div>
                    <div className="container"
                        style={
                            {
                                widht: "60%",
                                position: "relative",
                                padding: "40px",
                                margin: "20px",
                                color: "white"
                            }
                    }>
                        <h2 style={
                            {
                                fontSize: "28px",
                                fontWeight: "400"
                            }
                        }>Nuestros planes</h2>
                        <p style={
                            {fontSize: "14px"}
                        }>Nuestros planes de entrenamiento son muy variados, y tienen como principal función cumplir tus objetivos.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                La modalidad de entrenamiento individual tiene un enfoque mas personalizado y especifico, atendiendo tus necesidades desde todos los ángulos, haciendo que sean ideales para entrenamientos orientados a la salud, la estética y el deporte.</p>

                    </div>
                </div>

            </div>

            <br/> {/* CUADRADO NEGRO CON PELADO */}
            <div className="container"
                style={
                    {marginTop: "80px"}
            }>
                <div className="container"
                    style={
                        {
                            height: "250px",
                            display: "flex",
                            alignContent: "center",
                            backgroundColor: "#1e272e",
                            position: "relative",
                            borderBox: "none"
                        }
                }>

                    <div className="container"
                        style={
                            {
                                width: "40%",
                                height: "100%"
                            }
                    }>
                        <img src={pelado}
                            alt=""
                            style={
                                {
                                    width: "400px",
                                    marginTop: "-20px",
                                    position: "relative",
                                    filter: "drop-shadow (-40px 0px 30px rgba(0,0,0,0.5))"
                                }
                            }/>
                    </div>
                    <div className="container text"
                        style={
                            {
                                widht: "60%",
                                position: "relative",
                                padding: "40px",
                                margin: "20px",
                                color: "white"
                            }
                    }>
                        <h2 style={
                            {
                                fontSize: "28px",
                                fontWeight: "400"
                            }
                        }>Entrenamiento personalizado</h2>
                        <p style={
                            {fontSize: "14px"}
                        }>Por otro lado la modalidad de entrenamiento grupal esta mas enfocada en el dinamismo y la intensidad, el compañerismo y el trabajo en equipo. Prima la constante búsqueda de variar los escenarios de entrenamiento.La modalidad de entrenamiento individual tiene un enfoque mas personalizado y especifico, atendiendo tus necesidades desde todos los ángulos, haciendo que sean ideales para entrenamientos orientados a la salud, la estética y el deporte.</p>
                    </div>
                </div>

            </div>


            {/* CARRUSEL DE IMAGENES */}
            <div style={
                {
                    maxWidth: "1200px",
                    margin: "auto",
                    alignContent: "center",
                    marginTop: "80px"
                }
            }>

                <div className="container"
                    style={
                        {
                            display: "flex",
                            justifyContent: "center",
                            marginTop: "60px",
                            padding: "40px"

                        }
                }>

                    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="false"
                        style={
                            {maxWidth: "1200px"}
                    }>
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/athlete-using-rowing-machine-royalty-free-image-1630926677.jpg" className="d-block w-100" alt="..."/>
                                <div className="carousel-caption d-none d-md-block">
                                    <h5>QUIENES SOMOS</h5>
                                    <p>Somos un Centro de Fitness con un enfoque integral del entrenamiento, buscando no solo mejorar tu rendimiento físico sino también potenciar el valor humano.</p>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img src="https://uploads.unify.uno/content/2022/7/3/exercices-epaules-2dac130f3532d5ae.jpeg" className="d-block w-100" alt="..."/>
                                <div className="carousel-caption d-none d-md-block">
                                    <h5>Conecta con nuestra filosofia</h5>
                                    <p>Nuestra filosofía consiste en brindar calidad en la atención y bienestar a nuestros miembros.</p>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img src="https://independiente.com.py/wp-content/uploads/2022/03/Fitness-Centers-HERO-ed9cae28.jpeg" className="d-block w-100" alt="..."/>
                                <div className="carousel-caption d-none d-md-block">
                                    <h5>Empieza por tu mente</h5>
                                    <p>El ejercicio no solo cambia tu cuerpo, también cambia tu mente, tu actitud y tu humor. Beneficia tu salud y contribuye de gran manera en la mejora de tu calidad de vida</p>
                                </div>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
            <br/>
        </>

    );
};


{ /* <nav className="navbar navbar-expand-lg bg-dark bg-gradient fixed-top">
                <div className="container-fluid">
                    <div>
                        <Link to="/">
                            <img className=""
                                src={logo}
                                style={
                                    {
                                        maxWidth: "50px",
                                        maxHeigth: "50px"
                                    }
                                }/></Link>
                    </div>


                    <div className="collapse navbar-collapse d-flex justify-content-md-end" id="navbarSupportedContent">


                        <button className="btn btn-ligth " type="submit">
                            <i className="bi bi-calendar3"></i>

                        </button>
                        <hr/>
                        <Link to="/login">
                            <button className="btn btn-danger" type="submit">Login</button>
                        </Link>
                    </div>
                    <div>
                        <button className="btn btn-ligth d-flex flex-row-reverse" type="submit">
                            <i className="bi bi-question-circle"></i>
                        </button>

                    </div>
                </div>
            </nav> */
} { /* <div className="bg-home vh-50">
            <div className="hstack gap-4 p-5" style={{height: "800px"}}>

                <Link to="/vistaProducto">
                    <button type="button" className="btn-group btn-info text-dark">Productos</button>
                </Link>
                <Link to={"/planes"}>
                <button type="button" className="btn-group btn-info text-dark">Planes</button>
                </Link>
                <Link to={"/quienesSomos"}>
                <button type="button" className="btn-group btn-info text-dark">Quienes Somos?</button>
                </Link>
                <div className="position-absolute top-50 start-50 translate-middle">
                    <h1 className="display-1 text-danger"><strong>Bienvenidos a Activa Fitness Club</strong></h1>
                </div>


            </div>
        </div> */
}

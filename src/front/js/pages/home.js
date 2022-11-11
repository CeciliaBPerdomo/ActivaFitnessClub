import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import logo from "../../img/Logo.png";
import { Footer } from "../component/footer";
import pesawebp from "../../img/pesa.webp";
import ReactPlayer from "react-player";
import pelado from "../../img/pelado.png";
import logoActiva from "../../img/logoActiva.png";
import pelota from "../../img/pelota.png";

import "../../styles/home.css";

export const Home = () => {
  const { store, actions } = useContext(Context);

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
      {" "}
      {/* COMIENZO NAVBAR */}
      <nav className="navbar navbar-expand-lg bg-dark bg-gradient fixed-top">
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
            <button className="btn btn-ligth " type="submit">
              <i className="bi bi-calendar3"></i>
            </button>
            <hr />
            <Link to="/login">
              <button className="btn btn-danger" type="submit">
                Login
              </button>
            </Link>
          </div>
          <div>
            <button
              className="btn btn-ligth d-flex flex-row-reverse"
              type="submit"
            >
              <i className="bi bi-question-circle"></i>
            </button>
          </div>
        </div>
      </nav>
      {/* FIN DE NAVBAR */}
      {/* COMIENZO PORTADA */}
      <div
        className="container"
        style={{
          width: "1200px",
          height: "500px",
          position: "relative",
          top: "80px",
          backgroundImage:
            "url(https://mrfitman.com/wp-content/uploads/2022/03/motivacion-gym.jpg)",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          marginBottom: "140px",
          
        }}
      >
        <div
          className="container"
          style={{
            maxWidth: "800px",
            height: "500px",
            margin: "auto",
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
            justifyContent: "center",
            alignContent: "center",
            color: "white",
          }}
        >
          <h1
            style={{
              fontSize: "80px",
              fontWeight: "500",
              marginBottom: "20px",
              textAlign: "left",
              color: "red",
            }}
          >
            Bienvenido a
            <br />
            Activa Fitness Club
          </h1>
          <p
            style={{
              fontSize: "28px",
              fontWeight: "300",
              color: "",
            }}
          >
            <strong>Tu gimnasio, tu lugar</strong>
          </p>
        </div>
      </div>
      <hr className="text-light" />
      {/* FIN DE PORTADA */}
      {/* Filosofia */}
      <div
        className="container "
        style={{ marginTop: "60px", marginBottom: "30px" }}
      >
        <div
          className="container"
          style={{
            width: "1200px",
            height: "250px",
            display: "flex",
            alignContent: "center",
            position: "relative",
            borderBox: "none",
          }}
        >
          <div
            className="container"
            style={{
              width: "35%",
              height: "100%",
            }}
          >
            <img
              src={logoActiva}
              style={{
                width: "285px",
                marginTop: "-20px",
                position: "relative",
                filter: "drop-shadow (-40px 0px 30px rgba(0,0,0,0.5))",
              }}
            />
          </div>
          <div
            className="container"
            style={{
              widht: "60%",
              position: "relative",
              //margin: "5px",
              marginLeft: "15px",
              marginBottom: "80px",
            }}
          >
            <p className="display-5"
              style={{
                fontSize: "50px",
                color:"#a5b1c2"
              }}
            >
              Filosofía
            </p>
            <p style={{ fontSize: "18px", textAlign: "justify", color:"white" }}>
              El ejercicio no solo cambia tu cuerpo, también cambia tu mente, tu
              actitud y tu humor. Beneficia tu salud y contribuye de gran manera
              en la mejora de tu calidad de vida. Nuestra filosofía consiste en
              brindar calidad en la atención y bienestar a nuestros miembros.
              Somos un Centro de Fitness con un enfoque integral del
              entrenamiento, buscando no solo mejorar tu rendimiento físico sino
              también potenciar el valor humano.
            </p>
          </div>
        </div>
      </div>
      <hr className="text-light" />
      {/* FIN Filosofia */}
      {/* PORTADA */}
      <main
        style={{
          width: "1200px",
          position: "relative",
          padding: "40px",
          margin: "auto",
        }}
      >
        <div
          className="container"
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "60px",
          }}
        >
          <div className="information">
            <p className="display-5" style={{ fontSize: "50px", color:"#a5b1c2" }}>¿Quiénes somos?</p>
            <p
              style={{
                fontSize: "18px",
                marginRight: "35px",
                textAlign: "justify",
                color:"white"
              }}
            >
              Somos un Centro de Fitness con un enfoque integral del
              entrenamiento, buscando no solo mejorar tu rendimiento físico sino
              también potenciar el valor humano.
            </p>
            <div>
              <button
                className="btn btn-outline-light"
                style={{ marginTop: "35px" }}
                onClick={() =>
                  (window.location.href =
                    "https://api.whatsapp.com/send?phone=59899626792")
                }
              >
                Contactate con nosotros
              </button>
            </div>
          </div>

          <div className="media cover" style={{ width: "60%" }}>
            <ReactPlayer
              url="https://www.youtube.com/watch?v=W96ITkVBRDE"
              controls
              playing
              muted
              style={{
                width: "100%",
                marginTop: "-40px",
              }}
            ></ReactPlayer>
          </div>
        </div>
      </main>
      <hr className="text-light" />
      {/* FIN DE QUIENES SOMOS */}
      {/* CUADRADO NEGRO CON PESA-NUESTROS PLANES */}
      <div className="container " style={{ marginTop: "60px" }}>
        <div
          className="container"
          style={{
            width: "1200px",
            height: "250px",
            display: "flex",
            alignContent: "center",
            position: "relative",
            borderBox: "none",
          }}
        >
          <div
            className="container"
            style={{
              width: "35%",
              height: "100%",
            }}
          >
            <img
              src="https://cdn.pixabay.com/photo/2016/03/31/19/34/black-1295124_960_720.png"
              alt=""
              style={{
                width: "400px",
                marginTop: "-20px",
                position: "relative",
                filter: "drop-shadow (-40px 0px 30px rgba(0,0,0,0.5))",
              }}
            />
          </div>
          <div
            className="container"
            style={{
              widht: "60%",
              position: "relative",
              margin: "5px",
              marginLeft: "15px",
            }}
          >
            <p className="display-5"
              style={{
                fontSize: "50px", color:"#a5b1c2"
              }}
            >
              Nuestros planes
            </p>
            <p style={{ fontSize: "18px", textAlign: "justify", color:"white" }}>
              Nuestros planes de entrenamiento son muy variados, y tienen como
              principal función cumplir tus objetivos. La modalidad de
              entrenamiento individual tiene un enfoque más personalizado y
              específico, atendiendo tus necesidades desde todos los ángulos,
              haciendo que sean ideales para entrenamientos orientados a la
              salud, la estética y el deporte.
            </p>
          </div>
        </div>
      </div>
      <hr className="text-light"/>
      {/* CUADRADO NEGRO CON PELADO */}
      <div className="container" style={{ marginTop: "60px" }}>
        <div
          className="container"
          style={{
            width: "1200px",
            height: "280px",
            display: "flex",
            alignContent: "center",
            position: "relative",
            borderBox: "none",
          }}
        >
          <div
            className="container"
            style={{
              width: "40%",
              height: "100%",
            }}
          >
            <img
              src={pelado}
              style={{
                width: "465px",
                marginTop: "-30px",
                position: "relative",
                filter: "drop-shadow (-40px 0px 30px rgba(0,0,0,0.5))",
              }}
            />
          </div>
          <div
            className="container text"
            style={{
              widht: "60%",
              position: "relative",
              margin: "5px",
            }}
          >
            <p className="display-5"
              style={{
                fontSize: "50px",
                color:"#a5b1c2"
              }}
            >
              Entrenamiento personalizado
            </p>
            <p style={{ fontSize: "18px", textAlign: "justify", color:"white" }}>
              Por otro lado la modalidad de entrenamiento grupal esta mas
              enfocada en el dinamismo y la intensidad, el compañerismo y el
              trabajo en equipo. Prima la constante búsqueda de variar los
              escenarios de entrenamiento.
            </p>
          </div>
        </div>
      </div>
      <hr className="text-light" />
      {/* Entrenamiento funcional */}
      <div
        className="container"
        style={{ marginTop: "60px", marginBottom: "60px" }}
      >
        <div
          className="container"
          style={{
            width: "1200px",
            height: "300px",
            display: "flex",
            alignContent: "center",
            position: "relative",
            borderBox: "none",
          }}
        >
          <div
            className="container"
            style={{
              width: "40%",
              height: "100%",
            }}
          >
            <img
              src={pelota}
              style={{
                width: "375px",
                marginTop: "-30px",
                position: "relative",
                filter: "drop-shadow (-40px 0px 30px rgba(0,0,0,0.5))",
              }}
            />
          </div>
          <div
            className="container text"
            style={{
              widht: "60%",
              position: "relative",
              margin: "5px",
            }}
          >
            <p className="display-5"
              style={{
                fontSize: "50px",
                color:"#a5b1c2"
              }}
            >
              Entrenamiento funcional
            </p>
            <p style={{ fontSize: "18px", textAlign: "justify", color:"white" }}>
              Es un método de entrenamiento que mejora nuestro rendimiento en
              cualquier aspecto que nos propongamos, desde los movimientos de la
              vida cotidiana hasta las actividades deportivas de alto nivel de
              exigencia. Las sesiones de entrenamiento se basan, antes que nada,
              en la utilidad para cualquier persona, sea cual sea su condición
              física. El objetivo es exponer a la persona a tantas situaciones y
              combinaciones de movimientos como sea posible para lograr el
              desarollo de las capacidades físicas.
            </p>
          </div>
        </div>
      </div>
      <hr className="text-light" />

      <div
        className="container"
        style={{ marginTop: "60px", marginBottom: "60px" }}
      >
        <div
          className="container"
          style={{
            width: "1200px",
            height: "300px",
            display: "flex",
            alignContent: "center",
            position: "relative",
            borderBox: "none",
          }}
        >
          <div
            className="container"
            style={{
              width: "40%",
              height: "100%",
            }}
          >
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3289.351810195052!2d-57.8423841850913!3d-34.46859845786764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a313f2236d1c15%3A0x6c5d7dcbab5d10d6!2sActiva%20Fitness%20Club!5e0!3m2!1ses!2suy!4v1668024931885!5m2!1ses!2suy" width="400" height="200" style={{border:"0", marginLeft:"10px", marginTop:"40px"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      
          </div>
          <div
            className="container text"
            style={{
              widht: "60%",
              position: "relative",
              margin: "5px",
            }}
          >
            <p className="display-5"
              style={{
                fontSize: "50px",
                color:"#a5b1c2"
              }}
            >
              Ubicación
            </p>
            <p style={{ fontSize: "18px", textAlign: "justify", color:"white" }}>Encontranos en Fosalba 674, Colonia del Sacramento</p>
          </div>
        </div>
      </div>
    </>
  );
};

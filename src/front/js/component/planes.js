import React from "react";
import {Link} from "react-router-dom"

export const Planes = ()  => {
    return (
        <>
        <div className="row">
        <h1 className="display-3 text-center">PLANES</h1>
  <div className="col-sm-6">
    <div className="card">
      <div className="card-body">
        <img src="https://www.dexeus.com/blog/wp-content/uploads/2019/11/shutterstock_1495916660-1000x640.jpg" className="img-fluid" alt="..."/>
        <p className="card-text">Nuestros planes de entrenamiento son muy variados, y tienen como principal función cumplir tus objetivos.
La modalidad de entrenamiento individual tiene un enfoque mas personalizado y especifico, atendiendo tus necesidades desde todos los ángulos, haciendo que sean ideales para entrenamientos orientados a la salud, la estética y el deporte.</p>
  
      </div>
    </div>
  </div>
  <div className="col-sm-6">
    <div className="card">
      <div className="card-body">
      <img src="https://img.freepik.com/free-photo/young-fitness-man-studio_7502-5005.jpg?w=2000" className="img-fluid" alt="..."/>
        <p className="card-text">Por otro lado la modalidad de entrenamiento grupal esta mas enfocada en el dinamismo y la intensidad, el compañerismo y el trabajo en equipo. Prima la constante búsqueda de variar los escenarios de entrenamiento.</p>
  
      </div>
    </div>
  </div>
</div>
        </>
    )
}
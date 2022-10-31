import React from "react";
import { Link } from "react-router-dom";

export const VerEjercicio = () => {

    return (
      <>
      <div className="card-group">
  <div className="card">
  <div className="card-body">
  <h1 className="display-6">Ejercicios de Espalda</h1>
    <img src="https://i.blogs.es/1aff7c/istock-959538212/1366_2000.jpeg" className="card-img-top" alt="..."/>
    </div>
    <div className="card-body text-center">
    <button type="button" className="btn btn-outline-info">
    <i className="fa fa-eye"></i>
        </button>
    </div>
    <div className="card-footer text-center">
    <button type="button" className="btn btn-outline-warning">
    <i className="fa fa-pen"></i>
    </button>
    </div>
    <div className="card-footer text-center">
    <button type="button" className="btn btn-outline-danger">
    <i className="fa fa-trash"></i>
        </button>
    </div>
  </div>

  <div className="card">
  <div className="card-body">
  <h1 className="display-6">Ejercicios de Pecho</h1>
    <img src="https://mejorconsalud.as.com/wp-content/uploads/2021/11/ejercicio-polea-pecho.jpg" className="card-img-top" alt="..."/>
    </div>
    <div className="card-body text-center">
    <button type="button" className="btn btn-outline-info">
    <i className="fa fa-eye"></i>
        </button>
    </div>
    <div className="card-footer text-center">
    <button type="button" className="btn btn-outline-warning">
    <i className="fa fa-pen"></i>
    </button>
    </div>
    <div className="card-footer text-center">
    <button type="button" className="btn btn-outline-danger">
    <i className="fa fa-trash"></i>
        </button>
    </div>
  </div>

  <div className="card">
  <div className="card-body">
  <h1 className="display-6">Ejercicios de Biceps</h1>
    <img src="https://wp-test-dev.s3.amazonaws.com/public/uploads/2022/07/Ridofranzw.jpg" className="card-img-top" alt="..."/>
    </div>
    <div className="card-body text-center">
    <button type="button" className="btn btn-outline-info">
    <i className="fa fa-eye"></i>
        </button>
    </div>
    <div className="card-footer text-center">
    <button type="button" className="btn btn-outline-warning">
    <i className="fa fa-pen"></i>
    </button>
    </div>
    <div className="card-footer text-center">
    <button type="button" className="btn btn-outline-danger">
    <i className="fa fa-trash"></i>
        </button>
    </div>
  </div>
  
</div>
<hr />

<div className="card-group">
  <div className="card">
  <div className="card-body">
  <h1 className="display-6">Ejercicios de Piernas</h1>
    <img src="https://curadas.com/wp-content/uploads/2022/04/fortalecer-piernas-fuerza-entrenamiento-ejercicio-sentadilla-sentadillas-pierna-pesa-mancuerna-chico-chica-FILEminimizer.jpg" className="card-img-top" alt="..."/>
    </div>
    <div className="card-body text-center">
    <button type="button" className="btn btn-outline-info">
    <i className="fa fa-eye"></i>
        </button>
    </div>
    <div className="card-footer text-center">
    <button type="button" className="btn btn-outline-warning">
    <i className="fa fa-pen"></i>
    </button>
    </div>
    <div className="card-footer text-center">
    <button type="button" className="btn btn-outline-danger">
    <i className="fa fa-trash"></i>
        </button>
    </div>
  </div>

  <div className="card">
  <div className="card-body">
  <h1 className="display-6">Ejercicios de Abdomen</h1>
    <img src="https://filesedc.com/uploads/363/img/2022/07/1200/chica-haciendo-abdominales-62da8b13e9dc1.webp" className="card-img-top" alt="..."/>
    </div>
    <div className="card-body text-center">
    <button type="button" className="btn btn-outline-info">
    <i className="fa fa-eye"></i>
        </button>
    </div>
    <div className="card-footer text-center">
    <button type="button" className="btn btn-outline-warning">
    <i className="fa fa-pen"></i>
    </button>
    </div>
    <div className="card-footer text-center">
    <button type="button" className="btn btn-outline-danger">
    <i className="fa fa-trash"></i>
        </button>
    </div>
  </div>

  <div className="card">
  <div className="card-body">
  <h1 className="display-6">Ejercicios de Triceps</h1>
    <img src="https://mundoentrenamiento.com/wp-content/uploads/2021/01/ejercicios-para-triceps.jpg" className="card-img-top" alt="..."/>
    </div>
    <div className="card-body text-center">
    <button type="button" className="btn btn-outline-info">
    <i className="fa fa-eye"></i>
        </button>
    </div>
    <div className="card-footer text-center">
    <button type="button" className="btn btn-outline-warning">
    <i className="fa fa-pen"></i>
    </button>
    </div>
    <div className="card-footer text-center">
    <button type="button" className="btn btn-outline-danger">
    <i className="fa fa-trash"></i>
        </button>
    </div>
  </div>
  
</div>
<br />
<br />
    <div>
        <Link to={"/crearEjercicio"}>
    <a href="#" className="link-primary">Crear otro ejercicio</a>
    </Link>
    </div>
      </>
)
}
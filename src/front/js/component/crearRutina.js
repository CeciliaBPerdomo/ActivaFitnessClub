import React from "react";
import { Link } from "react-router-dom";

export const CrearRutina = () => {

    return (
      <>
      <div className="container">
      <div>
          <br /> 
          <p className="h1">Crear Rutina</p>
          </div>
          <br />
      <div className="input-group input-group-sm mb-3">
                            <span className="input-group-text" id="inputGroup-sizing-sm">Alumno</span>
                            <select className="form-select" aria-label="Default select example">
                                    <option selected>Nombre y Apellido</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
            </div>
            <br />
            <div className="input-group input-group-sm mb-3">
                            <span className="input-group-text" id="inputGroup-sizing-sm">Ejercicio</span>
                            <select className="form-select" aria-label="Default select example">
                                    <option selected>Nombre del ejercicio</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
            </div>
            <br />

        <div className="row g-6">
            <div className="col-sm input-group input-group-sm mb-3">
                            <span className="input-group-text" id="inputGroup-sizing-sm">Series</span>
                <input type="text" className="form-control" aria-label="City"/>
            </div>
            <div className="col-sm input-group input-group-sm mb-3">
                    <span className="input-group-text" id="inputGroup-sizing-sm">Repeticiones</span>
                    <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"></input>
                                
            </div>
            <div className="col-sm input-group input-group-sm mb-3">
                <span className="input-group-text" id="inputGroup-sizing-sm">Carga</span>
                <input type="text" className="form-control" aria-label="State"/>
            </div>
        
            <div className="col-sm input-group input-group-sm mb-3">
                    <span className="input-group-text" id="inputGroup-sizing-sm">Semana</span>
                    <select className="form-select" aria-label="Default select example">
                        <option selected>1, 2, 3 o 4</option>
                        <option value="1">Semana 1</option>
                        <option value="2">Semana 2</option>
                        <option value="3">Semana 3</option>
                        <option value="3">Semana 4</option>
                    </select>
             </div>
             <div className="col-sm input-group input-group-sm mb-3">
             <span className="input-group-text" id="inputGroup-sizing-sm">Finaliza</span>
            <input
              type="date"
              className="form-control"
              id="inputNacimiento"
            />
             </div>
             
             <div className="col-sm justify-content-md-end input-group input-group-sm mb-3">
                    <button className="btn btn-primary" type="button">Añadir</button>
                </div>
        </div>

        <br />

        <table className="table table-hover table-secondary">
          <thead>
            <tr className="text-center">
            
              <th scope="col">Musculo/Tipo</th>
              <th scope="col">Ejercicio</th>
              <th scope="col">Serie</th>
              <th scope="col">Repeticiones</th>
              <th scope="col">Carga</th>
              <th scope="col">Semana</th>
              <th scope="col">Finalizada</th>

            </tr>
          </thead>

          
          <tbody className="align-middle text-center">
            
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
    
                <td>
                </td>
                <td>
                  
                </td>
              </tr>
          </tbody>
        </table>
        <br />
        <br />
            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                <button className="btn btn-outline-success me-md-2" type="button" style={{width:"25%"}}>Guardar Rutina</button>
            </div>
      </div>
      </>
    )
}
import React from "react";
import {Link} from "react-router-dom"

export const ListaAlumno = ()  => {
    return (
        <>
        <div className="container">

        <div>
            <label htmlFor="exampleDataList" className="form-label"><h3>Buscar</h3></label>
                <input className="form-control" list="datalistOptions" id="exampleDataList" placeholder="Buscar..."/>
                    <datalist id="datalistOptions"/>
                    <option value="San Francisco"/>
                    <option value="New York"/>
                    <option value="Seattle"/>
                    <option value="Los Angeles"/>
                    <option value="Chicago"/>
        </div>  
        <div className="d-grid gap-2 col-6 mx-auto">
        <button type="button" className="btn btn-outline-success">Nuevo Alumno</button>
        </div>
        <table className="table table-hover table-secondary">
  <thead>
    <tr>
      <th scope="col">Cedula</th>
      <th scope="col">Nombre</th>
      <th scope="col">Apellido</th>
      <th scope="col">Fecha de nacimiento</th>
      <th scope="col">Fecha de ingreso</th>
      <th scope="col">Mutualista</th>
      <th scope="col">Afecciones</th>
      <th scope="col">Medicamentos</th>
      <th scope="col">Email</th>
      <th scope="col">Actividades</th>
      <th scope="col">Ver Rutina</th>
      <th scope="col">Editar y borrar</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row"></th>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <button type="button" className="btn btn-outline-dark">Editar</button>
      <button type="button" className="btn btn-outline-danger">Borrar</button>
    </tr>
    <tr>
      <th scope="row"></th>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <button type="button" className="btn btn-outline-dark">Editar</button>
      <button type="button" className="btn btn-outline-danger">Borrar</button>
    </tr>
    <tr>
      <th scope="row"></th>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <button type="button" className="btn btn-outline-dark">Editar</button>
      <button type="button" className="btn btn-outline-danger">Borrar</button>
    </tr>
  </tbody>
</table>
        </div>
        </>
    );
};
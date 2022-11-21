import React, { useState, useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const ModificarAlumno = () => {
  const { store, actions } = useContext(Context);
  const params = useParams();

  const [ci, setCI] = useState(store.alumno.ci);
  const [name, setName] = useState(store.alumno.name);
  const [last_name, setLast_Name] = useState(store.alumno.last_name);
  const [phone, setPhone] = useState(store.alumno.phone);
  const [admission, setAdmission] = useState(store.alumno.date_of_admission);
  const [birthday, setBirthday] = useState(store.alumno.birthday);
  const [mutualist, setMutualist] = useState(store.alumno.mutualist);
  const [conditions, setConditions] = useState(store.alumno.medical_conditions);
  const [medicines, setMedicines] = useState(store.alumno.medicines);
  const [training_goals, setTraining] = useState(store.alumno.training_goals);
  const [mail, setMail] = useState(store.alumno.email);
  const [password, setPassword] = useState(store.alumno.password);
  const [activities, setActivities] = useState(store.alumno.activities);
  const [role, setRole] = useState(store.alumno.role);
  const [isActive, setActive] = useState(store.alumno.is_Active);
  const [cuota, setCuota] = useState(store.alumno.cuota);

  useEffect(() => {
    actions.obtenerAlumnoId(parseInt(params.theid));
  }, []);

  const modificarAlumno = (e) => {
    e.preventDefault();
    let id = parseInt(params.theid);

    swal({
      title: "Alumno Modificado",
      icon: "success",
      buttons: "Aceptar",
      timer: "5000",
      actions: actions.modificarAlumno(
        id,
        ci,
        name,
        last_name,
        phone,
        admission,
        birthday,
        mutualist,
        conditions,
        medicines,
        training_goals,
        mail,
        password,
        activities,
        role,
        isActive,
        cuota
      ),
    });
  };

  return (
    <>
      <div className="container" style={{ marginBottom: "35px" }}>
        <br />
        <h1 style={{ color: "white" }}>
          <i className="fa fa-user"> </i>
          Modificación datos de alumnos
        </h1>
        <br />
        <div>
          <Link to={"/listaAlumno"}>
            <button
              type="button"
              className="btn btn-outline-danger w-50 float-end"
              style={{ marginBottom: "20px", color: "white" }}
            >
              Listado de alumnos
            </button>
          </Link>
        </div>
        <br /> {/* Formulario de modificacion de datos */}
        <div className="formulario" onSubmit={modificarAlumno}>
          <form>
            <div
              className="container text-start"
              style={{ marginTop: "35px", color: "white" }}
            >
              <div className="row">
                <div className="col">
                  {" "}
                  {/* Cedula */}
                  <label htmlFor="validationCustom01" className="form-label">
                    <b>Cédula:</b>
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="inputCedula"
                    onChange={(e) => setCI(e.target.value)}
                    defaultValue={store.alumno.ci}
                  />
                </div>

                <div className="col">
                  {" "}
                  {/* Nombre */}
                  <label htmlFor="validationCustom01" className="form-label">
                    <b>Nombre:</b>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputNombre"
                    onChange={(e) => setName(e.target.value)}
                    defaultValue={store.alumno.name}
                  />
                </div>

                <div className="col">
                  {" "}
                  {/* Apellido */}
                  <label htmlFor="apellido" className="form-label">
                    <b>Apellido:</b>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputApellido"
                    onChange={(e) => setLast_Name(e.target.value)}
                    defaultValue={store.alumno.last_name}
                  />
                </div>

                <div className="col">
                  {" "}
                  {/* Celular */}
                  <label htmlFor="celular" className="form-label">
                    <b>Celular:</b>
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="inputCelular"
                    onChange={(e) => setPhone(e.target.value)}
                    defaultValue={store.alumno.phone}
                  />
                </div>
              </div>
            </div>
            <div
              className="container text-start"
              style={{ marginTop: "35px", color: "white" }}
            >
              <div className="row">
                <div className="col">
                  {" "}
                  {/* Fecha de nacimiento */}
                  <label htmlFor="nacimiento" className="form-label">
                    <b>Fecha de nacimiento:</b>
                  </label>
                  <input
                    type="date"
                    className="form-control"
                    id="inputNacimiento"
                    onChange={(e) => setBirthday(e.target.value)}
                    defaultValue={store.alumno.birthday}
                  />
                </div>

                {/* Fecha de ingreso */}
                <div className="col">
                  <label htmlFor="ingreso" className="form-label">
                    <b>Fecha de ingreso:</b>
                  </label>
                  <input
                    type="date"
                    className="form-control"
                    id="inputIngreso"
                    onChange={(e) => setAdmission(e.target.value)}
                    defaultValue={store.alumno.date_of_admission}
                  />
                </div>

                {/* Mutualista */}
                <div className="col">
                  <label htmlFor="mutualista" className="form-label">
                    <b>Mutualista:</b>
                  </label>
                  <select
                    className="form-select"
                    id="inputGroupSelect01"
                    onChange={(e) => setMutualist(e.target.value)}
                    defaultValue={store.alumno.mutualist}
                  >
                    <option select>Mutualista</option>
                    <option value="Hospital Evangelico">
                      Hospital Evangelico
                    </option>
                    <option value="CAMEC">CAMEC</option>
                    <option value="Salud Publica">Salud Publica</option>
                    <option value="Otro">Otro</option>
                  </select>
                </div>
              </div>
            </div>
            <div
              className="container text-start"
              style={{ marginTop: "35px", color: "white" }}
            >
              <div className="row">
                {" "}
                {/* Afecciones medicas */}
                <div className="col">
                  <label htmlFor="afec_medicas" className="form-label">
                    <b>Afecciones médicas:</b>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputAfecciones"
                    onChange={(e) => setConditions(e.target.value)}
                    defaultValue={store.alumno.medical_conditions}
                  />
                </div>
                {/* Medicamentos */}
                <div className="col">
                  <label htmlFor="medicamentos" className="form-label">
                    <b>Medicamentos:</b>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputMedicamentos"
                    onChange={(e) => setMedicines(e.target.value)}
                    defaultValue={store.alumno.medicines}
                  />
                </div>
                {/* Objetivo entreamiento */}
                <div className="col">
                  <label htmlFor="entrenamiento" className="form-label">
                    <b>Objetivo entrenamiento:</b>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputEntrenamiento"
                    aria-describedby="emailHelp"
                    onChange={(e) => setTraining(e.target.value)}
                    defaultValue={store.alumno.training_goals}
                  />
                </div>
              </div>
            </div>
            <div
              className="container text-start"
              style={{ marginTop: "35px", color: "white" }}
            >
              <div className="row">
                {" "}
                {/* Email */}
                <div className="col">
                  <label htmlFor="email" className="form-label">
                    <b>Email:</b>
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="inputEmail"
                    onChange={(e) => setMail(e.target.value)}
                    defaultValue={store.alumno.email}
                  />
                </div>
                {/* Password */}
                <div className="col">
                  <label htmlFor="password" className="form-label">
                    <b>Password:</b>
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    onChange={(e) => setPassword(e.target.value)}
                    defaultValue={store.alumno.password}
                  />
                </div>
              </div>
            </div>
            <div
              className="container text-start"
              style={{ marginTop: "35px", color: "white" }}
            >
              <div className="row">
                {" "}
                {/* Actividades */}
                <div className="col">
                  <label htmlFor="actividades" className="form-label">
                    <b>Actividades:</b>
                  </label>
                  <select
                    className="form-select"
                    id="inputGroupSelect01"
                    onChange={(e) => setActivities(e.target.value)}
                    defaultValue={store.alumno.activities}
                  >
                    <option select>Actividad:</option>
                    <option value="Funcional">Funcional</option>
                    <option value="Entrenamiento personalizado">
                      Entrenamiento personalizado
                    </option>
                    <option value="Ambos (Func, Entrenamiento)">
                      Ambos (Func, Entrenamiento)
                    </option>
                  </select>
                </div>
                {/* Rol */}
                <div className="col">
                  <label htmlFor="rol" className="form-label">
                    <b>Rol:</b>
                  </label>
                  <select
                    className="form-select"
                    id="inputGroupSelect01"
                    onChange={(e) => setRole(e.target.value)}
                    defaultValue={store.alumno.role}
                  >
                    <option select>Rol</option>
                    <option value="Alumno">Alumno</option>
                    <option value="Administrador">Administrador</option>
                    <option value="Usuario Internet">Usuario Internet</option>
                  </select>
                </div>
                {/* Cuota */}
                <div className="col">
                  <label htmlFor="afec_medicas" className="form-label">
                    <b>Cuota mensual:</b>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputAfecciones"
                    onChange={(e) => setCuota(e.target.value)}
                    defaultValue={store.alumno.cuota}
                  />
                </div>
                {/* Activo */}
                <div
                  className="col form-check"
                  style={{
                    marginTop: "38px",
                    marginLeft: "25px",
                  }}
                >
                  <input
                    className="form-check-input"
                    type="checkbox"
                    select="true"
                    id="flexCheckChecked"
                    checked
                    onChange={(e) => setActive(e.target.value)}
                    defaultValue={store.alumno.is_Active}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckChecked"
                  >
                    Activo:
                  </label>
                </div>
              </div>
            </div>
            <br /> {/* Agregar */}
            <div>
              <button
                type="submit"
                className="btn btn-outline-danger w-100"
                style={{ marginTop: "35px", color: "white" }}
                onClick={(e) => modificarAlumno(e)}
              >
                Guardar datos modificados
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

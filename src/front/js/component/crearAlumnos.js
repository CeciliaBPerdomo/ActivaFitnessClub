import React, { useState, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import swal from "sweetalert";

export const CrearAlumno = () => {
  const [ci, setCI] = useState("");
  const [name, setName] = useState("");
  const [last_name, setLast_Name] = useState("");
  const [phone, setPhone] = useState("");
  const [admission, setAdmission] = useState("");
  const [birthday, setBirthday] = useState("");
  const [mutualist, setMutualist] = useState("");
  const [conditions, setConditions] = useState("");
  const [medicines, setMedicines] = useState("");
  const [training_goals, setTraining] = useState("");
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [activities, setActivities] = useState("");
  const [role, setRole] = useState("");
  const [isActive, setActive] = useState(true);
  const [cuota, setCuota] = useState("");

  const { actions } = useContext(Context);

  const registro = (e) => {
    e.preventDefault();

    swal({
      title: `Alumno ${name} ${last_name} creado`,
      text: "Alumno guardado correctamente en la base de datos",
      icon: "success",
      button: "okey",
      actions: actions.crearAlumno(
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

    {
      /* Limpia el formulario */
    }
    setCI("");
    setName("");
    setLast_Name("");
    setPhone("");
    setAdmission("");
    setBirthday("");
    setMutualist("");
    setConditions("");
    setMedicines("");
    setTraining("");
    setMail("");
    setPassword("");
    setActivities("");
    setRole("");
    setActive("true");
    setCuota("");
  };

  return (
    <>
      <div className="container">
        <br />
        <h1 style={{ color: "white" }}>
          <i className="fa fa-user"></i>
          Ingreso de alumno
        </h1>
        <br />

        <div>
          <Link to={"/listaAlumno"}>
            <button
              type="button"
              className="btn btn-outline-danger float-end"
              style={{
                marginBottom: "20px",
                color: "white",
              }}
            >
              Listado de alumnos
            </button>
          </Link>
        </div>
        <br />

        <form onSubmit={registro}>
          <div className="container text-start " style={{ marginTop: "10px" }}>
            <div className="row "></div>
          </div>
          <div className="container text-start" style={{ marginTop: "35px" }}>
            <div className="row" style={{ color: "white" }}>
              <div className="col ">
                {/* Cedula */}
                <label htmlFor="validationCustom01" className="form-label">
                  <b>Cédula:</b>
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="inputCedula"
                  onChange={(e) => setCI(e.target.value)}
                  value={ci}
                />
              </div>

              <div className="col">
                {/* Nombre */}
                <label htmlFor="validationCustom01" className="form-label">
                  <b>Nombre:</b>
                </label>

                <input
                  type="text"
                  className="form-control"
                  id="inputNombre"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                />
              </div>

              <div className="col">
                {/* Apellido */}
                <label htmlFor="apellido" className="form-label">
                  <b>Apellido</b>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputApellido"
                  onChange={(e) => setLast_Name(e.target.value)}
                  value={last_name}
                />
              </div>

              <div className="col">
                {/* Celular */}
                <label htmlFor="celular" className="form-label">
                  <b>Celular</b>
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="inputCelular"
                  onChange={(e) => setPhone(e.target.value)}
                  value={phone}
                />
              </div>
            </div>
          </div>
          <div
            className="container text-start"
            style={{
              marginTop: "35px",
              color: "white",
            }}
          >
            <div className="row">
              <div className="col">
                {/* Fecha de nacimiento */}
                <label htmlFor="nacimiento" className="form-label">
                  <b>Fecha de nacimiento</b>
                </label>
                <input
                  type="date"
                  className="form-control"
                  id="inputNacimiento"
                  onChange={(e) => setBirthday(e.target.value)}
                  value={birthday}
                />
              </div>

              {/* Fecha de ingreso */}
              <div className="col">
                <label htmlFor="ingreso" className="form-label">
                  <b>Fecha de ingreso</b>
                </label>
                <input
                  type="date"
                  className="form-control"
                  id="inputIngreso"
                  onChange={(e) => setAdmission(e.target.value)}
                  value={admission}
                />
              </div>

              {/* Mutualista */}
              <div className="col">
                <label htmlFor="mutualista" className="form-label">
                  <b>Mutualista</b>
                </label>
                <select
                  className="form-select"
                  id="inputGroupSelect0"
                  onChange={(e) => setMutualist(e.target.value)}
                  value={mutualist}
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
            style={{
              marginTop: "35px",
              color: "white",
            }}
          >
            <div className="row">
              {/* Afecciones medicas */}
              <div className="col">
                <label htmlFor="afec_medicas" className="form-label">
                  <b>Afecciones medicas</b>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputAfecciones"
                  onChange={(e) => setConditions(e.target.value)}
                  value={conditions}
                />
              </div>
              {/* Medicamentos */}
              <div className="col">
                <label htmlFor="medicamentos" className="form-label">
                  <b>Medicamentos</b>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputMedicamentos"
                  onChange={(e) => setMedicines(e.target.value)}
                  value={medicines}
                />
              </div>

              {/* Objetivo entreamiento */}
              <div className="col">
                <label htmlFor="entrenamiento" className="form-label">
                  <b>Objetivo entrenamiento</b>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputEntrenamiento"
                  aria-describedby="emailHelp"
                  onChange={(e) => setTraining(e.target.value)}
                  value={training_goals}
                />
              </div>
            </div>
          </div>
          <div
            className="container text-start"
            style={{
              marginTop: "35px",
              color: "white",
            }}
          >
            <div className="row">
              {/* Email */}
              <div className="col">
                <label htmlFor="email" className="form-label">
                  <b>Email</b>
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="inputEmail"
                  onChange={(e) => setMail(e.target.value)}
                  value={mail}
                />
              </div>

              {/* Password */}
              <div className="col">
                <label htmlFor="password" className="form-label">
                  <b>Password</b>
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />
              </div>
            </div>
          </div>
          <div
            className="container text-start"
            style={{
              marginTop: "35px",
              color: "white",
            }}
          >
            <div className="row">
              {/* Actividades */}
              <div className="col">
                <label htmlFor="actividades" className="form-label">
                  <b>Actividades</b>
                </label>
                <select
                  className="form-select"
                  id="inputGroupSelect02"
                  onChange={(e) => setActivities(e.target.value)}
                  value={activities}
                >
                  <option select>Actividad</option>
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
                  <b>Rol</b>
                </label>
                <select
                  className="form-select"
                  id="inputGroupSelect01"
                  onChange={(e) => setRole(e.target.value)}
                  value={role}
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
                  id="inputCuota"
                  onChange={(e) => setCuota(e.target.value)}
                  value={cuota}
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
                  value={isActive}
                />
                <label className="form-check-label" htmlFor="flexCheckChecked">
                  Activo
                </label>
              </div>
            </div>
          </div>
          <br /> {/* Agregar */}
          <div>
            <button
              type="submit"
              className="btn btn-outline-danger w-100"
              style={{
                marginTop: "35px",
                marginBottom: "15px",
                color: "white",
              }}
            >
              Guardar datos
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

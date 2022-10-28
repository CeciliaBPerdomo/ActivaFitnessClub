//import React from "react";
import React, { useState, useContext } from "react";

//import {Link} from "react-router-dom"
import { Context } from "../store/appContext";
import { useHistory } from "react-router-dom";

// Datos: ci, name, last_name, phone, date_of_admission, birthday, mutualist, medical_conditions,
// medicines, training_goals, email, password, activities, role

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

  const { actions } = useContext(Context);
  //let history = useHistory();

  const registro = (e) => {
    e.preventDefault();

    actions.crearAlumno(
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
      isActive
    );

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
  };

  return (
    <>
      <div className="container">
        <br />
        <h1>Ingreso de alumno</h1>
        <br />

        <form onSubmit={registro}>
          <div className="mb-3">
            {/* Cedula */}
            <label htmlFor="cedula" className="form-label">
              Cedula
            </label>

            <input
              type="number"
              className="form-control"
              id="inputCedula"
              onChange={(e) => setCI(e.target.value)}
              value={ci}
            />
          </div>

          {/* Nombre */}
          <div className="mb-3">
            <label htmlFor="nombre" className="form-label">
              Nombre
            </label>
            <input
              type="text"
              className="form-control"
              id="inputNombre"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </div>

          {/* Apellido */}
          <div className="mb-3">
            <label htmlFor="apellido" className="form-label">
              Apellido
            </label>
            <input
              type="text"
              className="form-control"
              id="inputApellido"
              onChange={(e) => setLast_Name(e.target.value)}
              value={last_name}
            />
          </div>

          {/* Celular */}
          <div className="mb-3">
            <label htmlFor="celular" className="form-label">
              Celular
            </label>
            <input
              type="number"
              className="form-control"
              id="inputCelular"
              onChange={(e) => setPhone(e.target.value)}
              value={phone}
            />
          </div>

          {/* Fecha de nacimiento */}
          <div className="mb-3">
            <label htmlFor="nacimiento" className="form-label">
              Fecha de nacimiento
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
          <div className="mb-3">
            <label htmlFor="ingreso" className="form-label">
              Fecha de ingreso
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
          <div className="mb-3">
            <label htmlFor="mutualista" className="form-label">
              Mutualista
            </label>
            <select
              className="form-select"
              id="inputGroupSelect01"
              onChange={(e) => setMutualist(e.target.value)}
              value={mutualist}
            >
              <option select>Mutualista</option>
              <option value="Hospital Evangelico">Hospital Evangelico</option>
              <option value="CAMEC">CAMEC</option>
              <option value="Salud Publica">Salud Publica</option>
              <option value="Otro">Otro</option>
            </select>
          </div>

          {/* Afecciones medicas */}
          <div className="mb-3">
            <label htmlFor="afec_medicas" className="form-label">
              Afecciones medicas
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
          <div className="mb-3">
            <label htmlFor="medicamentos" className="form-label">
              Medicamentos
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
          <div className="mb-3">
            <label htmlFor="entrenamiento" className="form-label">
              Objetivo entrenamiento
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

          {/* Email */}
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
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
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>

          {/* Actividades */}
          <div className="mb-3">
            <label htmlFor="actividades" className="form-label">
              Actividades
            </label>
            <select
              className="form-select"
              id="inputGroupSelect01"
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
          <div className="mb-3">
            <label htmlFor="rol" className="form-label">
              Rol
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

          {/* Activo */}
          <div className="form-check">
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

          <br />
          {/* Agregar */}
          <div>
            <button type="submit" className="btn btn-outline-primary w-100">
              Agregar
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

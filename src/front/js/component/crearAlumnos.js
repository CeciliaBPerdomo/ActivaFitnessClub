// import React from "react";
import React, {useState, useContext} from "react";
import {Link, useParams} from "react-router-dom";
import {Formik, Form, Field} from "formik";
import * as Yup from "yup";

import {Context} from "../store/appContext";

// Datos: ci, name, last_name, phone, date_of_admission, birthday, mutualist, medical_conditions,
// medicines, training_goals, email, password, activities, role
const SignupSchema = Yup.object().shape({
    cedula: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required("Required"),
    nombre: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required("Required"),
    apellido: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required("Required"),
    celular: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required("Required"),
    fechaDeIngreso: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required("Required"),
    fechaDeNacimiento: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required("Required"),

    mutualista: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required("Required"),
    afeccionesMedicas: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required("Required"),
    medicamentos: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required("Required"),
    objetivoDeEntrenamiento: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string().required("Required"),
    actividades: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required("Required"),
    rol: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required("Required"),
    activo: Yup.bool().isTrue(true).required("Required"),
    cuota: Yup.number().required("Required")
});

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

    const {actions} = useContext(Context);

    const registro = (e) => {
        // e.preventDefault();

        /* Limpia el formulario */


        swal({
            title: "Alumno Creado",
            icon: "success",
            button: "Aceptar",
            timer: "5000",

            // Guarda el formulario
            actions: actions.crearAlumno(ci, name, last_name, phone, admission, birthday, mutualist, conditions, medicines, training_goals, mail, password, activities, role, isActive, cuota)
        });

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
                <br/>
                <h1 style={
                    {color: "white"}
                }>
                    <i className="fa fa-user"></i>
                    Ingreso de alumno
                </h1>
                <br/>

                <Formik initialValues={
                        {
                            cedula: "",
                            nombre: "",
                            apellido: "",
                            celular: "",
                            fechaDeIngreso: "",
                            fechaDeNacimiento: "",
                            mutualista: "",
                            afeccionesMedicas: "",
                            medicamentos: "",
                            objetivoDeEntrenamiento: "",
                            email: "",
                            password: "",
                            actividades: "",
                            rol: "",
                            activo: "",
                            cuota: ""
                        }
                    }
                    validationSchema={SignupSchema}
                    onSubmit={
                        (values, {resetForm}) => {
                            actions.crearAlumno(values.cedula, values.nombre, values.apellido, values.celular, values.fechaDeIngreso, values.fechaDeNacimiento, values.mutualista, values.afeccionesMedicas, values.medicamentos, values.objetivoDeEntrenamiento, values.email, values.password, values.actividades, values.rol, values.activo, values.cuota);
                            resetForm();
                        }
                }>
                    {
                    ({errors, touched}) => (
                        <Form className="row g-3 needs-validation">
                            <div>
                                <Link to={"/listaAlumno"}>
                                    <button type="button" className="btn btn-outline-danger w-50 float-end"
                                        style={
                                            {
                                                marginBottom: "10px",
                                                color: "white"
                                            }
                                    }>
                                        Listado de alumnos
                                    </button>
                                </Link>
                            </div>
                            <br/>
                            <div className="container text-start "
                                style={
                                    {marginTop: "10px"}
                            }>
                                <div className="row "></div>
                            </div>
                            <div className="container text-start"
                                style={
                                    {marginTop: "35px"}
                            }>
                                <div className="row"
                                    style={
                                        {color: "white"}
                                }>
                                    <div className="col">
                                        {/* Cedula */}
                                        <label htmlFor="validationCustom01" className="form-label">
                                            <b>Cedula:</b>
                                        </label>
                                        <Field type="text" name="cedula" className="form-control" id="inputCedula"/> {
                                        errors.cedula && touched.cedula ? (
                                            <div className="text-light">
                                                {
                                                errors.cedula
                                            }</div>
                                        ) : null
                                    }
                                        {" "} </div>

                                    <div className="col">
                                        {/* Nombre */}
                                        <label htmlFor="validationCustom01" className="form-label">
                                            <b>Nombre:</b>
                                        </label>
                                        <Field type="text" className="form-control" name="nombre" id="inputNombre"/> {
                                        errors.nombre && touched.nombre ? (
                                            <div className="text-light">
                                                {
                                                errors.nombre
                                            }</div>
                                        ) : null
                                    }
                                        {" "} </div>

                                    <div className="col">
                                        {/* Apellido */}
                                        <label htmlFor="validationCustom02" className="form-label">
                                            <b>Apellido</b>
                                        </label>
                                        <Field type="text" className="form-control" name="apellido" id="inputApellido"/> {
                                        errors.apellido && touched.apellido ? (
                                            <div className="text-light">
                                                {
                                                errors.apellido
                                            }</div>
                                        ) : null
                                    }
                                        {" "} </div>

                                    <div className="col">
                                        {/* Celular */}
                                        <label htmlFor="celular" className="form-label">
                                            <b>Celular</b>
                                        </label>
                                        <Field type="text" name="celular" className="form-control" id="inputCelular"/> {
                                        errors.celular && touched.celular ? (
                                            <div className="text-light">
                                                {
                                                errors.celular
                                            }</div>
                                        ) : null
                                    }
                                        {" "} </div>
                                </div>
                            </div>
                            <div className="container text-start"
                                style={
                                    {marginTop: "35px"}
                            }>
                                <div className="row"
                                    style={
                                        {color: "white"}
                                }>
                                    <div className="col">
                                        {/* Fecha de nacimiento */}
                                        <label htmlFor="nacimiento" className="form-label">
                                            <b>Fecha de nacimiento</b>
                                        </label>
                                        <Field type="date" name="fechaDeNacimiento" className="form-control" id="inputNacimiento"/> {
                                        errors.fechaDeNacimiento && touched.fechaDeNacimiento ? (
                                            <div className="text-light">
                                                {
                                                errors.fechaDeNacimiento
                                            } </div>
                                        ) : null
                                    }
                                        {" "} </div>

                                    {/* Fecha de ingreso */}
                                    <div className="col">
                                        <label htmlFor="ingreso" className="form-label">
                                            <b>Fecha de ingreso</b>
                                        </label>
                                        <Field type="date" name="fechaDeIngreso" className="form-control" id="inputIngreso"/> {
                                        errors.fechaDeIngreso && touched.fechaDeIngreso ? (
                                            <div className="text-light">
                                                {
                                                errors.fechaDeIngreso
                                            }</div>
                                        ) : null
                                    }
                                        {" "} </div>

                                    {/* Mutualista */}
                                    <div className="col">
                                        <label htmlFor="mutualista" className="form-label">
                                            <b>Mutualista</b>
                                        </label>
                                        <Field as="select" name="mutualista" className="form-select" id="inputGroupSelect01">
                                            <option value>Mutualista</option>
                                            <option value="Hospital Evangelico">
                                                Hospital Evangelico
                                            </option>
                                            <option value="CAMEC">CAMEC</option>
                                            <option value="Salud Publica">Salud Publica</option>
                                            <option value="Otro">Otro</option>
                                        </Field>
                                        {
                                        errors.mutualista && touched.mutualista ? (
                                            <div className="text-light">
                                                {
                                                errors.mutualista
                                            }</div>
                                        ) : null
                                    }
                                        {" "} </div>
                                </div>
                            </div>
                            <div className="container text-start"
                                style={
                                    {marginTop: "35px"}
                            }>
                                <div className="row"
                                    style={
                                        {color: "white"}
                                }>
                                    {/* Afecciones medicas */}
                                    <div className="col">
                                        <label htmlFor="afec_medicas" className="form-label">
                                            <b>Afecciones medicas</b>
                                        </label>
                                        <Field type="text" name="afeccionesMedicas" className="form-control" id="inputAfecciones"/> {
                                        errors.afeccionesMedicas && touched.afeccionesMedicas ? (
                                            <div className="text-light">
                                                {
                                                errors.afeccionesMedicas
                                            } </div>
                                        ) : null
                                    }
                                        {" "} </div>
                                    {/* Medicamentos */}
                                    <div className="col">
                                        <label htmlFor="medicamentos" className="form-label">
                                            <b>Medicamentos</b>
                                        </label>
                                        <Field type="text" name="medicamentos" className="form-control" id="inputMedicamentos"/> {
                                        errors.medicamentos && touched.medicamentos ? (
                                            <div className="text-light">
                                                {
                                                errors.medicamentos
                                            }</div>
                                        ) : null
                                    }
                                        {" "} </div>

                                    {/* Objetivo entreamiento */}
                                    <div className="col">
                                        <label htmlFor="entrenamiento" className="form-label">
                                            <b>Objetivo entrenamiento</b>
                                        </label>
                                        <Field type="text" name="objetivoDeEntrenamiento" className="form-control" id="inputEntrenamiento" aria-describedby="emailHelp"/> {
                                        errors.objetivoDeEntrenamiento && touched.objetivoDeEntrenamiento ? (
                                            <div className="text-light">
                                                {
                                                errors.objetivoDeEntrenamiento
                                            } </div>
                                        ) : null
                                    }
                                        {" "} </div>
                                </div>
                            </div>
                            <div className="container text-start"
                                style={
                                    {marginTop: "35px"}
                            }>
                                <div className="row"
                                    style={
                                        {color: "white"}
                                }>
                                    {/* Email */}
                                    <div className="col">
                                        <label htmlFor="email" className="form-label">
                                            <b>Email</b>
                                        </label>
                                        <Field type="email" name="email" className="form-control" id="inputEmail"/> {
                                        errors.email && touched.email ? (
                                            <div className="text-light">
                                                {
                                                errors.email
                                            }</div>
                                        ) : null
                                    }
                                        {" "} </div>

                                    {/* Password */}
                                    <div className="col">
                                        <label htmlFor="password" className="form-label">
                                            <b>Password</b>
                                        </label>
                                        <Field type="password" name="password" className="form-control" id="password"/> {
                                        errors.password && touched.password ? (
                                            <div className="text-light">
                                                {
                                                errors.password
                                            }</div>
                                        ) : null
                                    }
                                        {" "} </div>
                                </div>
                            </div>
                            <div className="container text-start"
                                style={
                                    {marginTop: "35px"}
                            }>
                                <div className="row"
                                    style={
                                        {color: "white"}
                                }>
                                    {/* Actividades */}
                                    <div className="col">
                                        <label htmlFor="actividades" className="form-label">
                                            <b>Actividades</b>
                                            <Field as="select" name="actividades" className="form-select" id="inputGroupSelect02">
                                                <option value>Actividad</option>
                                                <option value="Funcional">Funcional</option>
                                                <option value="Entrenamiento personalizado">
                                                    Entrenamiento personalizado
                                                </option>
                                                <option value="Ambos (Func, Entrenamiento)">
                                                    Ambos (Func, Entrenamiento)
                                                </option>
                                            </Field>
                                            {
                                            errors.actividades && touched.actividades ? (
                                                <div className="text-light">
                                                    {
                                                    errors.actividades
                                                }</div>
                                            ) : null
                                        }
                                            {" "} </label>
                                    </div>
                                    {/* Rol */}
                                    <div className="col">
                                        <label htmlFor="rol" className="form-label">
                                            <b>Rol</b>
                                            <Field as="select" name="rol" className="form-select" id="inputGroupSelect03">
                                                <option value>Rol</option>
                                                <option value="Alumno">Alumno</option>
                                                <option value="Administrador">Administrador</option>
                                                <option value="Usuario Internet">
                                                    Usuario Internet
                                                </option>
                                            </Field>
                                            {
                                            errors.rol && touched.rol ? (
                                                <div className="text-light">
                                                    {
                                                    errors.rol
                                                }</div>
                                            ) : null
                                        }
                                            {" "} </label>
                                    </div>
                                    {/* Cuota */}
                                    <div className="col">
                                        <label htmlFor="afec_medicas" className="form-label">
                                            <b>Cuota mensual:</b>
                                        </label>
                                        <Field type="number" name="cuota" className="form-control" id="inputCuota"/> {
                                        errors.cuota && touched.cuota ? (
                                            <div className="text-light">
                                                {
                                                errors.cuota
                                            }</div>
                                        ) : null
                                    }
                                        {" "} </div>

                                    {/* Activo */}
                                    <div className="col form-check"
                                        style={
                                            {
                                                marginTop: "38px",
                                                marginLeft: "25px"
                                            }
                                    }>
                                        <label className="form-check-label" htmlFor="flexCheckChecked">
                                            Activo
                                        </label>

                                        <Field className="form-check-input" name="activo" type="checkbox" select="true" id="flexCheckChecked"/>
                                    </div>
                                </div>
                                {
                                errors.activo && touched.activo ? (
                                    <div className="text-light">
                                        {
                                        errors.activo
                                    }</div>
                                ) : null
                            }
                                {" "} </div>
                            <br/> {/* Agregar */}
                            <div>
                                <button type="submit" className="btn btn-outline-danger w-100"
                                    style={
                                        {
                                            marginTop: "35px",
                                            marginBottom: "15px",
                                            color: "white"
                                        }
                                    }
                                    onClick={
                                        () => registro()
                                }>
                                    Guardar datos
                                </button>
                            </div>
                        </Form>
                    )
                } </Formik>
            </div>
        </>
    );
};

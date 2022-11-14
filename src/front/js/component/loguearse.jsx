import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import fondologin from "../../img/fondologin.png";
import "../../styles/loginn.css";
// Validacion formulario
const signupSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().required("Required"),
});
function Log_in() {
  // const [guardadoEmail, setGuardadoEmail] = useState("");
  // const [guardadoPassword, setGuardadoPassword] = useState("");
  const { actions, store } = useContext(Context);
  let navegacion = useNavigate();
  // // Prevenir el envio

  // const ingreso = async (e) => {
  //   e.preventDefault();
  //   let logged = await actions.login(
  //     values.email,
  //     store.profile?.password
  //   );
  //   console.log(logged);
  //   if (logged.user.role === "Alumno") {
  //     navegacion("/homeUsuario");
  //   } else if (logged.user.role === "Administrador") {
  //     navegacion("/homeAdmin");
  //   } else {
  //     null;
  //   }
  // };
  return (
    <div className="bg-loguearse vh-100">
      <div style={{ width: "100%" }} className="d-flex justify-content-center">
        <div className="card" style={{ width: "23rem" }}>
          <div className="card-body">
            <div className="titulo" style={{ marginTop: "25px" }}>
              <h1
                style={{
                  justifyContent: "center",
                  display: "flex",
                }}
              >
                Iniciar sesión
              </h1>
            </div>
            <Formik
              initialValues={{
                email: "",
                password: "",
              }}
              validationSchema={signupSchema}
              onSubmit={async (values) => {
                // preventDefault();
                let logged = await actions.login(values.email, values.password);
                console.log(logged);
                if (logged.user.role === "Alumno") {
                  navegacion("/homeUsuario");
                } else if (logged.user.role === "Administrador") {
                  navegacion("/homeAdmin");
                } else {
                  null;
                }
              }}
            >
              {({ errors, touched }) => (
                <Form>
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      Email
                    </label>
                    <Field
                      name="email"
                      type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                    />
                    {touched.email && errors.email && (
                      <div className="text-danger">{errors.email}</div>
                    )}
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="exampleInputPassword1"
                      className="form-label"
                    >
                      Contraseña
                    </label>
                    <Field
                      name="password"
                      type="password"
                      className="form-control"
                      id="exampleInputPassword1"
                    />
                    {touched.password && errors.password && (
                      <div className="text-danger">{errors.password}</div>
                    )}
                  </div>
                  <div
                    style={{
                      display: "d-flex",
                      justifyContent: "center",
                      alignContent: "center",
                    }}
                  >
                    <Link
                      className="btn btn-secundary mx-2"
                      type="submit"
                      to={"/cambiarcontra"}
                    >
                      <i>¿Has olvidado de tu contraseña?</i>
                    </Link>
                    <button
                      type="submit"
                      className="btn btn-primary d-flex content-justify-center"
                    >
                      Ingresar
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Log_in;

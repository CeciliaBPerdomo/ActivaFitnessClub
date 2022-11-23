import React, {useState, useContext} from "react";
import {Link} from "react-router-dom";
import {Context} from "../store/appContext";
import {useNavigate} from "react-router-dom";
import swal from "sweetalert";


export const Cambiarcontra = () => {
    const [cambioContra, setCambioContra] = useState("");
    let navegacion = useNavigate();
    const {store, actions} = useContext(Context);


    const envioMail = async (e) => {
        e.preventDefault();
        actions.cambioPass(cambioContra);

        let mail = cambioContra;
        console.log(mail);
        if (envioMail) {
            navegacion("/")
        } else {
            null;
        }

        swal({
            title: "Se enviara un mail a tu correo electronico",
            text: "Consejo: revisa tu bandeja de Spam, si ves que el mail de solicitud de nueva contraseña, no te llega a tu bandeja de entrada",
            icon: "success",
            buttons:{
                confirm: {
                    text: 'Aceptar',
                    className: 'sweet-warning'
                }

            },
            timer: "10000"
        })
    };

    return (
        <>
            <div className="container vh-100">
                <br/>
                <div style={
                        {width: "100%"}
                    }
                    className="d-flex justify-content-center">
                    <div className="card pb-2"
                        style={
                            {width: "30rem"}
                    }>
                        <div className="card-body">
                            <div className="titulo"
                                style={
                                    {marginTop: "25px"}
                            }>
                                <h1 style={
                                    {
                                        justifyContent: "center",
                                        display: "flex"
                                    }
                                }></h1>
                                <h1 className="display-6 text-center">
                                    <strong style={{color:"#A00404"}}>Cambio de contraseña</strong>
                                </h1>
                                <br/>
                                <p className="ms-4 me-4">Introduce el email que tienes asociado a tu cuenta en Activa Fitness Club. Te enviaremos un email en el cual recibiran una nueva contraseña.</p>
                                <div className="mb-3 ms-4 me-4">
                                    <label htmlFor="exampleFormControlInput1" className="form-label">
                                        Tú Email
                                    </label>
                                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"
                                        value={cambioContra}
                                        onChange={
                                            (e) => setCambioContra(e.target.value)
                                        }/>
                                </div>

                                <div className="d-grid gap-2 ms-4 me-4">

                                    <button type="submit" className="btn btn-danger p-4 border border-white"
                                        style={{
                                            background: "#A00404",
                                            color:"white"
                                          }}
                                        onClick={envioMail}>
                                        Solicitar nueva contraseña
                                    </button>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br/>
        </>
    );
};

import React from "react";
import {Link, useParams} from "react-router-dom";


export const Contacto = () => {

    const params = useParams();
    let direccion = ""


    switch (parseInt(params.theid)) {
        case 1: direccion = "https://formspree.io/f/xkneylzp"
            break;
        case 2: direccion = "https://formspree.io/f/mjvzlqon"
            break;

        case 3: direccion = "https://formspree.io/f/xrgdjwyd"
            break;

        case 4: direccion = "https://formspree.io/f/mbjbwvze"
            break;

        default:
            break;
    };


    return (
        <>

            <form action={direccion}
                method="POST">

                <div className="container d-flex justify-content-center"
                    style={
                        {
                            width: "30rem",
                            marginTop: "25px",
                            color: "#95afc0",

                            fontFamily: "serif",
                            background: "rgba(0,0,0, 0.315)",
                            width: "40%",
                            margin: "auto",
                            display: "flex",
                            flexWrap: "wrap",
                            padding: "15px",
                            boxShadow: "20px 20px 50px rgba(0,0,0, 0.5)",
                            borderRadius: "15px",
                            borderLeft: "0.5px solid rgba(255,255,255, 0.5)",
                            borderRight: "0.5px solid rgba(255,255,255, 0.5)",
                            borderTop: "0.5px solid rgba(255,255,255, 0.5)",
                            borderBlock: "0.5px solid rgba(255,255,255, 0.5)"


                        }
                }>

                    <div className="card "
                        style={
                            {width: "100%"}
                    }>
                        <div className="card-header"
                            style={
                                {background: "#641E16"}
                        }>
                            <h4 className="fw-normal">Contactanos</h4>
                        </div>
                        <br/>
                        <div className=""
                            style={
                                {
                                    marginTop: "15px",
                                    padding: "15px"
                                }
                        }>
                            <div className="row">
                                <div className="col">
                                    <input type="text" name="nombre"
                                        style={
                                            {

                                                border: "none",
                                                borderBottom: "2px solid",
                                                borderBottomColor: "#641E16",
                                                marginBottom: "10px",
                                                fontSize: "17px"

                                            }

                                        }
                                        className="form-control"
                                        placeholder="Su Nombre"
                                        aria-label="First name"/>
                                </div>
                                <div className="col">
                                    <input type="text" name="apellido"
                                        style={
                                            {


                                                border: "none",
                                                borderBottom: "2px solid",
                                                borderBottomColor: "#641E16",
                                                marginBottom: "10px",
                                                fontSize: "17px"
                                            }


                                        }
                                        className="form-control"
                                        placeholder="Su Apellido"
                                        aria-label="Last name"/>
                                </div>
                            </div>
                            <br/>

                            <div className="row g-3">
                                <div className="col">
                                    <input type="email" name="email"
                                        style={
                                            {

                                                border: "none",
                                                borderBottom: "2px solid",
                                                borderBottomColor: "#641E16",
                                                marginBottom: "10px",
                                                fontSize: "17px"
                                            }

                                        }
                                        className="form-control"
                                        placeholder="Su email"
                                        aria-label="Su email"/>
                                </div>
                                <div className="col">
                                    <input type="text" name="telefono"
                                        style={
                                            {

                                                border: "none",
                                                borderBottom: "2px solid",
                                                borderBottomColor: "#641E16",
                                                marginBottom: "10px",
                                                fontSize: "17px"
                                            }

                                        }
                                        className="form-control"
                                        placeholder="Un telefono de contacto"
                                        aria-label="Un telefono de contacto"/>
                                </div>
                                <br/>
                                <div className="mb-3">

                                    <textarea className="form-control" name="mensaje" id="exampleFormControlTextarea1" rows="3" placeholder="Su mensaje"
                                        style={
                                            {

                                                border: "none",
                                                borderBottom: "2px solid",
                                                borderBottomColor: "#641E16",
                                                marginBottom: "10px",
                                                fontSize: "17px",
                                                outline: "none"
                                            }

                                    }></textarea>
                                </div>
                                <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                                    <button type="submit" className="btn btn-outline-dark"
                                        style={
                                            {
                                                fontFamily: "serif",
                                                color: "#95afc0",
                                                border: "none",
                                                backgroundColor: "#641E16",
                                                marginRight: "5px",
                                                marginBlock: "10px"


                                            }
                                    }>Enviar</button>
                                </div>

                            </div>

                        </div>
                    </div>

                </div>
                <br/>

            </form>


        </>
    )
}

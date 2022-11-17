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
    }
    //    const mostrarAlerta =()=>

    return (<>

        <form action={direccion}
            method="POST">

            <div className="container d-flex justify-content-center"
                style={
                    {
                        width: "30rem",
                        marginTop: "25px"
                    }
            }>

                <div className="card "
                    style={
                        {width: "100%"}
                }>
                    <div className="card-header">
                        <h4 className="fw-normal">Contactanos</h4>
                    </div>
                    <br/>
                    <div className="card-body">
                        <div className="row">
                            <div className="col">
                                <input type="text" name="nombre" className="form-control" placeholder="Su Nombre" aria-label="First name"/>
                            </div>
                            <div className="col">
                                <input type="text" name="apellido" className="form-control" placeholder="Su Apellido" aria-label="Last name"/>
                            </div>
                        </div>
                        <br/>

                        <div className="row g-3">
                            <div className="col">
                                <input type="email" name="email" className="form-control" placeholder="Su email" aria-label="Su email"/>
                            </div>
                            <div className="col">
                                <input type="text" name="telefono" className="form-control" placeholder="Un telefono de contacto" aria-label="Un telefono de contacto"/>
                            </div>
                            <br/>
                            <div className="mb-3">

                                <textarea className="form-control" name="mensaje" id="exampleFormControlTextarea1" rows="3" placeholder="Su mensaje"></textarea>
                            </div>
                            <div>
                                <button type="submit" className="btn btn-outline-dark">Enviar</button>
                            </div>

                        </div>

                    </div>
                </div>

            </div>
            <br/>

        </form>


    </>)
}

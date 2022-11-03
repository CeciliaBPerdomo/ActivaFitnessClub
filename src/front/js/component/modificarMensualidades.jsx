import React, {useState, useContext, useEffect} from "react";
import {Link, useParams} from "react-router-dom";
import {Context} from "../store/appContext";


// ///////////////////////////////////////////
// ADMIN PUEDE MODIFICAR LAS MENSUALIDADES //
// /////////////////////////////////////////

export const EditarMensualidad = () => {

    const {store, actions} = useContext(Context);
    const params = useParams();


    const [nombreUsuario, setNombreUsuario] = useState("")
    const [apellido, setApellido] = useState("")
    const [descripcion, setDescripcion] = useState(store.mens.description)
    const [fechaPago, setFechaPago] = useState(store.mens.payment_date)
    const [numeroFactura, setNumeroFactura] = useState(store.mens.bill_n)
    const [monto, setMonto] = useState(store.mens.payment_amount)

    // useEffect(() => {
    //     actions.obtenerPaymentId(parseInt(params.theid));
    // }, []);

    const modificarMensualidad = (e) => {
        e.preventDefault();

        let id = parseInt(params.theid);

        // actions.modificarMensualidad(id, user_id, descripcion, fechaPago, numeroFactura, monto,);
    };


    return (<>

        <div className="container"
            style={
                {
                    marginTop: "20px",
                    marginBottom: "35px"
                }
        }> {/* Titulo */}
            <h1>
                <i className="fa fa-wallet"></i>
                Editar mensualidad
            </h1>
            <br/> {/* Listado de mensualidades */}
            <div>
                <Link to={"/mensualidades"}>
                    <button type="button" className="btn btn-outline-danger float-end"
                        style={
                            {marginBottom: "20px"}
                    }>
                        Listado de mensualidades
                    </button>
                </Link>
            </div>
            <br/>

            <div className="formulario">
                <form onSubmit={modificarMensualidad}>
                    <div className="container text-start "
                        style={
                            {marginTop: "10px"}
                    }>
                        <div className="row"></div>
                    </div>

                    <div className="row"
                        style={
                            {
                                marginBottom: "15px",
                                marginTop: "25px"
                            }
                    }>
                        <div className="col">
                            <label htmlFor="Alumno" className="form-label">
                                <b>Alumno:</b>
                            </label>

                            {/* <select className="form-select" id="inputGroupSelect01"
                                    onChange={
                                        (e) => setIDUsuario(e.target.value)
                                    }
                                    value={idUsuario}>
                                    <option>Seleccionar alumno</option>
                                    {
                                    store.alumnos.map((item, id) => (
                                        <option key={id}
                                            value={
                                                item.id
                                        }>
                                            {
                                            item.name
                                        }
                                            {
                                            item.last_name
                                        } </option>
                                    ))
                                } </select> */} </div>
                    </div>

                    <div className="row"
                        style={
                            {marginBottom: "15px"}
                    }>
                        <div className="col">
                            <label htmlFor="validationCustom01" className="form-label">
                                <b>Fecha de pago:</b>
                            </label>
                            <input type="date" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"
                                onChange={
                                    (e) => setFechaPago(e.target.value)
                                }
                                defaultValue={
                                    store.mens.payment_date
                                }/>
                        </div>
                    </div>

                    <div className="row"
                        style={
                            {marginBottom: "15px"}
                    }>
                        <div className="col">
                            <label htmlFor="validationCustom01" className="form-label">
                                <b>Monto:</b>
                            </label>
                            <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"
                                onChange={
                                    (e) => setMonto(e.target.value)
                                }
                                defaultValue={
                                    store.mens.payment_amount
                                }/>
                        </div>

                        <div className="col">
                            <label htmlFor="validationCustom01" className="form-label">
                                <b>No. de Factura:</b>
                            </label>

                            <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"
                                onChange={
                                    (e) => setNumeroFactura(e.target.value)
                                }
                                defaultValue={
                                    store.mens.bill_n
                                }/>
                        </div>
                    </div>

                    <div className="row"
                        style={
                            {marginBottom: "15px"}
                    }>
                        <div className="col">
                            <label htmlFor="validationCustom01" className="form-label">
                                <b>Comentarios:</b>
                            </label>
                            <input type="text" className="form-control" id="basic-description" aria-describedby="basic-addon3"
                                onChange={
                                    (e) => setDescripcion(e.target.value)
                                }
                                defaultValue={
                                    store.mens.description
                                }/>
                        </div>
                    </div>
                </form>
            </div>

            {/* Boton */}
            <div style={
                {
                    marginBottom: "100px",
                    marginTop: "30px"
                }
            }>
                <button type="button" className="btn btn-outline-danger w-50 float-end"
                    onClick={modificarMensualidad}>
                    Guardar cambios
                </button>
            </div>
        </div>
    </>)

}

{ /* <div className="bg.crearEjercicio">

<br/>
<br/>
<br/>

<div className="card container-md center"
    style={
        {width: "40rem"}
}>
    <h5 className="card-header">
        Editar mensualidad
    </h5>

    <div className="card-body">
        <div className="input-group input-group-sm mb-3">
            <span className="input-group-text" id="inputGroup-sizing-sm">Nombre</span>
            <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"
                onChange={
                    (e) => setNombreUsuario(e.target.value)
                }
                value={
                    store.mens.userInfo.name
                }
            />
        </div>

        <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon3">Apellido</span>
            <input type="text" className="form-control" id="basic-url" aria-describedby="basic-addon3"
                onChange={
                    (e) => setApellido(e.target.value)
                }
                value={
                    store.mens.userInfo.name
                }
            />
        </div>
        <div className="input-group input-group-sm mb-3">
            <span className="input-group-text" id="inputGroup-sizing-sm">Fecha de pago</span>
            <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"
                onChange={
                    (e) => setFechaPago(e.target.value)
                }
                defaultValue={
                    store.mens.payment_date
                }/>
        </div>
        <div className="d-flex">
            <div className="input-group input-group-sm mb-3">
                <span className="input-group-text" id="inputGroup-sizing-sm">Monto</span>
                <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"
                    onChange={
                        (e) => setMonto(e.target.value)
                    }
                    defaultValue={
                        store.mens.payment_amount
                    }/>
            </div>
            <div className="input-group input-group-sm mb-3">
                <span className="input-group-text" id="inputGroup-factura">Nº Factura</span>
                <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"
                    onChange={
                        (e) => setNumeroFactura(e.target.value)
                    }
                    defaultValue={
                        store.mens.bill_n
                    }/>
            </div>
        </div>
        <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon3">Descripción</span>
            <input type="text" className="form-control" id="basic-description" aria-describedby="basic-addon3"
                onChange={
                    (e) => setDescripcion(e.target.value)
                }
                defaultValue={
                    store.mens.description
                }/>
        </div>

        <button type="button" className="btn btn-success"
            onClick={modificarMensualidad}>Agregar nueva mensualidad</button>

    </div>

</div>
</div> 
} */
}

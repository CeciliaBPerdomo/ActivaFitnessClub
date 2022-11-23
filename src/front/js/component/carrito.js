import React, {useState, useContext, useEffect} from "react";
import {Link, useParams} from "react-router-dom";
import {Context} from "../store/appContext";
import "../../styles/carr.css";
import swal from "sweetalert";

export const Carrito = () => {
    const {actions, store} = useContext(Context);
    const params = useParams();
    let total = 0;
    const [cantidad, setCantidad] = useState();

    useEffect(() => {
        const getInfo = async () => { // Productos del carrito
            await actions.obtenerCarrito(parseInt(params.theid));

            // Datos del usuario
            let idUsuario = await store.carrito.user_id;
            await actions.obtenerAlumnoId(parseInt(idUsuario));
        };

        getInfo();
    }, []);

    // Calculo total de la compra
    const totalCompra = () => {
        total = 0;
        {
            store.carrito.map((item) => (total = total + item.cantidad * item.precio));
        }
    };

    totalCompra();

    const mp = async () => { // Mercado pago
        await actions.pagoMercadoPago(total);
        window.location.replace(store ?. mercadopago.sandbox_init_point);
    };

    const cambioCantidad = async (cantidad, item) => { // Chequea que no pida menos de un producto
        if (cantidad < 1) {
            swal({
                title: "Eliminar producto",
                text: `El producto ${
                    item.productInfo.name
                } se eliminará.`,
                icon: "warning",
                buttons: {
                    confirm: {
                        text: 'Entendido',
                        className: 'sweet-warning'
                    }

                },
                actions: actions.borrarProductoCarrito(item.idCarrito, item.product_id)
            });
            // Chequea que alcance el stock
        } else if (cantidad > item.productInfo.stock) {
            cantidad = cantidad - 1;
            swal({
                    title: `${
                    item.productInfo.name
                }`,
                text: `Llegaste al limite de la cantidad que hay en stock.`,
                icon: "warning",
                button: "ok"
            });
        } else { // Si esta todo ok, actualiza
            await actions.modificarCantidad(item.idCarrito, item.product_id, cantidad);
        } totalCompra();
    };

    return (
        <>
            <div> {/* Saludo */}
                <h2 style={
                    {
                        color: "white",
                        marginLeft: "10px",
                        marginTop: "90px",
                        marginBottom: "10px"
                    }
                }>
                    ¡Hola
                    <b>{
                        store.alumno.name
                    }</b>, estás por finalizar tu compra!
                </h2>
            </div>

            <hr/>

            <div className="container text-center"
                style={
                    {marginTop: "25px"}
            }>
                <div className="row">
                    {/* carrito de compras */}
                    <div className="col"
                        style={
                            {marginBottom: "25px"}
                    }>
                        <div className="card">
                            <div className="card-header">
                                <h2>Resumen de compra</h2>
                            </div>
                            <ul className="list-group list-group-flush">
                                <div className="card mb-3">
                                    {
                                    store.carrito.map((item, id) => (
                                        <div key={id}
                                            className="row g-0"
                                            style={
                                                {marginBottom: "15px"}
                                        }>
                                            <div className="col-md-2"
                                                style={
                                                    {
                                                        marginTop: "10px",
                                                        marginLeft: "15px"
                                                    }
                                            }>
                                                <img src={
                                                        item.productInfo.photo
                                                    }
                                                    className="card-img-top"
                                                    style={
                                                        {width: "135px"}
                                                    }/>
                                            </div>
                                            <div className="col-md-3 d-flex align-items-center"
                                                style={
                                                    {marginLeft: "55px"}
                                            }>
                                                {" "}
                                                <b>{
                                                    item.productInfo.name
                                                }</b>
                                            </div>

                                            {/* Cantidad */}
                                            <div className="col-md-4 d-flex align-items-center"
                                                style={
                                                    {marginLeft: "30px"}
                                            }>
                                                {/* Resta la cantidad */}
                                                <button type="button" className="btn btn-outline-danger float-end"
                                                    style={
                                                        {marginRight: "5px"}
                                                    }
                                                    onClick={
                                                        () => cambioCantidad(item.cantidad - 1, item)
                                                }>
                                                    <i className="fa fa-minus"></i>
                                                </button>
                                                {/* Numero */}
                                                <input type="text"
                                                    value={
                                                        item.cantidad
                                                    }
                                                    onChange={
                                                        (e) => setCantidad(e.target.value)
                                                    }
                                                    className="col-4"
                                                    style={
                                                        {
                                                            marginRight: "5px",
                                                            textAlign: "center"
                                                        }
                                                    }/> {/* Suma mas cantidad */}
                                                <button type="button"
                                                    onClick={
                                                        () => cambioCantidad(item.cantidad + 1, item)
                                                    }
                                                    className="btn btn-outline-success float-end"
                                                    style={
                                                        {marginRight: "40px"}
                                                }>
                                                    <i className="fa fa-plus"></i>
                                                </button>

                                                <button type="button" className="btn btn-outline-danger float-end"
                                                    onClick={
                                                        () => actions.borrarProductoCarrito(item.idCarrito, item.product_id)
                                                }>
                                                    <i className="fa fa-trash"></i>
                                                </button>
                                            </div>
                                        </div>
                                    ))
                                }
                                    {/* Total de la compra y pago */}
                                    <div className="Total">
                                        <ul className="list-group list-group-flush"
                                            style={
                                                {marginTop: "15px"}
                                        }>
                                            <hr/>
                                            <div className="text-end"
                                                style={
                                                    {marginRight: "15px"}
                                            }>
                                                <h4 style={
                                                    {
                                                        marginRight: "35px",
                                                        marginBottom: "10px"
                                                    }
                                                }>
                                                    Total: $ {total} </h4>
                                            </div>
                                            <div></div>
                                            <div>
                                                <button type="button" className="btn btn-outline-danger border border-white  w-50 float-end"
                                                    style={
                                                        {
                                                            marginRight: "35px",
                                                            marginTop: "15px",
                                                            marginBottom: "15px",
                                                            background: "#A00404",
                                                            color: "white"
                                                        }
                                                    }
                                                    onClick={mp}>
                                                    Finalizar compra (pago on-line)
                                                </button>
                                            </div>
                                        </ul>
                                    </div>
                                </div>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

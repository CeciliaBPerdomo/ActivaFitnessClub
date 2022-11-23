import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import swal from "sweetalert";

export const ListadoProductos = () => {
  const { store, actions } = useContext(Context);

  const [buscarproducto, setBuscarproducto] = useState("");
  const handlebuscarproduct = (e) => {
    if (e.key === "Enter") {
      if (buscarproducto === "") {
        actions.obtenerProducto();
      } else {
        actions.buscadorproductos(e.target.value);
      }
    }
  };

  // Inicio
  useEffect(() => {
    actions.obtenerProducto();
  }, []);

  const borrar = (e, item) => {
    e.preventDefault();

    // Elimina el producto!
    swal({
      title: `Desea borrar: ${item.name}`,
      text: "Una vez eliminado, no se podra recuperar",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        swal(`Poof! el producto ${item.name} fue borrado`, {
          icon: "success",
          actions: actions.borrarProducto(item.id),
        });
      } else {
        swal("Ups! Casi, casi!");
      }
    });
  };

  return (
    <>
      <div
        className="container vh-100"
        style={{
          marginTop: "20px",
          marginBottom: "35px",
        }}
      >
        {" "}
        {/* Titulo */}
        <h1 style={{ color: "white", marginTop: "85px" }}>
          <i class="fa-thin fa-clipboard-list-check"></i> Listado de productos
        </h1>
        <br /> {/* Buscar */}
        <div>
          <input
            onChange={(e) => setBuscarproducto(e.target.value)}
            onKeyPress={handlebuscarproduct}
            value={buscarproducto}
            className="form-control"
            placeholder="Buscar por nombre..."
          />
        </div>
        <br /> {/* Crea un nuevo producto */}
        <div>
          <Link to={"/crearProducto"}>
            <button
              type="button"
              className="btn border border-white w-50 float-end"
              style={{
                marginBottom: "40px",
                color: "white",
                background: "#A00404",
              }}
            >
              Crear nuevo producto
            </button>
          </Link>
        </div>
        <br /> {/* Listado de producto */}
        <table className="table" style={{ color: "white" }}>
          <thead>
            <tr className="text-center">
              {" "}
              {/* Cabeceras */}
              <th scope="col">Nombre</th>
              <th scope="col">Stock</th>
              <th scope="col">Precio de compra</th>
              <th scope="col">Precio de venta</th>
              <th scope="col">Foto</th>
              <th scope="col">+Info</th>
              <th scope="col">Editar</th>
              <th scope="col">Borrar</th>
            </tr>
          </thead>

          {/* Listado */}
          <tbody className="align-middle text-center">
            {" "}
            {store.productos.map((item, id) => (
              <tr key={id}>
                <td className="text-start"> {item.name}</td>
                <td> {item.stock}</td>
                <td>$ {item.purchase_price}</td>
                <td>$ {item.sale_price}</td>
                <td>
                  <img src={item.photo} style={{ width: "80px" }}></img>
                </td>

                {/* Mas informacion */}
                <td>
                  <Link
                    to={"/producto/" + item.id}
                    className="btn btn-outline-dark border border-white"
                    style={{ color: "white" }}
                  >
                    <i className="fa fa-eye"></i>
                  </Link>
                </td>
                {/* Modificar producto */}
                <td>
                  <Link
                    to={"/editarProducto/" + item.id}
                    className="btn btn-outline-dark border border-white"
                    style={{ color: "white" }}
                  >
                    <i className="fa fa-pen"></i>
                  </Link>
                </td>

                <td>
                  {" "}
                  {/* Borrar producto */}
                  <button
                    type="button"
                    className="btn btn-outline-danger"
                    onClick={(e) => borrar(e, item)}
                  >
                    <i className="fa fa-trash"></i>
                  </button>
                </td>
              </tr>
            ))}{" "}
          </tbody>
        </table>
        {/* div del container */}{" "}
      </div>
    </>
  );
};

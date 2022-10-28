import React from "react";
import {Link} from "react-router-dom"

export const VistaProducto = ()  => {
    return (
        <> 
        <div className="container row">
        <div className="col-sm-4">
            <div className="card text-center" style={{width:'18rem'}}>
                    <img src="https://canillalibre.uy/wp-content/uploads/2020/11/Agua-Nativa-Sin-Gas-1-Litro-Pack-x6239-300x300.jpg" className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Agua Nativa</h5>
                    <p>$100</p>
                    <div>
    <p>
      Stock del Producto
    </p>
  </div>
        <div>
        <select class="form-select" aria-label="Default select example">
  <option selected>Seleccionar cantidad</option>
  <option value="1">1</option>
  <option value="2">2</option>
  <option value="3">3</option>
  <option value="4">4</option>
  <option value="5">5</option>
</select>
        </div>
        <br />
        <div><button type="button" class="btn btn-outline-success">Agregar al carrito</button>
        <button type="button" class="btn-close" aria-label="Close"></button>
        </div>
                </div>
                </div>
            </div>

            <div className="col-sm-4">
            <div className="card text-center" style={{width:'18rem'}}>
                    <img src="https://geant.vteximg.com.br/arquivos/ids/287383-200-200/669252.jpg?v=637703307400600000" className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Barrita de Cereales</h5>
                    <p>$100</p>
                    <div>
    <p>
      Stock del Producto
    </p>
  </div>
  <div>
        <select class="form-select" aria-label="Default select example">
  <option selected>Seleccionar cantidad</option>
  <option value="1">1</option>
  <option value="2">2</option>
  <option value="3">3</option>
  <option value="4">4</option>
  <option value="5">5</option>
</select>
        </div>
        <br />
        <div><button type="button" class="btn btn-outline-success">Agregar al carrito</button>
        <button type="button" class="btn-close" aria-label="Close"></button>
        </div>
                </div>
                </div>
            </div>
            
            <div className="col-sm-4">
            <div className="card text-center" style={{width:'18rem'}}>
                    <img src="https://valsegura.com/wp-content/uploads/2016/02/powerade-ion-icestorm-200x200.jpg" className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Powerade</h5>
                    <p>$100</p>
                    <div>
    <p>
      Stock del Producto
    </p>
  </div>
  <div>
        <select class="form-select" aria-label="Default select example">
  <option selected>Seleccionar cantidad</option>
  <option value="1">1</option>
  <option value="2">2</option>
  <option value="3">3</option>
  <option value="4">4</option>
  <option value="5">5</option>
</select>
        </div>
        <br />
        <div><button type="button" class="btn btn-outline-success">Agregar al carrito</button>
        <button type="button" class="btn-close" aria-label="Close"></button>        
        </div>
                </div>
                </div>
            </div>
        </div>
        </>
    )
}
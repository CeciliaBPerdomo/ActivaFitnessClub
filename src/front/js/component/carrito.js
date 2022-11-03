import React from "react";
import { Link } from "react-router-dom";
import "../../styles/carr.css";

export const Carrito = () => {

    return (
      <>
      <div className="bg-carr vh-100">
                <div className="hstack gap-3 p-5" style={{height: "800px"}}>
      <div className="container">
        <br />
      <h1 className="text-light">Carrito de compras</h1>
        <hr />
        <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Agua
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      <div className="card-group">
  <div className="card">
    <img src="https://maxikiosco546.com.uy/wp-content/uploads/2021/05/590089.jpg" className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">Agua Nativa sin Gas</h5>
      <p><strong>Seleccionar Cantidad:</strong></p>
      <div className="form-check form-check-inline">
  <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
  <label className="form-check-label" htmlFor="inlineRadio1">1</label>
</div>
<div className="form-check form-check-inline">
  <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
  <label className="form-check-label" htmlFor="inlineRadio2">2</label>
</div>
<div className="form-check form-check-inline">
  <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3"/>
  <label className="form-check-label" htmlFor="inlineRadio2">3</label>
</div>
<div className="form-check form-check-inline">
  <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio4" value="option4"/>
  <label className="form-check-label" htmlFor="inlineRadio2">4</label>
</div>
<div className="form-check form-check-inline">
  <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio5" value="option5"/>
  <label className="form-check-label" htmlFor="inlineRadio2">5</label>
</div>
<div className="d-grid col-6 mx-auto">
  <button className="btn btn-outline-success mt-3" type="button">Comprar Ahora</button>
</div>
    </div>
  </div>
  <div className="card">
    <img src="https://www.tata.com.uy/arquivos/ids/383914-300-300/Agua-Nativa-Levemente-Gas-1-65-L-1-6148.jpg?v=637907207645400000" className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">Agua Nativa con Gas</h5>
      <p><strong>Seleccionar Cantidad:</strong></p>
      <div className="form-check form-check-inline">
  <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
  <label className="form-check-label" htmlFor="inlineRadio1">1</label>
</div>
<div className="form-check form-check-inline">
  <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
  <label className="form-check-label" htmlFor="inlineRadio2">2</label>
</div>
<div className="form-check form-check-inline">
  <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3"/>
  <label className="form-check-label" htmlFor="inlineRadio2">3</label>
</div>
<div className="form-check form-check-inline">
  <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio4" value="option4"/>
  <label className="form-check-label" htmlFor="inlineRadio2">4</label>
</div>
<div className="form-check form-check-inline">
  <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio5" value="option5"/>
  <label className="form-check-label" htmlFor="inlineRadio2">5</label>
</div>
<div className="d-grid col-6 mx-auto">
  <button className="btn btn-outline-success mt-3" type="button">Comprar Ahora</button>
</div>
    </div>
  </div>
  <div className="card">
    <img src="https://i0.wp.com/www.ararat.com.uy/wp-content/uploads/2022/09/bebida-agua-salus-sin-gas-500-ml.webp?resize=300%2C300&ssl=1" className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">Salus</h5>
      <p><strong>Seleccionar Cantidad:</strong></p>
      <div className="form-check form-check-inline">
  <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
  <label className="form-check-label" htmlFor="inlineRadio1">1</label>
</div>
<div className="form-check form-check-inline">
  <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
  <label className="form-check-label" htmlFor="inlineRadio2">2</label>
</div>
<div className="form-check form-check-inline">
  <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3"/>
  <label className="form-check-label" htmlFor="inlineRadio2">3</label>
</div>
<div className="form-check form-check-inline">
  <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio4" value="option4"/>
  <label className="form-check-label" htmlFor="inlineRadio2">4</label>
</div>
<div className="form-check form-check-inline">
  <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio5" value="option5"/>
  <label className="form-check-label" htmlFor="inlineRadio2">5</label>
</div>
<div className="d-grid col-6 mx-auto">
  <button className="btn btn-outline-success mt-3" type="button">Comprar Ahora</button>
</div>
    </div>
    </div>
  </div>

  <div className="accordion-item">
    <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
        Barrita de Cereales
      </button>
    </h2>
    <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
      <div className="accordion-body">
      <div className="card-group">
  <div className="card">
    <img src="https://maxikiosco546.com.uy/wp-content/uploads/2021/05/1003789-300x300.png" className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">Chocolate</h5>
      <p><strong>Seleccionar Cantidad:</strong></p>
      <div className="form-check form-check-inline">
  <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
  <label className="form-check-label" htmlFor="inlineRadio1">1</label>
</div>
<div className="form-check form-check-inline">
  <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
  <label className="form-check-label" htmlFor="inlineRadio2">2</label>
</div>
<div className="form-check form-check-inline">
  <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3"/>
  <label className="form-check-label" htmlFor="inlineRadio2">3</label>
</div>
<div className="form-check form-check-inline">
  <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio4" value="option4"/>
  <label className="form-check-label" htmlFor="inlineRadio2">4</label>
</div>
<div className="form-check form-check-inline">
  <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio5" value="option5"/>
  <label className="form-check-label" htmlFor="inlineRadio2">5</label>
</div>
<div className="d-grid col-6 mx-auto">
  <button className="btn btn-outline-success mt-3" type="button">Comprar Ahora</button>
</div>
    </div>
  </div>
  <div className="card">
    <img src="https://maxikiosco546.com.uy/wp-content/uploads/2021/05/1012625-300x300.jpg" className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">Frutilla light</h5>
      <p><strong>Seleccionar Cantidad:</strong></p>
      <div className="form-check form-check-inline">
  <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
  <label className="form-check-label" htmlFor="inlineRadio1">1</label>
</div>
<div className="form-check form-check-inline">
  <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
  <label className="form-check-label" htmlFor="inlineRadio2">2</label>
</div>
<div className="form-check form-check-inline">
  <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3"/>
  <label className="form-check-label" htmlFor="inlineRadio2">3</label>
</div>
<div className="form-check form-check-inline">
  <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio4" value="option4"/>
  <label className="form-check-label" htmlFor="inlineRadio2">4</label>
</div>
<div className="form-check form-check-inline">
  <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio5" value="option5"/>
  <label className="form-check-label" htmlFor="inlineRadio2">5</label>
</div>
<div className="d-grid col-6 mx-auto">
  <button className="btn btn-outline-success mt-3" type="button">Comprar Ahora</button>
</div>
    </div>
  </div>
  <div className="card">
    <img src="https://maxikiosco546.com.uy/wp-content/uploads/2021/05/0001941_barra-cereal-mix-yogurt-y-frutilla_550-300x300.jpeg" className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">Frutilla</h5>
      <p><strong>Seleccionar Cantidad:</strong></p>
      <div className="form-check form-check-inline">
  <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
  <label className="form-check-label" htmlFor="inlineRadio1">1</label>
</div>
<div className="form-check form-check-inline">
  <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
  <label className="form-check-label" htmlFor="inlineRadio2">2</label>
</div>
<div className="form-check form-check-inline">
  <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3"/>
  <label className="form-check-label" htmlFor="inlineRadio2">3</label>
</div>
<div className="form-check form-check-inline">
  <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio4" value="option4"/>
  <label className="form-check-label" htmlFor="inlineRadio2">4</label>
</div>
<div className="form-check form-check-inline">
  <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio5" value="option5"/>
  <label className="form-check-label" htmlFor="inlineRadio2">5</label>
</div>
<div className="d-grid col-6 mx-auto">
  <button className="btn btn-outline-success mt-3" type="button">Comprar Ahora</button>
</div>
    </div>
  </div>
</div>
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="panelsStayOpen-headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
        Powerade
      </button>
    </h2>
    <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
    <div className="card-group">
  <div className="card">
    <img src="https://grupberca.com/wp-content/plugins/phastpress/phast.php/c2VydmljZT1pbWFnZXMmc3JjPWh0dHBzJTNBJTJGJTJGZ3J1cGJlcmNhLmNvbSUyRndwLWNvbnRlbnQlMkZ1cGxvYWRzJTJGMjAyMCUyRjExJTJGaWNlLXN0b3JtLTMwMHgzMDAuanBnJmNhY2hlTWFya2VyPTE2Mzc3NjczMjgtMzIxMjcmdG9rZW49NzNiMTFjMmRjNWEyMjE5Mg.q.jpg" className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">Ice Storm</h5>
      <p><strong>Seleccionar Cantidad:</strong></p>
      <div className="form-check form-check-inline">
  <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
  <label className="form-check-label" htmlFor="inlineRadio1">1</label>
</div>
<div className="form-check form-check-inline">
  <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
  <label className="form-check-label" htmlFor="inlineRadio2">2</label>
</div>
<div className="form-check form-check-inline">
  <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3"/>
  <label className="form-check-label" htmlFor="inlineRadio2">3</label>
</div>
<div className="form-check form-check-inline">
  <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio4" value="option4"/>
  <label className="form-check-label" htmlFor="inlineRadio2">4</label>
</div>
<div className="form-check form-check-inline">
  <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio5" value="option5"/>
  <label className="form-check-label" htmlFor="inlineRadio2">5</label>
</div>
<div className="d-grid col-6 mx-auto">
  <button className="btn btn-outline-success mt-3" type="button">Comprar Ahora</button>
</div>
    </div>
  </div>
  <div className="card">
    <img src="https://grupberca.com/wp-content/plugins/phastpress/phast.php/c2VydmljZT1pbWFnZXMmc3JjPWh0dHBzJTNBJTJGJTJGZ3J1cGJlcmNhLmNvbSUyRndwLWNvbnRlbnQlMkZ1cGxvYWRzJTJGMjAyMCUyRjExJTJGY2l0cnVzLWNoYXJnZS0zMDB4MzAwLmpwZyZjYWNoZU1hcmtlcj0xNjM3NzY3MzI4LTMxMTg2JnRva2VuPTkyMThkZDQ1Mzg2MjQ5ZDA.q.jpg" className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">Citrus Charge</h5>
      <p><strong>Seleccionar Cantidad:</strong></p>
      <div className="form-check form-check-inline">
  <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
  <label className="form-check-label" htmlFor="inlineRadio1">1</label>
</div>
<div className="form-check form-check-inline">
  <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
  <label className="form-check-label" htmlFor="inlineRadio2">2</label>
</div>
<div className="form-check form-check-inline">
  <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3"/>
  <label className="form-check-label" htmlFor="inlineRadio2">3</label>
</div>
<div className="form-check form-check-inline">
  <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio4" value="option4"/>
  <label className="form-check-label" htmlFor="inlineRadio2">4</label>
</div>
<div className="form-check form-check-inline">
  <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio5" value="option5"/>
  <label className="form-check-label" htmlFor="inlineRadio2">5</label>
</div>
<div className="d-grid col-6 mx-auto">
  <button className="btn btn-outline-success mt-3" type="button">Comprar Ahora</button>
</div>
    </div>
  </div>
  <div className="card">
    <img src="https://cuantoazucar.com/sites/default/files/fichas/card/6c/g023a6c.png" className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">Isotonica</h5>
      <p><strong>Seleccionar Cantidad:</strong></p>
      <div className="form-check form-check-inline">
  <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
  <label className="form-check-label" htmlFor="inlineRadio1">1</label>
</div>
<div className="form-check form-check-inline">
  <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
  <label className="form-check-label" htmlFor="inlineRadio2">2</label>
</div>
<div className="form-check form-check-inline">
  <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3"/>
  <label className="form-check-label" htmlFor="inlineRadio2">3</label>
</div>
<div className="form-check form-check-inline">
  <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio4" value="option4"/>
  <label className="form-check-label" htmlFor="inlineRadio2">4</label>
</div>
<div className="form-check form-check-inline">
  <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio5" value="option5"/>
  <label className="form-check-label" htmlFor="inlineRadio2">5</label>
</div>
<div className="d-grid col-6 mx-auto">
  <button className="btn btn-outline-success mt-3" type="button">Comprar Ahora</button>
</div>
    </div>
  </div>
  </div>
</div>
    </div>
      </div>
    </div>
  </div>
</div>
</div>
</div>
        </div>
     
      </>
    )
}
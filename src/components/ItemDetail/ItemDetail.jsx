import React from 'react'
import { Link } from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount'


const ItemDetail = ({productos}) => {
    return (
        <div className="container dark-grey-text mt-5">
        <div className="row">
           <div className="col-md-6 mb-4">
             <div className="d-flex align-items-center justify-content-center  p-4">
             <img src={productos.imagok} className="card-img-top" alt="..." />
             </div>
          </div>
          
          <div class="col-md-6 mb-4">
            <div class="p-4">
              <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                  <li class="breadcrumb-item"><a href="/">Inicio</a></li>
                  <li class="breadcrumb-item active" aria-current="page">{productos.title}</li>
                </ol>
              </nav>
              <h1 class="mt-1 h1">{productos.title}</h1>
              <div class="mb-3">
                  <span class="badge bg-primary">{productos.categoria}</span>
              </div>
              <p class="lead fs-2">
                <span>${productos.precio}</span>
              </p>
  
              <p class="lead font-weight-bold">Descripcion</p>
              <p>{productos.desc}</p>
  
              
              <select class="form-select my-3" aria-label="Default select example">
                <option selected="">Horario</option>
                <option value="1">Mañana</option>
                <option value="2">Tarde</option>
                <option value="3">Noche</option>
              </select>
              
              <ItemCount data={{ stock: productos.stock }} />
            </div>
          </div>
        </div> 
        </div>
    )
}

export default ItemDetail
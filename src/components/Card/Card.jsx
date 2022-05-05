import React from 'react'
import Contador from '../Contador/Contador'

function Card({title, imageok, desc}) {
  return (
    <div className="card" style={{width: 18 + 'rem',}}>
    <img src={imageok} className="card-img-top" alt="..." />
    <div className="card-body">
      <h5 className="card-title">{title}</h5>
      <p className="card-text">{desc}</p>
      <Contador />
      <button haref="#!" className="btn btn-success mt-2"> Agregar al carrito </button>
    </div>
  </div>

  )
}

export default Card
import React from 'react'
import Contador from '../Contador/Contador'

const Item = ({productos}) => {
  const {title, imagok, desc} = productos
   return (

    <div className="card" style={{width: 18 + 'rem',}}>
    <img src={imagok} className="card-img-top" alt="..." />
    <div className="card-body">
      <h5 className="card-title">{title}</h5>
      <p className="card-text">{desc}</p>
      <Contador />
      <button haref="#!" className="btn btn-success mt-2"> ver producto </button>
    </div>
  </div>

  )
}

export default Item
import React from 'react'
import { Link } from 'react-router-dom';

const Item = ({productos}) => {
  const {id, desc, imagok, title} = productos
   return (

    <div className="card" style={{width: 18 + 'rem',}}>
    <img src={imagok} className="card-img-top" alt="..." />
    <div className="card-body">
      <h5 className="card-title">{title}</h5>
      <p className="card-text">{desc}</p>
     <Link to={`/ItemDetail/${id}`}><button haref="#!" className="btn btn-success mt-2"> ver producto </button></Link>
    </div>
  </div>

  )
}

export default Item
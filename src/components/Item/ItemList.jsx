import React from 'react'
import Item from '../Item/Item'


const ItemList = ({productos}) => {
  return (
    <div className="container">
    <div className="row text-center justify-content-center gap-3">
    {
        productos.length > 0 ? (productos.map((productos) => (<Item key={productos.id} productos={productos} />) ) )

        : (
          <h1>Cargando...</h1>
        )

        }
   
    </div>
</div>

  )
}

export default ItemList
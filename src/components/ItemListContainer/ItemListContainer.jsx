import React from 'react'

const ItemListContainer = ({greeting}) => {
    return (
        <div className="pricing-header p-3 pb-md-4 mx-auto text-center">
        <h1 className="display-4 fw-normal">{greeting}</h1>
      </div>
    )
  }
  
  export default ItemListContainer
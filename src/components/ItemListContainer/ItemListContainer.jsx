import React, { useState, useEffect } from 'react'
import ItemList from '../Item/ItemList'
import { DaB } from '../DB/DaB'

const ItemListContainer = () => {

    const [productos, setProductos] = useState([])

useEffect(() => {
 const promesa = new Promise((resolve, reject) => {
     setTimeout(() => {
     resolve(DaB)
     }, 2000)
    })
promesa.then((res) => {
setProductos(res)
  })

 return () => {  } }, [])

    return (
        <div>
              {<ItemList productos={productos}/>}

        </div>
    )
}

export default ItemListContainer
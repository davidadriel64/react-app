import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../ItemDetail/ItemDetail'
import { DaB } from '../DB/DaB'

const ItemDetailContainer = () => {

    const { id } = useParams();
    const [productos, setProductos] = useState(null);
    const filtrado = DaB.find((pro) => pro.id === Number(id))


    useEffect(() => {
        const promesa = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(filtrado)
            }, 2000);
        })
        promesa.then((res) => {
            setProductos(res)
        }).catch((err) =>
            console.log(err)
        )
        // return () => {
        // }
    }, [])





    return (

        <div className="container">
    <div className="row  justify-content-center gap-3">
            {productos ? <ItemDetail productos={productos} /> : <h1 className='text-center'>Cargando Seleccionado...</h1>}
            </div>
            </div>


    );

};

export default ItemDetailContainer
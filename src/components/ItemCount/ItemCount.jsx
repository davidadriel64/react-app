import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const ItemCount = ({ data }) => {

    const { stock } = data;

    const [contador, setContador] = useState(1)
    const [stockReal, setStockReal] = useState(stock - contador)
    const [comprar, setComprar] = useState(false)


    function sumar() {
        if (stockReal > 0) {
            setContador(contador + 1)
            setStockReal(stockReal - 1)
        }

    }

    function restar() {

        if (contador > 1) {

            setContador(contador - 1)
            setStockReal(stockReal + 1)
        }
    }

    function onAdd() {
        console.log(`Agregaste ${contador} Curso al carrito  `)
        setComprar(true)
    }

    function volver() {
        setComprar(false)

    }

    return (
        <>
            {comprar ? (
                <>

                    <h5 className="lead "> <i>{contador} Curso seleccionado </i> </h5>
                    <Link to="/cart" className='m-1' > <button className='btn btn-outline-success' onClick={onAdd} > Terminar Compra </button></Link>
                    <button className='btn btn-outline-success m-1' onClick={volver} > Cambiar curso </button>
                </>

            ) :
            <>
            <button className='btn btn-info m-1' onClick={restar} > - </button>
            <label className='btn  m-3'> {contador} </label>
            <button className='btn btn-info m-1' onClick={sumar} > + </button>
            <p className="lead">Cursos Libres : {stockReal}</p>
            <button className='btn btn-success' onClick={onAdd} > Comprar Curso </button>
       </>
            }
        </>
    )
}

export default ItemCount


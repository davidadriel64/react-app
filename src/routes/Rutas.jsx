import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import ItemDetail from '../components/ItemDetail/ItemDetail'
import ItemDetailContainer from '../components/ItemDetailContainer/ItemDetailContainer'

// import ItemListContainer from '../components/ItemListContainer/ItemListContainer'
// import ItemListContainer from '../components/ItemListContainer/ItemListContainer'
import Layout from '../components/Layout/Layout'
import Carrito from '../components/Views/Carrito'
// import Checkout from '../components/Views/Checkout'
import ComoFunciona from '../components/Views/ComoFunciona'
import Error from '../components/Views/Error'
import Filtrados from '../components/Views/Filtrados'
import Home from '../components/Views/Home'


const Rutas = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route Index element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path='/cart' element={<Carrito />} />
                        <Route path='/comofunciona' element={<ComoFunciona />} />
                        <Route path='/ItemDetail/:id' element={<ItemDetailContainer />} />
                        <Route path="*" element={<Error />} />
                        <Route path='/categoria/:categoria' element={<Filtrados />} />
                    </Route>



                </Routes>
            </BrowserRouter>

        </>
    )
}

export default Rutas
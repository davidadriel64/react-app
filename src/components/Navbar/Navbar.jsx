import React from 'react'
import CartWidget from '../CartWidget/CartWidget'

const Navbar = () => {
  return (
    <div className="container">
    <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
        <h1 className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">AltokeRoke</h1>
      <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
        <li><a href="#" className="nav-link px-2 link-secondary">Home</a></li>
        <li><a href="#" className="nav-link px-2 link-dark">Desarrollo</a></li>
        <li><a href="#" className="nav-link px-2 link-dark">Literatura</a></li>
        <li><a href="#" className="nav-link px-2 link-dark">Marketing</a></li>
      </ul>

      <div className="col-md-3 text-end">
        <button type="button" className="btn btn-outline-primary me-2">Ingresar</button>
        <CartWidget />
      </div>
    </header>
  </div>
  )
} 

export default Navbar
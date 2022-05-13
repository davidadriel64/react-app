import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="container">
    <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
        <h1 className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">AltokeRoke</h1>
      <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
        <li><Link to="/"><a href="#" className="nav-link px-2 link-secondary">Home</a></Link></li>
        <li><Link to="/categoria/programacion"><a href="#" className="nav-link px-2 link-dark">Programacion</a></Link></li>
        <li><Link to="/categoria/lectura"><a href="#" className="nav-link px-2 link-dark">Lectura</a></Link></li>
        <li><Link to="/categoria/ventas"><a href="#" className="nav-link px-2 link-dark">Ventas</a></Link></li>
      </ul>

      <div className="col-md-3 text-end">
      <Link to="/cart"><button type="button" className="btn btn-outline-primary me-2">Carrito</button></Link>
        <CartWidget />
      </div>
    </header>
  </div>
  )
} 

export default Navbar
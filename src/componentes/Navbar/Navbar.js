import React from 'react'
import CartWidget from "../CartWidget/CartWidget"
import "./Navbar.css"

function Navbar() {
    return (
        <nav className="agrandarFuente">
            <h1 className="text-center">Tienda Arcadia</h1>
            <ul className="nav justify-content-center navbar-dark bg-dark">

                <li className="nav-item">
                    <a className="nav-link" href="#">Inicio</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Productos</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Sobre Nosotros</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Contacto</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#"><CartWidget/>0</a>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar
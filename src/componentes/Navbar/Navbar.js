import React from 'react'
import "./Navbar.css"

function Navbar() {
    return (
        <nav className="agrandarFuente">
            <ul class="nav justify-content-center navbar-dark bg-dark">
                <li class="nav-item">
                    <a class="nav-link" href="#">Inicio</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Productos</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Sobre Nosotros</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Contacto</a>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar
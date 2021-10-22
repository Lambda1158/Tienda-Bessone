import React from 'react'
import { Link } from 'react-router-dom'
import carritoLogo from "../Images/carritoLogo.png"

const CartWidget = () => {
    return (
        <span>            
            <img width="65px" src={carritoLogo} alt="logoDelCarrito"/>
        </span>
    )
}

export default CartWidget

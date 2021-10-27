import React from 'react'
import carritoLogo from "../Images/carritoLogo.png"

const CartWidget = ({count}) => {

    return (
        <span>           
            <img width="65px" src={carritoLogo} count={count} alt="logoDelCarrito"/>
        </span>
    )
}

export default CartWidget

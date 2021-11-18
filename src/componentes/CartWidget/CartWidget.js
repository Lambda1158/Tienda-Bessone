import React from 'react'
import carritoLogo from "../Images/carritoLogo.png"
import { useCartContext } from '../../context/cartContext'
const CartWidget = () => {
    const {cartList} = useCartContext()
    console.log(cartList.length)
    return (
        <span>           
            <img width="65px" src={carritoLogo}  alt="logoDelCarrito"/><span>{cartList.length}</span>
        </span>
    )
}

export default CartWidget

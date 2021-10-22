import React from 'react'
import {createContext, useState, useContext } from 'react';

const CartContext = createContext([]);
export const useCartContext = () => useContext(CartContext);

function CartContextProvider({children}){
    const [cartList, setCartList] = useState([])

    const agregarItem=(item)=>{
        setCartList([...cartList, item])
    }

    function vaciarCarrito(){
        setCartList([])
    }

    console.log(cartList);    
    return(
        <CartContext.Provider value= {{
            cartList,
            agregarItem,
            vaciarCarrito,
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider

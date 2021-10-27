import React from 'react'
import {createContext, useState, useContext } from 'react';

const CartContext = createContext([]);
export const useCartContext = () => useContext(CartContext);

function CartContextProvider({children}){
    const [cartList, setCartList] = useState([])

    const agregarItem=(newItem, newQuantity, mostrar, setMostrar)=>{
        const evitarDuplicado = cartList.find((e) => e.item.id === newItem.id);
        let newCart;
        let qty;
        if(evitarDuplicado) {
            newCart = cartList.filter((e) => e.item.id !== newItem.id);
            qty = evitarDuplicado.quantity + newQuantity
        } else {
            newCart = [...cartList];
            qty = newQuantity
        }
        setCartList ([...newCart, {item: newItem, quantity:qty}]);
        setMostrar(!mostrar);
        };
        console.log(cartList);

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
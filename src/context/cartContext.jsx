import React from 'react'
import {createContext, useState, useContext } from 'react';
import { getFirestore } from '../data/getFirebase.js';
import firebase from "firebase"
import 'firebase/firestore'

const CartContext = createContext([]);
export const useCartContext = () => useContext(CartContext);

function CartContextProvider({children}){
    const [cartList, setCartList] = useState([])

    const agregarItem=(newItem, newQuantity, mostrar, setMostrar)=>{
        const evitarDuplicado = cartList.find((item) => item.item.id === newItem.id);
        let newCart;
        let qty;
        if(evitarDuplicado) {
            newCart = cartList.filter((item) => item.item.id !== newItem.id);
            qty = evitarDuplicado.quantity + newQuantity
        } else {
            newCart = [...cartList];
            qty = newQuantity
        }
        setCartList ([...newCart, {item: newItem, quantity:qty}]);
        setMostrar(!mostrar);
        };

    const removerItem = (itemId) =>{
        let filtrarCarrito = cartList.filter((item) => item.item.id !== itemId);
            setCartList(filtrarCarrito);
        };

    function vaciarCarrito(){
        setCartList([])
    }

    const crearOrdenDePedido = (orden) =>{

        let precioTotal = 0
        let items = []

        const user = {
            name: 'Ernesto Bessone',
            phone: 3413605555,
            email: 'ejubessone@hotmail.com'
        }

        const itemEnLaOrden = (orden) => {
            cartList.map(item => items.push({
                id: item.item.id,
                name: item.item.nombre,
                price: item.item.precio,
            }))
            return items
        }

        const precio = () => {cartList.map(item => {
            precioTotal += item.item.precio * item.cantidad
            return precioTotal
        })}

        const db = getFirestore();
        const dbOrders = db.collection('ordenes');
        precio()
        
        dbOrders.add({
            comprador: user,
            item: itemEnLaOrden(orden),
            fecha: firebase.firestore.Timestamp.fromDate(new Date()),
            total: precioTotal
        })
        .then( res => alert(`Su orden de compra es: ${res.id}`))
        .catch(err => console.log(err))

        setCartList()
    }
    
    console.log(cartList);    
    return(
        <CartContext.Provider value= {{
            cartList,
            agregarItem,
            removerItem,
            vaciarCarrito,
            crearOrdenDePedido,
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider
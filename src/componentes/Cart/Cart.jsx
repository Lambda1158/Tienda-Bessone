import React from 'react'
import { useCartContext } from '../../context/cartContext'

const Cart = () => {
    const {cartList, vaciarCarrito} = useCartContext()
    return (
        <div className="text-center">
        <h1>HOLA, BIENVENIDOS</h1>
        
            {cartList.map(item => 
            <div key={item.item.id}>
                <table className="table">

                </table>
                <h2>{item.item.nombre}</h2>
            </div>)}

            <button className="btn btn-warning botones" onClick={()=>vaciarCarrito()}>Vaciar Bolsita</button>
        </div>
    );
};

export default Cart
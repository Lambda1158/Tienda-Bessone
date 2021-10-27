import React from 'react'
import { useCartContext } from '../../context/cartContext'
import { Link } from 'react-router-dom'

const Cart = () => {
    const {cartList, vaciarCarrito} = useCartContext()
    console.log(cartList);
    let i = 0
    return (
        <div className="text-center">
        <h1>Carrito</h1>
        <table className="table">
            <thead>
            <tr>
                <th className="m-2">Nombre</th>
                <th className="m-2">Cantidad</th>
                <th className="m-2">Precio unitario</th>
            </tr>
            </thead>

                {cartList.map(item =>                
                <tbody key={item.item.id}>
                
                <tr>
                    <td className="m-1"><h3>{item.item.nombre}</h3></td>
                    <td className="m-1"><h3>{cartList[i].quantity}</h3></td>
                    <td className="m-1"><h3>${item.item.precio}</h3></td>   
                    </tr>
                </tbody>)}                
        </table>        
                <button className="btn btn-warning botones" onClick={()=>vaciarCarrito()}>Vaciar Bolsita</button>        
        </div>
    );
                };

export default Cart
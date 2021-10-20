import React, { useEffect, useState } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { ListaDeProductos } from '../../data/data';

const ItemDetailContainer = ({nombre}) => {  
    
    let  productoEncontrado = {};
  const [productos, setProductos] = useState([]);
  
  const getProductos = new Promise((resolve, reject) => {
        resolve(ListaDeProductos);
});  

useEffect(() =>{
    getProductos.then(res => setProductos(res));    
}, [productos]);

    productoEncontrado = productos.find( item => item.nombre === nombre );
    
    return (
        <div className="container text-center">
            {productoEncontrado && <ItemDetail item={productoEncontrado}/>} 
        </div>
    );
};

export default ItemDetailContainer
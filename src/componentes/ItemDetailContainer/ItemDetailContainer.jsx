import React, { useEffect, useState } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { getFirestore } from '../../data/getFirebase';

const ItemDetailContainer = ({nombre}) => {  
    
    let  productoEncontrado = {};
  const [productos, setProductos] = useState([]);
  
 // const getProductos = new Promise((resolve, reject) => {
 //       resolve(ListaDeProductos);
 // });  

useEffect(() =>{
    const db = getFirestore()
    db.collection('productos').get()
    .then(resp => setProductos(resp.docs.map( item => ({nombre: item.nombre, ...item.data()}))))
}, [productos]);
//     getProductos.then(res => setProductos(res));    
// }, [productos]);

    productoEncontrado = productos.find( item => item.nombre === nombre );

    return (
        <div className="container text-center">
           {productoEncontrado && <ItemDetail item={productoEncontrado}/>}
        </div>
    );
};

export default ItemDetailContainer
import React, { useEffect, useState } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { getProductoById } from '../../Helper/getFunction';

const ItemDetailContainer = ({id}) => {
    const [producto, setProducto] = useState(null);

    useEffect(() => {
        getProductoById(id, setProducto);
        console.log(producto);
    }, []);
    
    return (
        <div className="container text-center">
            {producto ? <ItemDetail item={producto}/> : <p>CARGANDO</p>}         
        </div>
    );
};

export default ItemDetailContainer

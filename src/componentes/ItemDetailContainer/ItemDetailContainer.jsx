import React, { useEffect, useState } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { getProductoById } from '../../Helper/getFunction';

const ItemDetailContainer = ({id}) => {    
    
    return (
        <div className="container text-center">
            <ItemDetail id={id}/>
        </div>
    );
};

export default ItemDetailContainer

import React from 'react'
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({item}) => {
    const onAdd = (clicks) => {
        alert(`Agregaste ${clicks} ${item.nombre} al carrito al carrito`);
    };

    return (
            <div className="card" style={{width:"18rem"}}>
              <img src={item.imagen} className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">{item.nombre}</h5>
                <p className="card-text">${item.precio}</p>
                <p className="card-text">{item.descripcion}</p>                
              </div>
              <ul className="list-group list-group-flush">
                  <ItemCount stock={item.stock} onAdd={onAdd} initial={1}/>
              </ul>
            </div>
    );
};

export default ItemDetail;

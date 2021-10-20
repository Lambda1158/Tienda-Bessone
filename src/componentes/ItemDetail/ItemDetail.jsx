import React from 'react'
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({item}) => {
  const onAdd = (clicks) => {
    alert(`Agregaste ${clicks} ${item.nombre} al carrito al carrito`);
};

    return (
      <div className="card text-center d-flex" style={{width:"18rem"}}>                    
          <img className="card-img-top" src={item.imagen} alt="producto"/>
            <div className="card-body">
              <h5 className="card-title">{item.nombre}</h5>
              <p className="card-text">${item.precio}</p>
              <p className="card-text">{item.descripcion}</p>              
              <ItemCount stock={item.stock} onAdd={onAdd} initial={1}/>
            </div>                    
      </div> 
    );
};
export default ItemDetail;
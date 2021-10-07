import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import "./Item.css"


const Item = ({id, nombre, precio, stock, imagen}) => {
    const onAdd = (clicks) => {
        alert(`Agregaste ${clicks} ${nombre} al carrito al carrito`);
    };
    
    return (   
        <div className="container col-lg-3">             
            <div className="card text-center">                    
                <img className="card-img-top" src={imagen} alt="producto"/>
                <div className="card-body">
                    <h5 className="card-title">{nombre}</h5>
                    <p className="card-text">${precio}</p>
                    <ItemCount stock={stock} onAdd={onAdd} initial={1}/>
                </div>                    
            </div>
        </div>                         
        
    );
};

export default Item
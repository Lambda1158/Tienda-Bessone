import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import "./Item.css"
import {Link} from 'react-router-dom';


const Item = ({id, nombre, precio, stock, imagen}) => {
    const onAdd = (clicks) => {
        alert(`Agregaste ${clicks} ${nombre} al carrito al carrito`);
    };
    
    return (      
            <div className="card text-center" style={{width:"18rem"}}>                    
                <img className="card-img-top" src={imagen} alt="producto"/>
                <div className="card-body">
                    <Link to={`/productos/${nombre}`}>
                    <h5 className="card-title">{nombre}</h5>
                    </Link>
                    <p className="card-text">${precio}</p>
                    <ItemCount stock={stock} onAdd={onAdd} initial={1}/>
                </div>                    
            </div>   
    );
};

export default Item
import React, {useState} from 'react'

const ItemCount = ({stock, initial, onAdd}) => {
//*
    //*const [clicks, setClicks] = useState(1)
//*
    //*console.log(stock)
//*
    //*const addClick = () => {
    //*    if (clicks < stock) setClicks (clicks+1)
    //*}
//*
    //*const removeClick = () => {
    //*    if(clicks > 1) setClicks (clicks-1)
    //*}
//*

    const [clicks, setClicks] = useState(initial);

    const addClick = (numero) => {
        setClicks(clicks + numero);
    };    

    return (        
        <div>
            <div>
                <button className="btn btn-success m-1" onClick={()=>addClick(+1)} disabled={clicks === stock ? true : null}>+</button>
                <h3>{clicks}</h3>
                <button className="btn btn-danger m-2" onClick={()=>addClick(-1)} disabled={clicks === initial ? true : null}>-</button>
            </div>                
                <button className="btn btn-primary" onClick={()=>onAdd(clicks)} disabled={stock === 0 ? true : null}>Agregar al carrito</button>
        </div>
    );
};

export default ItemCount

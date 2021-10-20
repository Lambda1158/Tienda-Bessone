import React, {useState} from 'react'

const ItemCount = ({stock, initial, onAdd}) => {

    const [clicks, setClicks] = useState(initial);

    const addClick = (numero) => {
        setClicks(clicks + numero);
    };

    const [show, setShow] = useState (true);

    return (        
        <div>
            <div>
                <button className="btn btn-success m-1" onClick={()=>addClick(+1)} disabled={clicks === stock ? true : null}>+</button>
                <h3>{clicks}</h3>
                <button className="btn btn-danger m-2" onClick={()=>addClick(-1)} disabled={clicks === initial ? true : null}>-</button>
            </div> 

                {show?
                <div>              
                <button className="btn btn-primary" onClick={()=>onAdd(clicks)} disabled={stock === 0 ? true : null}>Agregar al carrito</button>
                </div>
                :null}
        </div>
    );
};

export default ItemCount

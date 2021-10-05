import React, {useState} from 'react'

const ItemCount = ({titulo, texto, imagen, precio, stock}) => {

    const onAdd = () => {
        console.log();
    };

    const [clicks, setClicks] = useState(1)

    console.log(stock)

    const addClick = () => {
        if (clicks < stock) setClicks (clicks+1)
    }

    const removeClick = () => {
        if(clicks > 1) setClicks (clicks-1)
    }

    return (            
            <div className="row text-center">
                <div className="col-2">
                    <div className="card">
                    <img className="card-img-top" src={imagen} alt="producto"/>
                    <div className="card-body">
                        <h5 className="card-title">{titulo}</h5>
                        <h4 className="card-text">{texto}</h4>
                        <p className="card-text">${precio}</p>
                            <h1>{clicks}</h1>
                        <div>                      
                        <button className="btn btn-success m-1" onClick={()=>addClick()}>Agregar</button>
                        <button className="btn btn-danger m-2" onClick={()=>removeClick()}>Restar</button>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
    )
}

export default ItemCount

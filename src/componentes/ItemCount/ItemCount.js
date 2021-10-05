import React from 'react'

const ItemCount = ({titulo, texto, imagen}) => {
    return (   
        <div>            
            <div className="row">
                <div className="col-sm-2">
                    <div className="card">
                    <img className="card-img-top" src={imagen} alt="producto"/>
                    <div className="card-body">
                        <h5 className="card-title">{titulo}</h5>
                        <p className="card-text">{texto}</p>
                        <button className="btn btn-primary">Agregar</button>
                        <button className="btn btn-primary">Restar</button>
                    </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ItemCount

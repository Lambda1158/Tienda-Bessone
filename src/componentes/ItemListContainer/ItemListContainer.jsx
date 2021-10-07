import React from 'react'
import "./ItemListContainer.css"
import ItemList from '../ItemList/ItemList'

const ItemListContainer = ( {greetings} ) => {
    return (
        <div className="container fondoContainer">
            <h2 className="text-center"> {greetings} Nuestras Pociones! </h2>            
            <div>
            <ItemList/>
            </div>
        </div>
    )
}

export default ItemListContainer

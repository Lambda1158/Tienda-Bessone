import React from 'react'
import ItemCount from '../ItemCount/ItemCount'


const ItemListContainer = ( {greetings} ) => {
    return (
        <div className="container p-3">
            <h2 className="text-center "> {greetings} Nuestro catalogo </h2>
            
            <ItemCount
                titulo="Hung Jury SR4"
                texto="Scout Rifle"
                imagen="https://www.bungie.net/common/destiny2_content/icons/c2ced53f1b325731e716d0005aacf67f.jpg"
            />

            <ItemCount
                titulo="Shadow Price"
                texto="Auto rifle"
                imagen="https://www.bungie.net/common/destiny2_content/icons/58cc36868753929c8b2e526d14a9cd30.jpg"
            />
        </div>
    )
}

export default ItemListContainer

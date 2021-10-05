import React from 'react'
import ItemCount from '../ItemCount/ItemCount'


const ItemListContainer = ( {greetings} ) => {
    return (
        <div className="container">
            <h2 className="text-center "> {greetings} Nuestro catalogo </h2>
            
            <div>
            <ItemCount
                titulo="Hung Jury SR4"
                texto="Scout Rifle"
                precio={750}
                imagen="https://www.bungie.net/common/destiny2_content/icons/c2ced53f1b325731e716d0005aacf67f.jpg"
                stock={4}
            />

            <ItemCount
                titulo="Shadow Price"
                texto="Auto rifle"
                precio={500}
                imagen="https://www.bungie.net/common/destiny2_content/icons/58cc36868753929c8b2e526d14a9cd30.jpg"
                stock={8}
            />
            </div>
        </div>
    )
}

export default ItemListContainer

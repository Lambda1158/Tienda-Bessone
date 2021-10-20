import React from 'react'
import { useParams } from 'react-router'
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';

const DetailPage = () => {
    let {nombre} = useParams();

    return (
        <div>
            <ItemDetailContainer nombre={nombre}/>
            <hr/>
        </div>
    )
}

export default DetailPage;
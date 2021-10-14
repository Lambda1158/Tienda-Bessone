import React from 'react'
import { useParams } from 'react-router'
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';

const DetailPage = () => {
    let {id} = useParams();

    return (
        <div>
            <ItemDetailContainer id={id}/>
            <hr/>
        </div>
    )
}

export default DetailPage;

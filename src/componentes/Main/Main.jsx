import React from 'react';
import Navbar from "../Navbar/Navbar"
import Footer from "../Footer/Footer"
import ItemListContainer from "../ItemListContainer/ItemListContainer"
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';

const Main = () =>  {
    return(
        <main>
        <Navbar/>
        <ItemListContainer/>
        <hr />
        <ItemDetailContainer id={2}/>
        <Footer/>
        </main>
    )
}

export default Main
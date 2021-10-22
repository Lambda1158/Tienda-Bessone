import React from 'react'
import { useEffect, useState } from 'react'
import { ListaDeProductos } from '../../data/data.js'
import Item from '../Item/Item';

const ItemList = () => {

    const [productos, setProductos] = useState([]);

    const getProductos = new Promise((resolve, reject) => {
        setTimeout(() =>{
            resolve(ListaDeProductos);
        }, 500);
    });

    const getProductsFromDB = async () => {
        try{
            const result = await getProductos;
            setProductos(result);
        } catch (error) {
            alert("Algo fallo, intentelo de nuevo");
        }
    };

    useEffect(() =>{
        getProductsFromDB();
    }, []);

    return (
        <div>
            {
            productos.length ? (
                <>
                {
                    productos.map((producto) => {
                        return (
                            <div key={producto.id}>
                                <Item     
                                    id={producto.id}                           
                                    nombre={producto.nombre}
                                    precio={producto.precio}
                                    stock={producto.stock}
                                    imagen={producto.imagen}
                                />
                            </div>
                        );
                    })
                }
                </>            
        ) : (
            <p className="text-center">Revolviendo el inventario...</p>
        )
        }
        </div>
    );
};

export default ItemList

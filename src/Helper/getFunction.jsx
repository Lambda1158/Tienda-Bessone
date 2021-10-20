import { ListaDeProductos } from "../data/data";

    const getProductos = new Promise((resolve, reject) => {
        setTimeout(() =>{
            resolve(ListaDeProductos);
        }, 2000);
    });

const getById = (id, array) => array.find((el) => el.id === id);

const getProductoById = async (id, setState) => {
    try {
        const result = await getProductos;
        setState(getById(id, result)); 
    } catch (error) {
        console.log(error);
        alert("Vaya, tenemos un problemon!");
    }
};

export {getProductoById};
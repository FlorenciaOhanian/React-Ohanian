import { useState, useEffect } from 'react'
import { getProductos } from '../../asyncmonk'
import ItemList from '../ItemList/ItemList'

const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        const pedirDatos = async () => {
            const stock = await getProductos();
            setProductos(stock);
        }
        pedirDatos();
    }, [])

    return (
        <div>
            <h2>Crudo Tienda de SAbores</h2>
            <ItemList productos={productos} />
        </div>
    )
}

export default ItemListContainer
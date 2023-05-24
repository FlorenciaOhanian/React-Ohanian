import { useState, useEffect } from 'react'
import { getProductos, getPorCategoria } from '../../asyncmonk'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'


const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);
    const { idCat } = useParams();

    useEffect(() => {
const funcionProductos = idCat ? getPorCategoria : getProductos;

funcionProductos(idCat)
.then (res => setProductos(res))
.catch(error => console.error (error))
}, [idCat])

    return (
        <div>
            <h2>Crudo Tienda de Sabores</h2>
            <ItemList productos={productos} />
        </div>
    )
}

export default ItemListContainer
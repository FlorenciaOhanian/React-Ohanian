import { useState, useEffect } from 'react'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { collection, getDocs, where, query } from 'firebase/firestore';
import { db } from '../../services/config';


const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);
    const { idCat } = useParams();

    useEffect(() => {
        const misProductos = idCat ? query(collection(db, "productos"), where("idCat", "==", idCat)) : collection(db, "productos")

        getDocs(misProductos)
            .then(res => {
                const nuevosProductos = res.docs.map(doc => {
                    const data = doc.data()
                    return {id: doc.id, ...data }
                })
                setProductos(nuevosProductos)
                    .catch(error => console.log(error))
            })
            }, [idCat])

    return (
        <div>
            <h2>Crudo Tienda de Sabores</h2>
            <ItemList productos={productos} />
        </div>
    )
}

export default ItemListContainer

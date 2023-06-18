import ItemCount from '../ItemCount/ItemCount'
import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import './ItemDetail.css'
import { CarritoContext } from '../../context/CarritoContext'


const ItemDetail = ({ id, nombre, precio, img, stock, descripcion }) => {
    const [agregarCantidad, setAgregarCantidad] = useState(0);

    const { agregarProducto } = useContext(CarritoContext);

    const manejadorCantidad = (cantidad) => {
        setAgregarCantidad(cantidad);

        const item = { id, nombre, precio };

        agregarProducto(item, cantidad);

    }

    return (
        <div className='contenedorItem'>
            <h3>{nombre} </h3>
            <h4>Precio: {precio} </h4>
            <p>{descripcion}</p>
            <img className='imgProducto' src={img} alt={nombre} />
            {
                agregarCantidad > 0 ? (<Link to="/cart"> Terminar Compra </Link>) : (<ItemCount inicial={1} stock={stock} funcionAgregar={manejadorCantidad} />)
            }
        </div>
    )
}

export default ItemDetail
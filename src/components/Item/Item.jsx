import './Item.css'
import {Link} from 'react-router-dom';

const Item = ({img, nombre, variedades, id, precio}) => {

    return (
        <div className='cardProducto'>
            <img className="imgProducto" src={img} alt={nombre} />
            <h3>{nombre}</h3>
            <p>Precio: {precio} </p>
            <p> Id: {id}</p>
            <h4>Encontraras {variedades}</h4>
            <Link className='btndetail' to={`/item/${id}`}>Ver Detalles</Link>
        </div>
    )
}

export default Item
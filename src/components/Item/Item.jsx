import './Item.css'
import {Link} from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';
const Item = ({img, nombre, id, precio, stock}) => {

    return (
        // <div className='cardProducto'>
        //     <img className="imgProducto" src={img} alt={nombre} />
        //     <h3>{nombre}</h3>
        //     <p>Precio: {precio} </p>
        //     <p> Id: {id}</p>
        //     <p> Stock: {stock}</p>
        //     <Link className='btndetail' to={`/item/${id}`}>Ver Detalles</Link>

        // </div>
            <ItemDetail id={id} nombre={nombre} precio={precio} img={img} stock={stock}/> 
        
    )
}

export default Item
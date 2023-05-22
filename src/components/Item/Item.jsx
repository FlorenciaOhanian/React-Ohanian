import './Item.css'

const Item = ({img, nombre, precio, tamaño, id}) => {

    return (
        <div className='cardProducto'>
            <img className="imgProducto" src={img} alt={nombre} />
            <h3>Producto: {nombre}</h3>
            <p>Precio: {precio}</p>
            <p>Tamaño: {tamaño}</p>
            {/* <p>ID: {id}</p> */}
            <button className='btnProducto'>Ver Detalles</button>
        </div>
    )
}

export default Item
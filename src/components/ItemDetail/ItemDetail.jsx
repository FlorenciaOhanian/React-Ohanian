
const ItemDetail = ({ id, nombre, precio, img }) => {
        return (
        <div className='contenedorItem cardProducto'>
            <h2>Nombre: {nombre} </h2>
            <h3>Precio: {precio} </h3>
            <h3>ID: {id} </h3>
            <img className="imgProducto" src={img} alt={nombre} />
        </div>
    )
}

export default ItemDetail
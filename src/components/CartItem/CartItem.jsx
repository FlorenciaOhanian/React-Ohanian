import { useContext } from "react"
import { CarritoContext } from "../../context/CarritoContext"

const CartItem = ({ item, cantidad }) => {
    const { eliminarProducto } = useContext(CarritoContext);
    return (
        <div className="cartItemContainer">
            <div>
                <h3> {item.nombre} </h3>
                <p>Cantidad: {cantidad} </p>
                <p>Precio: {item.precio} </p>
            </div>

            <div>
                <button className="btnCart" onClick={() => eliminarProducto(item.id)}> Eliminar {item.nombre} </button>
            </div>
        </div>

    )
}

export default CartItem
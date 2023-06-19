import { useContext } from "react"
import { CarritoContext } from "../../context/CarritoContext"
import { Link } from "react-router-dom"
import CartItem from "../CartItem/CartItem"
import "./Cart.css"


const Cart = () => {
    const { carrito, vaciarCarrito, total, cantidadTotal } = useContext(CarritoContext);

    if (cantidadTotal === 0) {
        return (
            <>
                <h2> Carrito vacio</h2>
                <Link className="btnCart" to='/'> Ver Productos </Link>
            </>
        )
    }
    return (
        <div className="containerCompra">
            <h2>Tu compra:</h2>
            {carrito.map(producto => <CartItem key={producto.id} {...producto} />)}
            <h4>Cantidad de productos: {cantidadTotal} </h4>
            <h3>Total: ${total} </h3>
            <button className="btnCart" onClick={() => vaciarCarrito()}> Vaciar carrito </button>
            <Link className="btnCart" to='/checkout'> Finalizar Compra </Link>
        </div>
    )
}

export default Cart
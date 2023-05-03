import React from 'react'


const CartWidget = () => {
const imgCarrito = "https://cdn-icons-png.flaticon.com/512/107/107831.png"

    return (
    <div>
        <img src={imgCarrito} alt="Carrito de compras"/>
        <strong> 4 </strong>
    </div>
    )
}

export default CartWidget
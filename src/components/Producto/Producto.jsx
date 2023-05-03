import React from 'react'

const Producto = ({nombre, tamaño, precio}) => {
    return (
        <div>
            <h2>Nuestros Productos</h2>
            <p>Nombre: {nombre} </p>
            <p>Tamaño: {tamaño}</p>
            <p>Precio: {precio}</p>
            <button>Agregar al carrito</button>
        </div>
    )
}

export default Producto
import React from 'react'
import { useState } from 'react'
import "./ItemCount.css"

const ItemCount = ({ inicial, stock, funcionAgregar, setFinCompra }) => {
    const [contador, setContador] = useState(inicial);

    const incrementar = () => {
        if (contador < stock) {
            setContador(contador + 1);
        }
    }

    const decrementar = () => {
        if (contador > inicial) {
            setContador(contador - 1);
        }
    }

    return (
        <>
            <div className='btnCount'>
                <button onClick={decrementar}> - </button>
                <p> {contador} </p>
                <button onClick={incrementar}> + </button>
            </div>
            <button onClick={() => funcionAgregar(contador)}> Agregar al Carrito </button>
            <button onClick={() => setFinCompra(true) }>Finalizar Compra</button>
        </>
    )
}

export default ItemCount
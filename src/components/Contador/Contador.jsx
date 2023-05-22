import { useState, useEffect } from "react";

export const Contador = ({stock, inicial}) => {
    const [contador, setContador] = useState (inicial);

const agregarAlCarrito = () => {
    console.log(`Agregaste ${contador} item/s`);
}

    const sumar = () => {
        if (contador < stock) {
            setContador (contador + 1);
        }
    }

    const restar = () => {
        if (contador > inicial){
            setContador (contador - 1);
        }
    }
    
return (
    <div>
        <button onClick={sumar}> + </button>
        <strong>{contador}</strong>
        <button onClick={restar}> - </button>
        <button onClick={agregarAlCarrito}> Agregar al carrito </button>
    </div>
)
}
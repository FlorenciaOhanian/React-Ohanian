import { useState, useEffect } from "react";
import { collection, query, getDocs, where, doc, updateDoc } from "firebase/firestore";
import { db } from "../../services/config";
import './Productos.css';

const Productos = () => {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        const misProductos = query(collection(db, "productos"));
                getDocs(misProductos)
            .then(respuesta => {
                setProductos(respuesta.docs.map((doc) => ({ id: doc.id, ...doc.data()})));
            })
    }, [])

    const descontarStock = async (producto) => {
        const productoRef = doc (db, "productos", producto.id);
        let nuevoStock = producto.stock -1;
        await updateDoc(productoRef, {stock: nuevoStock});
    }

    return (
        <>
            <h2>Nuestros productos</h2>
            <div className="container-productos">
            {
            productos.map((producto) => (
                <div className="card-producto" key={producto.id}>
                    <h3>Nombre: {producto.nombre} </h3>
                    <p>Precio: {producto.precio} </p>
                    <p>Stock:  {producto.stock} </p>
                    <button onClick={()=> descontarStock (producto)}> Comprar </button>
                    <img className="imgProducto" src={producto.img} alt= "nombre" />
                </div>
                ))
            }
            </div>
        </>
    )
}

export default Productos 
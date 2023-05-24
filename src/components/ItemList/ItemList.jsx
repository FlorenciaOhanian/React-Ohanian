import Item from "../Item/Item";
import "./ItemList.css";


const ItemList = ({productos}) => {
    console.log('productos en ITEMLIST: ', productos)
    return (
        <div className="contenedorProductos">
            {productos.map(prod => <Item key={prod.id} {...prod}/>)}
        </div>
    )
}

export default ItemList
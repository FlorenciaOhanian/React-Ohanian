import ItemDetail from '../ItemDetail/ItemDetail';
const Item = ({img, nombre, id, precio, stock}) => {

    return (
            <ItemDetail id={id} nombre={nombre} precio={precio} img={img} stock={stock}/> 
        
    )
}

export default Item
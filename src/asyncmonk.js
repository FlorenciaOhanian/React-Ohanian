
const productos = [
    {nombre: "Pastas", variedades: "8 opciones", id: "1", idCat: "1", img:"../img/lasagna.jpg", precio:'sin precio'},
    {nombre: "Tartas", variedades: "10 opciones",id: "2", idCat: "2", img: "../img/tarta.jpeg", precio:'sin precio'},
    {nombre: "Tablas de fiambres y quesos",variedades: "4 opciones",id: "3", idCat: "3", img: "../img/Tabla.jpeg", precio:'sin precio'},
    {nombre: "Pizzas y empanadas",variedades: "15 opciones",id: "4", idCat: "4", img: "../img/pizza.jpg", precio:'sin precio'},
]

export const getProductos = () => {
    return new Promise ((resolve) => {
        setTimeout (() => {
            resolve(productos)
        }, 2000)
    })
}

export const getUnProducto = (id) => {
    return new Promise(resolve => {
        setTimeout(() =>{
            const producto = productos.find(prod => prod.id === id);
            resolve(producto);
        }, 2000)
    })
}
export const getPorCategoria = (idCat) => {
return new Promise(resolve => {
    setTimeout(() => {
        const productosCategoria = productos.filter(prod => prod.idCat=== idCat)
        resolve (productosCategoria);
    },2000)
})
}

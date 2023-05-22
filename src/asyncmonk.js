
const productos = [
    {nombre: "Canelones", tamaño: "6 unidades",precio: 1500, id: 1, img:"./img/canelones.jpg"},
    {nombre: "Ñoquis", tamaño: "1 kg.",precio: 1700, id: 2, img: "./img/ñoquis.jpg"},
    {nombre: "Sorrentinos de jamon y queso",tamaño: "20 unidades" , precio: 2000, id: 3, img: "./img/Sorrentinos.jpeg"},
    {nombre: "Raviolones de colita de cuadril",tamaño: "20 unidades", precio: 1800, id: 4, img: "./img/ravioles.jpg"},
    {nombre: "Tabla de fiambres y quesos premium" , tamaño: "Para 4 personas",precio: 2500, id: 5, img: "./img/Tabla.jpeg"},
]

export const getProductos = () => {
    return new Promise ((resolve) => {
        setTimeout ( () => {
            resolve(productos)
        }, 2000)
    })
}

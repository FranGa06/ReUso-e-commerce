let stockProductos = [
    { id: 1, nombre: "Short de jeans", tipo: "short", desc: "Short de jeans celeste, marca Desiderata.", precio: 6100, talle: "M"},
    { id: 2, nombre: "Pantalon palazo", tipo: "pantalon", desc: "Pantalón palazo negro, maraca Portsaid", precio: 9200 , talle: "L"},
    { id: 3, nombre: "Mochila azul", tipo: "mochila", desc: "Mochila azul eco cuero con bolsillos marca XL", precio: 8500, talle: "M" },
    { id: 4, nombre: "Cartera Juanita Jo", tipo: "cartera", desc: "Cartera negra con detalles dorados, marca Juanita Jo", precio: 8900, talle: "M"},
    { id: 5, nombre: "Botas taco aguja", tipo: "botas", desc: "Botas taco aguja color negro, maraca Lady Stork", precio: 10299, talle: "38"},
    { id: 6, nombre: "Mesa de luz vintage", tipo: "mesa", desc: "Mesa de luz vintage, de pino con 3 cajones", precio: 6199},
    { id: 7, nombre: "Placard de melamina", tipo: "placard", desc: "Placard de melamina 240 x 180 con puertas corredizas y 4 cajoneras", precio: 90499 },
    { id: 8, nombre: "Rack de tv", tipo: "rack", desc: "Rack de tv, estructura de hierro y madera.", precio: 29499},
    { id: 9, nombre: "Sofá esquinero", tipo: "sofa", desc: "Sofá esquinero de 2 cuerpos, material ecocuero color beige.", precio: 110499},
]


let carrito = []

let contenedor = document.getElementById('contenedorProductos')

for (const productos of stockProductos) {

    let div = document.createElement('div')
    div.setAttribute('data-price', '10')
    div.className = 'product'
    div.innerHTML = `<h3>${productos.nombre}</h3>
                    <img src=${productos.img} alt="">
                    <p>${productos.desc}</p>
                    <p> $${productos.precio}</p>
                    <button class="add-to-cart-btn" id="${productos.id}">Agregar</button>`

    contenedor.appendChild(div)
}

let boton = document.querySelectorAll('.add-to-cart-btn')

let listaCarrito = document.getElementById('listaProductos')

for (const btn of boton) {
    btn.addEventListener('click'), () => {

        let producto = stockProductos.find(prod => prod.id == btn.id)
        carrito.push(producto)
        let li = document.createElement('li')
        li.id = producto.id
        li.innerHTML = `${producto.nombre} - $${producto.precio} <i class='bx bxs-trash' id="eliminar${producto.id}"></i>`
        listaCarrito.appendChild(li)
        total()

        let btnEliminar = document.getElementById(`eliminar${producto.id}`)

        btnEliminar.addEventListener('click', () => {
            carrito = carrito.filter(prod => prod.id != producto.id)
            console.log(carrito);

            btnEliminar.parentElement.remove()

            total()
        
        })
    }
}
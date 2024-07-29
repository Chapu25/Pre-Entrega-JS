// Clase Producto


class Producto {
    constructor(id, nombre, precio) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
    }
}


// Array de productos 

let productos = [
    { 
        id: 1, 
        nombre: 'Remeras',
        precio: 2500 
    },
    { 
        id: 2, 
        nombre: 'Pantalones', 
        precio: 5000 
    },
    { 
        id: 3, 
        nombre: 'Zapatos', 
        precio: 20000
    },
    { 
        id: 4, 
        nombre: 'Busos', 
        precio:  9000
    },
    { 
        id: 5, 
        nombre: 'Camperas', 
        precio: 8000 
    }
];


// Array del carrito de compras

let carrito = [];



// Función para agregar productos al array de productos

const agregarProducto = () => {

    const id = productos.length + 1;
    const nombre = prompt("Ingrese el nombre del producto:");
    const precio = parseFloat(prompt("Ingrese el precio del producto:"));
    const nuevoProducto = new Producto(id, nombre, precio);

    productos.push(nuevoProducto);
    
    console.log(`${nuevoProducto.nombre} se agrego a la tienda.`);
}



// Función para agregar productos al carrito vacio

const agregarAlCarrito = () => {

    let idProducto = parseInt(prompt("Ingrese el ID del producto que desea agregar al carrito:"));
    let producto = productos.find(el => el.id === idProducto);

    if (producto) {
        carrito.push(producto);
        console.log(`${producto.nombre} ha sido agregado al carrito.`);
    } else {
        console.log("Producto no encontrado.");
    }
}



// Función para mostrar el contenido del carrito

const mostrarCarrito = () => {

    if (carrito.length === 0) {
        console.log("El carrito está vacío.");
        
    } else {
        console.log("Carrito de compras:");
        carrito.forEach(el => console.log(`- ${el.nombre}: $${el.precio}`));
    }
}



// Función para mostrar los productos

const mostrarProductos = () => {
    console.log("Productos disponibles:");
    productos.forEach(el => console.log(`- ID: ${el.id}, Nombre: ${el.nombre}, Precio: $${el.precio}`));
}


// Función para vaciar el carrito

const vaciarCarrito = () => {
    carrito = [];
    console.log("El carrito ha sido vaciado.");
}



// Función principal

let opcion;
do {
    opcion = prompt("Seleccione una opción:\n1. Mostrar productos disponibles\n2. Agregar Productos a la venta\n3. Agregar al carrito\n4. Mostrar carrito\n5. Vaciar Carrito\n6. Salir");
    switch (opcion) {
        case '1':
            mostrarProductos();
            break;
        case '2':
            agregarProducto();
            break;
        case '3':
            agregarAlCarrito();
            break;
        case '4':
            mostrarCarrito();
            break;
        case '5':
            vaciarCarrito();
            break;
        case '6':
            console.log("Saliendo del programa.");
            break;
        default:
            console.log("Opción no válida.");
    }
} while (opcion !== '6');
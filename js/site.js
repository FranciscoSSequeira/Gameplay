//proyecto carrito de sitio GamePlay

//sector del proyecto: productos
 
class Producto {
    constructor( id, nombre, precio, img ) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.img = img;
        this.cantidad = 1;
    }
}

const producto1 = new Producto (1, "producto1", 300, "img/godOfWarPS4.jpg" );
const producto2 = new Producto (2, "producto2", 400, "img/shadowOfColossus.jpg");
const producto3 = new Producto (3, "producto3", 500, "img/injustice2.jpg");

//array de catalogo de productos

const productos = [producto1, producto2, producto3 ];

//Array del carrito

let carrito = [];

//cargar carrito desde el localStorage
if(localStorage.getItem("carrito")){
    carrito = JSON.parse(localStorage.getItem("carrito"));
}

//contenedor del producto

const contenedorProductos = document.getElementById("contenedorProductos");

// funcion para mostrar productos

const mostrarProductos = () => {
    productos.forEach( producto => {
            const card = document.createElement("div");
            card.classList.add("col-x1-3", "col-md-6", "col-xs-12"); //bootstrap
            card.innerHTML = `
                    <div class = "card"> 
                        <img src = "${producto.img}" class = "card-img-top imgProductos" alt="${producto.nombre}">
                        <div class = "card-body">

                            <h5>${producto.nombre}</h5>
                            <p>${producto.precio}</p>
                            <button class = "btn colorBoton" id="boton${producto.id}" > Agregar al Carrito </button>
                            
                        </div>
                    </div>
                            `
                            
            contenedorProductos.appendChild(card);

            //agregar productos al carrito:
        const boton = document.getElementById(`boton${producto.id}`);
        boton.addEventListener("click", () => {
            agregarAlCarrito(producto.id);        })
        })
}
    
//para mostrar productos. Se llama a la funcion.
mostrarProductos () ;

//funcion agregar al carrito

const agregarAlCarrito = (id) => {
    const productoEnCarrito = carrito.find(producto => producto.id === id);
    if(productoEnCarrito){
        productoEnCarrito.cantidad++;
    } else {
        const producto = productos.find(producto => producto.id === id);
        carrito.push(producto);
    }
    //localStorage
    localStorage.setItem("carrito", JSON.stringify(carrito));
    calcularTotal();
    }

    //mostrar el carrito de compras
    const contenedorCarrito = document.getElementById("contenedorCarrito");
    const verCarrito = document.getElementById("verCarrito");

    verCarrito.addEventListener("click", () => {
        mostrarCarrito();
    })

//funcion para modificar el carrito

const mostrarCarrito = () => {
    contenedorCarrito.innerHTML = "";

    carrito.forEach(producto => {
        const card = document.createElement("div");
        card.classList.add("col-x1-3", "col-md-6", "col-xs-12"); //bootstrap
        card.innerHTML = `
        <div class = "card"> 
            <img src = "${producto.img}" class = "card-img-top imgProductos" alt="${producto.nombre}">
            <div class = "card-body">

                <h5>${producto.nombre}</h5>
                <p>${producto.precio}</p>
                <p>${producto.cantidad}</p>

                <button class = "btn colorBoton" id="eliminar${producto.id}" > Eliminar producto </button>
                
            </div>
        </div>
                `
        
        contenedorCarrito.appendChild(card);

        //Eliminar productos del carrito

        const boton = document.getElementById(`eliminar${producto.id}`)
        boton.addEventListener("click", () => {
            eliminarDelCarrito(producto.id);
        })

    })
    calcularTotal();
}

//funcion que elimina producto del carrito

const eliminarDelCarrito = (id) => {
    const producto = carrito.find(producto =>producto.id === id);
    const indice = carrito.indexOf(producto);
    carrito.splice(indice,1);
    mostrarCarrito();

    //localStorage
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

// vaciar todo el carrito

const vaciarCarrito =document.getElementById("vaciarCarrito");
vaciarCarrito.addEventListener("click", () => {
    eliminarTodoElCarrito();
    Swal.fire({
          title: 'Genial!',
          text: 'Haz clickeado el botón!',
          icon: 'success',
          confirmButtonText: 'Cool'
});
})

//funcion que elimina todo el carrito

const eliminarTodoElCarrito = () => {
    carrito = [];
    mostrarCarrito();
    
    //localStorage
    localStorage.clear();
}

//  const mensajeVaciar = document.getElementById("vaciarCarrito");
//  mensajeVaciar.addEventListener("click", () => {

//      Swal.fire({
//          title: 'Genial!',
//          text: 'Haz clickeado el botón!',
//          icon: 'success',
//          confirmButtonText: 'Cool'
//  })
//  })


//Mostramos mensaje con el total de la compra

const total = document.getElementById("total");

const calcularTotal = () => {
    let totalCompra = 0;
    carrito.forEach(producto => {
        totalCompra += producto.precio * producto.cantidad;
    })
    total.innerHTML = `Total: $${totalCompra}`;
}
//recorrer el array por cada producto del array y que se vea en el index

//  arrayListaProductos.forEach (producto => {
//      const div = document.createElement("div");
//      div.innerHTML = `<p>Nombre: ${producto.nombre}</p>
//                      <p>Precio: ${producto.precio}</p>
//                      <button> Agregar al carrito </button>`;
//      contenedorProductos.appendChild(div);
//  })

// alert("Bienvenido! los productos actuales en stock son "+ arrayListaProductos);

// let numeroDeProducto = prompt("que producto compraras? ingresa solo el numero del producto. producto1, producto2, producto3");
// alert("tu producto elegido es "+ numeroDeProducto);

//sector del proyecto: medios de pagos

// console.log("medios de pago");

//saludo inicial
// function saludo(){
//     alert("a continuacion ingrese el medio de pago");
// }
// saludo();

//ingreso de medio de pago
// let medioDePago = prompt("Hola, ingrese el medio de pago. debito o tarjeta");

// switch (medioDePago) {
//     case "debito":
//         alert("el medio de pago seleccionado fue debito");
//         break;

//     case "tarjeta":
//         alert("el medio de pago seleccionado fue tarjeta");
//         break;
    
//     default:
//         let medioDePago = prompt("ingrese el medio de pago. debito o tarjeta");  //si no se ingresa ni debito ni tarjeta
//             if (medioDePago != "debito"||"tarjeta") {
//                 let medioDePago = prompt("ingrese el medio de pago. debito o tarjeta");
//             }
//             break;
//         break;
// }
//pago con debito
// if (medioDePago === "debito") {
//     alert("A continuacion podras abonar tu producto seleccionado");
// }

//pago con tarjeta de credito

//clase Visa

// class Visa {
//     constructor(precioProductoTotalVisa, precioProductoElegidoVisa){

//         this.precioProductoTotalVisa = parseFloat(precioProductoTotalVisa);
//         this.precioProductoElegidoVisa = parseFloat(precioProductoElegidoVisa);

//     }
    //metodo de la clase Visa
//     precioProductoTotalVisa() {
//         this.precioProductoTotalVisa = this.precioProductoElegidoVisa*0.79;
//     }
// }

// if (medioDePago === "tarjeta") {
//     alert("A continuacion podras elegir entre las tarjetas Visa, Mastercard o American Express");
//     let tipoDeTarjeta = prompt("ingresa con que tarjeta haces el pago. visa, mastercard o american son las opciones");
//     alert("elegiste " + tipoDeTarjeta);

//     switch(tipoDeTarjeta){
//         case "visa":

            //uso de la clase Visa
//             const productoVisa = new Visa (0 , 100);
//             productoVisa.precioProductoTotalVisa;
            
//             alert("el precio del producto es de "+ productoVisa.precioProductoElegidoVisa);
//             console.log(productoVisa);

//             break;
        
//         case "mastercard":
//             let precioProductoElegidoMastercard = 120;
//             let precioProductoTotalMastercard = precioProductoElegidoMastercard + (precioProductoElegidoMastercard*0.05)+(precioProductoElegidoMastercard*0.21);

//             alert("el precio del producto quedaria en " + precioProductoTotalMastercard);

//             break;
        
//         case "american":

//             let precioProductoElegidoAmex = 110;
//             let precioProductoTotalAmex = precioProductoElegidoAmex + (precioProductoElegidoAmex*0.05)+(precioProductoElegidoAmex*0.21);

//             alert("el precio del producto quedaria en " + precioProductoTotalAmex);

//             break;
//     }
// }
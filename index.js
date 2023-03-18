/*


const muzzarela = 2500
const fugazzeta = 3000
const roquefort = 3500
const napolitana = 4000




let pizzaDeseada = parseInt(
prompt('Escoge numero de sabor de pizza que desea comprar:\n 1.muzzarela\n 2.fugazzeta\n 3.roquefort\n 4.napolitana\n')
)

let escogioSabor = false

let infopizza



while (escogioSabor === false) {
   if (pizzaDeseada === 1) {
      escogioSabor = true
      infopizza = muzzarela
   } else if (pizzaDeseada === 2) {
      escogioSabor = true
      infopizza = fugazzeta
   } else if (pizzaDeseada === 3) {
      escogioSabor = true
      infopizza = roquefort
   } else if (pizzaDeseada === 4) {
      escogioSabor = true
      infopizza = napolitana
   } else {
      pizzaDeseada = parseInt(
         prompt('Escoge un numero de opcion correcta')
      )
   }


}

let cantidad = parseInt(prompt('ingrese cantidad'))
let total = infopizza * cantidad
alert('total es :'+ '' + total)
*/

/*Ejercicios de e-commer*/
/*
const productos  = [
{
   sabor: 'muzzarela'
   precio: 2000
   
},
{
   sabor: 'fugazzeta'
   precio: 2250
   
},
{
   sabor: 'picante'
   precio: 2300
   
},
{
   sabor: 'pepperoni'
   precio: 2350
   
},
]
*/


// CLASE PRODUCTO

class Producto {
   constructor( id, nombre,precio){
      this.nombre = nombre
      this.id = id
      this.precio = precio

   }
}


// CRREAMOS CUATRO PRODUCTOS 
const muzzarela = new Producto (1,'muzzarela',500)
const  pepperoni = new Producto (2,'pepperoni',200)
const fugazzeta = new Producto (3,'fugazzeta',1000)
const margarita = new Producto (4,'margarita',1500)

// GUARDAR PRODUCTOS
const productos = [muzzarela,pepperoni,fugazzeta,margarita]
console.log(productos)

let productosEscogido = prompt ('Escoge el producto que deseas comprar: \n muzzarela\n pepperoni\n fugazzeta\n margarina\n')

//VARIABLE PARA CONDICION DEL CICLO

let seguirComprando = true
const carrito = []

while (seguirComprando === true){
   //buscaar el producto escogido

   const Producto = productos.find(
      (Producto) => Producto.nombre === productosEscogido.toLocaleLowerCase().trim())
// guardar producto en carrito o preguntarle al usuario un producto existente 
   if (Producto){
   carrito.push(Producto)
}else{
   productosEscogido = prompt(
      'Escoge un producto correcto : \n muzzarela\n  pepperoni\n fugazzeta\n margarita\n')
   
      continue
   
}
const decision = prompt ('Deseas seguir comprando ? si-no')

if (decision === 'si') {
productosEscogido = prompt (
   'Escoge un producto correcto : \n muzzarela\n  pepperoni\n fugazzeta\n margarita\n'
) 
}else {
   seguirComprando = false
}



}

console.log (carrito);
let totalCompra = 0
for (const producto of carrito){
   totalCompra = totalCompra + producto.precio
}
alert('el total de tu compra es: $'+totalCompra)

alert(' ¡Muchas Gracias por su compra!')



















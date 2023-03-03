
// Proyecto hacer un menu para Pizzeria elija sabores y vaya sumando resuelva el total del pedido.

const Muzzarela = 250;
const Fugazzeta = 300;
const Napolitana = 350;
const Roquefort = 400;
const Anchoas = 450;
const Jamonymorron = 500;








const mensajeMenu = `Menu:

1. Muzzarela    4. Roquefort
2. Fugazzeta  5. Anchoas
3. Napolitana     6. Jamon y morron

`;

alert(mensajeMenu);

let suma = 0;
let cont = 0;


let opcion = parseInt(prompt('Ingrese sabor de pizza'))
while (opcion >= 1) {



   if (opcion === 1) {
      alert('Su total a abonar es:' + '' + Muzzarela)
      opcion = parseInt(prompt('ingrese otro sabor de pizza o cero para finalizar'))

   } else if (opcion === 2) {
      alert('Su total a abonar es:  ' + '' + Fugazzeta)
      opcion = parseInt(prompt('ingrese otro sabor de pizza o cero para finalizar'))

   } else if (opcion === 3) {
      alert('Su total a abonar es:' + '' + Napolitana)
      opcion = parseInt(prompt('ingrese otro sabor de pizza o cero para finalizar'))
   } else if (opcion === 4) {
      alert('Su total a abonar es:' + '' + Roquefort)
      opcion = parseInt(prompt('ingrese otro sabor de pizza o cero para finalizar'))
   } else if (opcion === 5) {
      alert('Su total a abonar es:' + '' + Anchoas)
      opcion = parseInt(prompt('ingrese otro sabor de pizza o cero para finalizar'))
   } else if (opcion === 6) {
      alert('Su total a abonar es:' + '' + Jamonymorron)
      opcion = parseInt(prompt('ingrese otro sabor de pizza o cero para finalizar'))
   } else {
      alert('La opcion ingresada no existe')
      break;
   }
 }





























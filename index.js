
const sabor1= 1800
const sabor2=2500

const elegirSabor= prompt('Ingrese que sabor de pizza desea:') .toLocaleLowerCase()

if (elegirSabor === sabor1){
   alert ('El total a abonar es:'+sabor1);
} 
else if (elegirSabor === sabor2){
   alert ('El total a abonar es: '+sabor2)
}
else{
   alert('El sabor elegido no es esta en nuestra carta')
}


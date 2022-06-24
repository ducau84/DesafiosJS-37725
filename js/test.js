let seguirComprando = false;
let compra = "";
let totalCompra = 0;
let financiar = false;
let userName = "choto";
let monto = 0;

const cuadernillos = [
  {id: "mat", nombre: "Matemáticas", precio: 1500},
  {id: "pdl", nombre: "Práctias del Lenguaje", precio: 2000},
  {id: "cnt", nombre: "Ciencias Naturales", precio: 2500},
  {id: "cso", nombre: "Ciencias Sociales", precio: 3000},
  {id: "ing", nombre: "Inglés", precio: 3000},
];

function compraCuadernillos(a) {
  let totalCompra = 0;

  switch (a) {
    case "matemáticas":
      alert(`Usted ha adquirido el Cuadernillo de ${cuadernillos[0].nombre}`);
      totalCompra = cuadernillos[0].precio;
      break;
    //return totalCompra;
    case "prácticas del lenguaje":
      alert(`Usted ha adquirido el Cuadernillo de ${cuadernillos[1].nombre}`);
      totalCompra = cuadernillos[1].precio;
      break;
    //return totalCompra;
    case "ciencias naturales":
      alert(`Usted ha adquirido el Cuadernillo de ${cuadernillos[2].nombre}`);
      totalCompra = cuadernillos[2].precio;
      //return totalCompra;
      break;
    case "ciencias sociales":
      alert(`Usted ha adquirido el Cuadernillo de ${cuadernillos[3].nombre}`);
      totalCompra = cuadernillos[3].precio;
      //return totalCompra;
      break;
    case "inglés":
      alert(`Usted ha adquirido el Cuadernillo de ${cuadernillos[4].nombre}`);
      totalCompra = cuadernillos[4].precio;
      //return totalCompra;
      break;
    default:
      alert(`En este momento no disponemos de un Cuadernillo de ${a}`);
      break;
  }
  return totalCompra;
}

do {
  let compra = prompt(`Disponemos de los Siguientes Cuadernillos:

Materia: "${cuadernillos[0].nombre}" / Precio: $ ${cuadernillos[0].precio}
Materia: "${cuadernillos[1].nombre}" / Precio: $ ${cuadernillos[1].precio}
Materia: "${cuadernillos[2].nombre}" / Precio: $ ${cuadernillos[2].precio}
Materia: "${cuadernillos[3].nombre}" / Precio: $ ${cuadernillos[3].precio}
Materia: "${cuadernillos[4].nombre}" / Precio: $ ${cuadernillos[4].precio};

¿En que cuadernillos usted está interesado? 

Ingrese la materia `).toLocaleLowerCase();

  totalCompra += compraCuadernillos(compra);

  seguirComprando = confirm("¿Desea adquirir otro cuadernillo?");
} while (seguirComprando);

console.log(totalCompra);

if (totalCompra == 0) {
  alert(`¡${userName}, no ha seleccionado ningún cuadernillo!
¡Esperamos volver a verlo pronto!`);
} else {
  financiar = confirm(`El monto total de su compra es de $ ${totalCompra}. 
¿Desea ver nuestras opciones de financiación?`);
}

if (financiar == true && totalCompra != 0) {
  monto = totalCompra;
}
if (financiar == false && totalCompra != 0) {
  alert(`El total a abonar es de $ ${totalCompra}.

A la brevedad recibirá un correo electónico con los nuestros datos bancarios

¡Muchas Gracias por su compra!`);
}

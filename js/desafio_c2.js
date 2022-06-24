// Inicializo las variables globales
let userName = "";
let monto = 0;
let plan = "";
let aceptaFin = false;

//* Defino nuevas variables para este desafío

let seguirComprando = false;
let compra = "";
let totalCompra = 0;
let financiar = false;

// Creo las funciones de financiación

const ahora3 = (a) => a * 1.15;
const ahora6 = (a) => a * 1.3;
const ahora12 = (a) => a * 1.5;
const ahora18 = (a) => a * 1.75;

//* Creo un array de Usuarios

const usuarios = ["pamela", "amalia", "enzo", "emilia"];

//* Creo un array de Objetos

const cuadernillos = [
  {id: "mat", nombre: "Matemáticas", precio: 3500},
  {id: "pdl", nombre: "Práctias del Lenguaje", precio: 2000},
  {id: "cnt", nombre: "Ciencias Naturales", precio: 2500},
  {id: "cso", nombre: "Ciencias Sociales", precio: 1500},
  {id: "ing", nombre: "Inglés", precio: 3000},
];

// Creo una función que añade el interés de acuerdo a la cantidad de cuotas:

function costoFin(a, b) {
  let valorFinal = 0;

  switch (b) {
    case 3:
      valorFinal = ahora3(a);
      alert(
        `Ha seleccionado el plan "Ahora 3" el cual tiene un 15% de interes`
      );
      break;

    case 6:
      valorFinal = ahora6(a);
      alert(
        `Ha seleccionado el plan "Ahora 6" el cual tiene un 30% de interes`
      );
      break;

    case 12:
      valorFinal = ahora12(a);
      alert(
        `Ha seleccionado el plan "Ahora 12" el cual tiene un 50% de interes`
      );
      break;

    case 18:
      valorFinal = ahora18(a);
      alert(
        `Ha seleccionado el plan "Ahora 18" el cual tiene un 75% de interes`
      );
      break;

    default:
      alert(
        `Ha seleccionado una financiación no disponible. Por favor inténtelo de nuevo: `
      );
      break;
  }
  //Defino que el monto a devolver debe ser un entero con 2 decimales:

  return valorFinal.toFixed(2);
}

//Creo función para calcular el monto de la cuota:

function importeCuota(a, b) {
  let valCuota = 0;
  valCuota = a / b;
  //Defino que el monto a devolver debe ser un entero con 2 decimales:

  return valCuota.toFixed(2);
}

//Creo función para discriminar el interés aplicado:

function discInteres(a, b) {
  let interes = 0;
  interes = a - b;

  //Defino que el monto a devolver debe ser un entero con 2 decimales:
  return interes.toFixed(2);
}

//* Creo una función para definir el proceso de compra

function compraCuadernillos(a) {

  let totalCompra = 0;

  switch (a) {
    case "matemáticas":
      alert(`Usted ha adquirido el Cuadernillo de ${cuadernillos[0].nombre}`);
      totalCompra = cuadernillos[0].precio;
      break;

    case "prácticas del lenguaje":
      alert(`Usted ha adquirido el Cuadernillo de ${cuadernillos[1].nombre}`);
      totalCompra = cuadernillos[1].precio;
      break;

    case "ciencias naturales":
      alert(`Usted ha adquirido el Cuadernillo de ${cuadernillos[2].nombre}`);
      totalCompra = cuadernillos[2].precio;
      break;

    case "ciencias sociales":
      alert(`Usted ha adquirido el Cuadernillo de ${cuadernillos[3].nombre}`);
      totalCompra = cuadernillos[3].precio;
      break;

    case "inglés":
      alert(`Usted ha adquirido el Cuadernillo de ${cuadernillos[4].nombre}`);
      totalCompra = cuadernillos[4].precio;
      break;

    default:
      alert(`En este momento no disponemos de un Cuadernillo de ${a}`);
      break;
  }
  return totalCompra;
}

//* Creo una función para pasar la primera letra a mayúscula

function primerLetraMayusc(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

//* Pido al usuario que cree su id y verfico que el nombre no esté tomado

do {
  if (userName != "") {
    alert(`El nombre de ${userName} ya existe, por favor ingrese uno nuevo`);
  }

  userName = prompt("Ingrese un nombre de usuario: ").toLowerCase();
} while (usuarios.includes(userName));

//* Añado el nuevo usuario al array "Usuarios"

usuarios.push(userName);

console.log(usuarios); //? Verfico por consola que el nuevo usuario se haya añadido al array "Usuarios".

//* Paso la primera letra del nombre de usuario a mayúsculas y le aviso que el mismo se ha creado correctamente

userName = primerLetraMayusc(userName);

alert(`el nombre de usuario: ${userName} se creó con éxito!`);

//* Saludo al nuevo usuario por su nombre

alert(
  `Bienvenido ${userName}, a continuación le detallaremos los cuadernillos que tenemos a su disposición`
);

// *Enumero los productos disponibles para la compra

do {
  let compra = prompt(`Disponemos de los Siguientes Cuadernillos:

Materia: "${cuadernillos[0].nombre}" / Precio: $ ${cuadernillos[0].precio}
Materia: "${cuadernillos[1].nombre}" / Precio: $ ${cuadernillos[1].precio}
Materia: "${cuadernillos[2].nombre}" / Precio: $ ${cuadernillos[2].precio}
Materia: "${cuadernillos[3].nombre}" / Precio: $ ${cuadernillos[3].precio}
Materia: "${cuadernillos[4].nombre}" / Precio: $ ${cuadernillos[4].precio};

¿En que cuadernillos usted está interesado? 
Ingrese la materia: `);

  //* Verifico que no se haya presionado cancelar

  if (compra == null) {
    alert(`¡${userName}, no ha seleccionado ningún cuadernillo!`);

    break;
  }

  //* Invoco la función para procesar los cuadernillos seleccionados por el usuario

  totalCompra += compraCuadernillos(compra.toLowerCase());

  seguirComprando = confirm("¿Desea adquirir otro cuadernillo?");
} while (seguirComprando);

//* Si el total de la compra es cero despido al usuario, en caso contrario le comunico el total de la compra y le ofrezco financiación
if (totalCompra == 0) {
  alert(`¡${userName}, lamentamos que no le hayan servido nuestros productos!

¡Esperamos volver a verlo pronto!`);
} else {
  financiar = confirm(`El monto total de su compra es de $ ${totalCompra}. 
¿Desea ver nuestras opciones de financiación?`);
}

//* En caso de aceptar la financiación transformo la variable "totalCompra" en la variable "monto" para comenzar el proceso de financiación,
//* Caso contrario paso el total y despido al usuario

if (financiar == true && totalCompra != 0) {
  monto = totalCompra;
  //Pido al usuario que ingrese la financiación de acuerdo a las opciones propuestas:

  plan = Number(prompt("Ingrese la cantidad de Cuotas: 3, 6, 12 o 18: "));

  //Valido que los datos ingresados por el usuario cumplan con lo solicitado previamente:

  while (
    (plan !== 3 && plan !== 6 && plan !== 12 && plan !== 18) ||
    isNaN(plan)
  ) {
    alert(
      `¡Ingresó una financiación no disponible! Por favor inténtelo nuevamente: `
    );
    plan = Number(prompt("Ingrese la cantidad de Cuotas: 3, 6, 12 o 18: "));
  }

  //Invoco las funciones para calcular el monto con interes y el monto por cuota:

  const valorFinal = costoFin(monto, plan);
  const valCuota = importeCuota(valorFinal, plan);
  const interes = discInteres(valorFinal, monto);

  //Consulto al usuario si está de acuerdo con el resultado de la financiacion y muestro alerta en función de la respuesta:

  aceptaFin =
    confirm(`Usted deberá abonar $ ${valorFinal} en ${plan} cuotas de $ ${valCuota}.
Total de intereses: $ ${interes}.

¿Acepta esta financiación?`);

  if (aceptaFin == true) {
    alert(`¡Muchas gracias por confiar en nosotros!

A continuación le solicitaremos los datos necesarios para completar la operación:`);
  } else {
    alert(`¡Lamentamos que no le haya servido nuestra financiación!
    
El total a abonar es de $ ${monto}.

A la brevedad recibirá un correo electónico con los nuestros datos bancarios

¡Muchas Gracias por su compra!`);
  }
}
if (financiar == false && totalCompra != 0) {
  alert(`El total a abonar es de $ ${totalCompra}.

A la brevedad recibirá un correo electónico con los nuestros datos bancarios

¡Muchas Gracias por su compra!`);
}

// Inicializo las variables globales

let monto = 0;
let plan = "";
let aceptaFin = false;

// Creo las funciones de finaciación

const ahora3 = (a) => a * 1.15;
const ahora6 = (a) => a * 1.3;
const ahora12 = (a) => a * 1.5;
const ahora18 = (a) => a * 1.75;

// Creo una función que añade el interés de acuerdo a la cantidad de cuotas:

function costoFin(a, b) {
  let valorFinal = 0;

  switch (b) {
    case 3:
      valorFinal = ahora3(a);
      alert(`Ha seleccionado el plan "Ahora 3" el cual tiene un 15% de interes`);
      break;
    case 6:
      valorFinal = ahora6(a);
      alert(`Ha seleccionado el plan "Ahora 6" el cual tiene un 30% de interes`);
      break;
    case 12:
      valorFinal = ahora12(a);
      alert(`Ha seleccionado el plan "Ahora 12" el cual tiene un 50% de interes`);
      break;
    case 18:
      valorFinal = ahora18(a);
      alert(`Ha seleccionado el plan "Ahora 18" el cual tiene un 75% de interes`);
      break;

    default:
      alert(`Ha seleccionado una financiación no disponible. Por favor inténtelo de nuevo: `);
      break;
  }
  //Defino que el monto a devolver debe ser un entero con 2 decimales:
  return (valorFinal).toFixed(2);
}

//Creo función para calcular el monto de la cuota:

function importeCuota(a, b) {
  let valCuota = 0;
  valCuota = a / b;
  //Defino que el monto a devolver debe ser un entero con 2 decimales:
  return (valCuota).toFixed(2);
}

//Creo función para discriminar el interés aplicado:

function discInteres(a, b) {
  let interes = 0;
  interes = a - b;
  //Defino que el monto a devolver debe ser un entero con 2 decimales:
  return (interes).toFixed(2);
}

//Pido al usuario que ingrese el monto mayor a $ 1000:

monto = Number(
  prompt("Ingrese el monto a financiar (Debe ser mayor a $ 1,000.00): "));

//Valido que los datos ingresados por el usuario cumplan con lo requerido:

while (monto == "" || monto <= 1000 || isNaN(monto)) {
  alert(`¡Ingresó un monto no válido! Por favor intentelo nuevamente: `);
  monto = Number(prompt(`Ingrese el monto a financiar (Debe ser mayor a $ 1.000,00): `));
}

//Pido al usuario que ingrese la financiación de acuerdo a las opciones propuestas:

plan = Number(prompt("Ingrese la cantidad de Cuotas: 3, 6, 12 o 18: "));

//Valido que los datos ingresados por el usuario cumplan con lo solicitado previamente:

while ((plan !== 3 && plan !== 6 && plan !== 12 && plan !== 18) || isNaN(plan)) {
  alert(`¡Ingresó una financiación no disponible! Por favor inténtelo nuevamente: `);
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
  
¡Esperamos volver a verlo pronto!`);
}
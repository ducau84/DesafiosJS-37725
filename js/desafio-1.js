let nombre = "";
let numero = "";
let adivinar = 0;
let seguirJugando = false;

nombre = prompt("¡Bienvenido!, por favor ingrese su nombre:");

while (nombre == "" || nombre == null || !isNaN(nombre)) {
  alert("Debe ingresar su nombre");
  nombre = prompt("¡Bienvenido!, por favor ingrese su nombre:");
}

alert(`${nombre} Vamos a ver si adivinas en qúe número estoy pensando...`);

do {
  numero = Number(prompt(`${nombre} Ingrese Un número entero del 1 al 10`));

  switch (numero) {
    case 1:
      alert(`No, el número que pensé no es: ${numero} `);
      adivinar++;
      break;
    case 2:
      alert(`No, el número que pensé no es: ${numero} `);
      adivinar++;
      break;
    case 3:
      alert(`No, el número que pensé no es: ${numero} `);
      adivinar++;
      break;
    case 4:
      alert(`No, el número que pensé no es: ${numero} `);
      adivinar++;
      break;
    case 5:
      alert(`No, el número que pensé no es: ${numero} `);
      adivinar++;
      break;
    case 6:
      alert(`No, el número que pensé no es: ${numero} `);
      adivinar++;
      break;
    case 7:
      alert(`No, el número que pensé no es: ${numero} `);
      adivinar++;
      break;
    case 8:
      alert(
        `¡Felicitaciones ${nombre}, ${numero} es el número en el que estaba pensando! `
      );
      adivinar++;
      alert(`¡${nombre}, necesitaste ${adivinar} intentos para Adivinar!`);
      break;
    case 9:
      alert(`No, el número que pensé no es: ${numero} `);
      adivinar++;
      break;
    case 10:
      alert(`No, el número que pensé no es: ${numero} `);
      adivinar++;
      break;
    default:
      alert(numero + ": Está fuera del rango solicitado");
      adivinar++;
  }
  seguirJugando = confirm(`¿${nombre}, querés seguir jugando?`);
} while (seguirJugando);

alert(`¡${nombre}, muchas gracias por haber jugado!`);

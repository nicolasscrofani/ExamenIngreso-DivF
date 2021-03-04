function mostrar() {
  let nombre;
  let obra;
  let valorViaje = 600;
  let edad;
  let temperatura;
  let sexo;
  let contViejoOSDE = 0;
  let mujerPAMIjoven;
  let contPAMI = 0;
  let contPasajeros = 0;
  let contMay = 0;
  let flag = 1;
  let flagDesc = 0;
  let continuar;
  let valorViajeDesc;

  do {
    nombre = prompt("Nombre:");
    obra = prompt("ingrese obra social PAMI/OSDE/otras: ");
    while (obra != "PAMI" && obra != "OSDE" && obra != "otras") {
      obra = prompt("Error. ingrese obra social PAMI/OSDE/otras:");
    }
    edad = parseInt(prompt("Edad:"));
    while (isNaN(edad) || edad < 17) {
      edad = parseInt(prompt("Error. Ingrese una edad válida:"));
    }

    temperatura = parseFloat(prompt(" ingrese Temperatura:"));
    while (isNaN(temperatura) || temperatura <= 0) {
      temperatura = parseFloat(
        prompt("Error. Ingrese una temperatura válida:")
      );
    }
    sexo = prompt("Sexo (f/m):").toLowerCase();
    while (sexo != "f" && sexo != "m") {
      sexo = prompt("Error. Sexo (f/m):").toLowerCase();
    }
    if (edad > 60 && obra == "OSDE") {
      contViejoOSDE++;
    }

    if (flag || mujerPAMIjoven < edad) {
      tempMujerPAMIjoven = temperatura;
      nombreMujerPAMIjoven = nombre;
      flag = 0;
    }

    contPAMI;
    contPasajeros++;
    continuar = prompt("Mas pasajeros?").toLowerCase();
  } while (continuar == "s");

  valorViaje = contPasajeros * precio;

  if ((contMay * 100) / contPasajeros > 60) {
    valorViajeDesc = parseFloat(valorViaje * 0.75);
    flagDesc = 1;
  }

  console.log(contViejoOSDE);
  console.log(tempMujerPAMIjoven + nombreMujerPAMIjoven);
  console.log(valorViaje);
  console.log(valorViajeDesc);
}

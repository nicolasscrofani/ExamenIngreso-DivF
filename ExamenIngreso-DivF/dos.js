function mostrar() {
  let nombre;
  let situacion;
  let cantidad;
  let sexo;
  let promedio;
  let seguir;
  let edadMasViejoEstudiantes;
  let contBusc = 0;
  let acumBusc = 0;
  let contEs = 0;
  let acumEs = 0;
  let acumTra = 0;
  let contTra = 0;

  do {
    nombre = prompt("Nombre:");
    stuacion = prompt("ingrese situacion buscando/trabajando/estudiante: ");
    while (
      situacion != "buscando" &&
      situacion != "trabajando" &&
      situacion != "estudiante"
    ) {
      situacion = prompt(
        "Error. ingrese situacion buscando/trabajando/estudiante:"
      );
    }
    cantidad = parseInt(prompt("ingrese cantidad de materias (0 a 8):"));
    while (!(cantidad >= 1 && cantidad <= 8)) {
      cantidad = parseInt(
        prompt("Error. Ingrese cantidad de materias (0 a 8):")
      );
    }

    sexo = prompt("Sexo (f/m/nobinario):").toLowerCase();
    while (sexo != "f" && sexo != "m" && sexo != "nobinario") {
      sexo = prompt("Error. Sexo (f/m/nobinario):").toLowerCase();
    }
    promedio = parseInt(prompt("ingrese promedio (entre 0 y 10 ): "));
    while (!(promedio >= 0 && promedio <= 10)) {
      promedio = parseInt(prompt("Error. ingrese promedio (entre 0 y 10 ): "));
    }

    seguir = prompt("quiere ingresar otro alumno ? s/n");
  } while ((seguir = "s"));

  if (flag == 0 && edadMasViejoEstudiantes < edad) {
    edadMasViejoEstudiantes = nombre;
    flag = 1;
  }

  switch (situacion) {
    case "estudiante":
      contEs++;
      acumEs += situacion;

      break;

    case "trabajando":
      contTra++;
      acumTra += situacion;
      break;

    case "buscando":
      contBusc++;
      acumBusc += situacion;

      break;
  }
  //no llegue
}

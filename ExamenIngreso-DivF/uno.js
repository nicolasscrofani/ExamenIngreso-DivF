function mostrar() {
  let nombre;
  let precio;
  let cantidad;
  let tipo;
  let fabricante;
  let promedio;
  let promedioCompra;
  let contDes = 0;
  let acumDes = 0;
  let contDet = 0;
  let acumDet = 0;
  let contB = 0;
  let acumB = 0;
  let totalCantidadDet;
  let maxPrecio;
  let flag = 0;

  for (let i = 0; i < 5; i++) {
    nombre = prompt("ingrese nombre alcohol, iac, quat: ");
    while (nombre != "alcohol" && nombre != "iac" && nombre != "quat") {
      nombre = prompt(
        'error, tipo invalido, ingrese tipo: "alcohol, iag, quat"'
      );
    }
    precio = parseFloat(prompt("ingrese precio $(100-300):"));
    while (precio < 100 || precio > 300 || isNaN(precio)) {
      precio = parseFloat(prompt("error, ingrese precio $(100-300):"));
    }
    cantidad = parseInt(prompt("ingrese cantidad(maximo 1000):"));
    while (!(cantidad > 0 && cantidad <= 1000)) {
      cantidad = parseInt(prompt("error, ingrese cantidad(maximo 1000):"));
    }
    tipo = prompt('ingrese tipo: "desinfectante/bactericida/detergente"');
    while (
      tipo != "desinfectante" &&
      tipo != "bactericida" &&
      tipo != "detergente"
    ) {
      tipo = prompt(
        'error, tipo invalido, ingrese tipo: "desinfectante/bactericida/detergente"'
      );
    }
    fabricante = prompt("ingrese fabricante:");

    if (tipo == "desinfectante") {
      contDes++;
      acumDes += tipo;
    }

    if (tipo == "bactericida") {
      contB++;
      acumB += tipo;
    }

    if (tipo == "detergente") {
      contDet++;
      acumDet += tipo;
    }
    if (nombre == "detergente" && precio >= 200) {
      acumDet += totalCantidadDet;
      contDet++;
    }
    if (flag == 0 || precio > maxPrecio) {
      maxPrecio = tipo;
      maxPrecio = fabricante;
      flag = 1;
    }
  }
  if (contDes != 0) {
    promedio = acumDes / contDes;
    console.log("el promedio es" + promedio);
  }
  if (contB != 0) {
    promedio = acumB / contB;
    console.log("el promedio es" + promedio);
  }
  if (contDet != 0) {
    promedio = acumDet / contDet;
    console.log("el promedio es" + promedio);
  }
  if (acumuDes > acumB && acumuDes > acumDet) {
    tipoMax = "desinfectante";

    promedioCompra = acumDes / contDes;
  } else if (acumuB >= acumDes && acumuB > acumDet) {
    tipoMax = "bactericida";
    promedioCompra = acumB / contadorB;
  } else {
    tipoMax = "detergente";
    promedioCompra = acumDet / contDet;
  }

  console.log(tipoMax);
  console.log(totalCantidadDet);
  console.log(maxPrecio);
}


//Funciones
function menu(opcionSeleccionada) {
    switch (opcionSeleccionada) {
      case 1:
        console.log("1", opcionSeleccionada);
        cuantos("Enchiladas", 90);
        break;
      case 2:
        // cuantos queres?
        // calculo el valor
        // informo lo que pidió
        console.log("2", opcionSeleccionada);
        cuantos("Quesadillas", 100);
        break;
      default: 
        alert("Ingresó una opcion invalida");
    }
  }
  
  function cuantos(nombreDelProducto, precioDelProducto) {
    let cantidad = prompt("¿Cuántas unidades de " + nombreDelProducto + " desea?")
    let precio = cantidad * precioDelProducto; // calculo el valor
    // informo lo que pidió
    alert("Seleccionó " + cantidad + " " + nombreDelProducto + " y el total a pagar es " + precio);
  }
  
  //Variables
  let opcion;
  
  // PROGRAMA PRINCIPAL
  // Pido opción a comprar
  opcion = parseInt(prompt("¿Qué deseas pedir?(Ingrese solamente un numero de las siguientes opciones):\n 1-Enchiladas\n 2-Quesadillas \n0- FINALIZAR"));
  while (opcion !== 0) { 
  
    menu(opcion)
    // Pido opción a comprar
    opcion = parseInt(prompt("¿Qué deseas pedir?(Ingrese solamente un numero de las siguientes opciones):\n 1-Enchiladas\n 2-Quesadillas \n0- FINALIZAR"));
  }
  
  // Agradezco
  alert("Gracias por su visita!");
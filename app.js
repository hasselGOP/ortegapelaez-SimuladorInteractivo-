//                                         SIMULADOS INTERACTIVO(CLASE 4 - DESAFIO 2)
//Incorporar lo ejercitado en las clases anteriores, algoritmo condicional y algoritmo con ciclo.
//Utilizar funciones para realizar esas operaciones.

//FUNCIONES 
function menu(opcionSeleccionada) {
    switch (opcionSeleccionada) {
      case 1:
        console.log("1", opcionSeleccionada);
        cuantos("Enchiladas", 135);
        break;
      case 2:
        // definir la cantidad del platillo que el usuario selecionara?
        // calcular el valor
        // informar lo que pidió el usuario
        console.log("2", opcionSeleccionada);
        cuantos("Quesadillas", 90);
        break;
      default: 
        alert("Ingresó una opcion invalida");
    }
  }
  //Funcion donde se le pide al usuario cuanta cantidad desea del platillo selecionado 
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
  opcion = parseInt(prompt("¿Qué deseas pedir?(Ingrese solamente un numero de las siguientes opciones):\n 1-Enchiladas\n 2-Quesadillas \n 0- FINALIZAR"));
  while (opcion !== 0) {  // mientras que la opcion sea diferente a o se le pregunta al usuario que elija de las opciones de los contrario el programa saldra
  
    menu(opcion)
    // Pido opción a comprar
    opcion = parseInt(prompt("¿Qué deseas pedir?(Ingrese solamente un numero de las siguientes opciones):\n 1-Enchiladas\n 2-Quesadillas \n0- FINALIZAR"));
  }
  
  // Agradezco
  alert("Gracias por su visita!"); // cuando tecleo 0 el programa dara por finalizado y sacara un alert donde agradece su visita.
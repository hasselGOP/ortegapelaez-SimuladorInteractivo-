/*/// PROGRAMA QUE CAPTURA EL PEDIDO DEL CLIENTE

let restauranteInicio = alert("Restaurante Cazuela del antojo CDMX!");
let restauranteBienvenida = alert("Bienvenid@ al sistema en linea del restaurante");
let menu = parseInt(prompt("Que deseas pedir?(Ingrese solamente un numero de las siguientes opciones):\n 1-Enchiladas\n 2-Quesadillas"));
while (menu != 1 && menu != 2) {
    menu = parseInt(
        prompt("Por favor escoja una opción válida.\n Que deseas pedir? (Ingrese solamente el número que se visualiza en pantalla):\n 1-Enchiladas\n 2-Quesadillas")
    );
}

function pedido() {
    switch (menu) {
        case 1:
            let tipoEnchiladas = parseInt(
                prompt(
                    "Elige un tipo de enchiladas?(Ingrese solamente el número correspondiente de las siguientes opciones):\n 1-Enchiladas de Mole\n 2-Enchiladas Rojas\n 3-Enchiladas verdes\n 4-Enchiladas Suizas\n 5-Enchiladas mineras\n 6-Enchiladas Potosinas")
            );
            if (tipoEnchiladas === 1) {
                alert("Tortillas bañadas en mole negro oaxaqueño y rellenas de pollo deshebrado.\n Las Enchiladas de Mole estaran listas en 30 minutos.\n El valor es de $125");
                
            } else if (tipoEnchiladas === 2) {
                alert(
                    "Estas deliciosas Enchiladas rojas son bañadas en salsa roja la cual es una mezcla de jitomate y chile guajillo, rellenas de papa, queso, picadillo, carne de res deshebradao pollo deshebrado.\nEstará lista en 30 minutos. \nEl valor es de $135");

            } else if (tipoEnchiladas === 3) {
                alert("Deliciosas Enchiladas verdes bañadas en salsa de tomate verde, rellenas con pollo deshebrado, se acompaña de crema, cebolla y queso desmoronado.\nEstará lista en 30 minutos.\n El valor es de $135");
                
            } else if (tipoEnchiladas === 4) {
                alert("Estas enchiladas son una variación de las enchiladas verdes, con tortilla de maiz rellenas de pollo, bañadas en salsa verde cremosa y gratinadas con queso manchego.\n Estará lista en 30 minutos. \nEl valor es de $140");
                
            } else if (tipoEnchiladas === 5) {
                alert("Enchiladas mineras son tortillas de maíz, bañadas en salsa de chile guajillo, fritas en manteca de cerdo y rellenas con queso rallado, rajas de chile en escabeche, zanahoria y papa en trozos.\nEstará lista en 30 minutos. \nEl valor es de $135");
                
            }else if (tipoEnchiladas === 6) {
                alert("Enchiladas potosinas, las tortillas contienen chile ancho y se rellenan con queso fresco, cebolla y salsa, cocidas  a comal y fritas despues, espolvoreadas con cebolla picada, queso ylechuga en rebanadas.\nEstará lista en 30 minutos.\n El valor es de $135");
                
            }
            break;
        case 2:
            
            let tipoQuesadilas = parseInt(
                prompt(
                    "Que tipo de quesadilla quieres?(Ingrese solamente el número correspondiente de las siguientes opciones ):\n 1-Quesadillas fritas\n 2-Quesadillas al comal \n 3-molotes \n4-memelas"
                )
            );
            if (tipoQuesadilas === 1) {
                alert("Hechas de masa de nixtamal rellenas con una gran variedad de ingredientes y fritas en aceite. Favor de elegir la cantidad.");
                
            } else if (tipoQuesadilas === 2) {
                alert("Quesadillas al comal y rellenas de una variedad de ingredientes. Favor de elegir la cantidad.");
               
            } else if (tipoQuesadilas === 3) {
                alert("Deliciosas quesadillas elaboradas con una mezcla de maíz nixtamalizado y pure de papa, rellena de picadillo y carne deshebrada. Favor de elegir la cantidad");

            }else if (tipoQuesadilas === 4) {
                alert("Tortilla de maiz hecha a mano con frijoles molidos, cubiertas en salsa dee molcajete y queso espolvoreado. Favor de elegir la cantidad.");  
            }
            let cantidad = parseInt(prompt("Cuantas quesadillas vas a elegir? El valor por unidad es de $90"));
            let total = cantidad * 90;
            alert("Estarán listas en 30 minutos. El total a pagar es de:" + total);
           break
    } /// Aqui se determina si el cliente quiere continuar pidiendo mas
        if (confirm("¿Quiere seguir pidiendo?") == true) {
            let menu = parseInt(prompt("Que mas desea pedir?(Ingresa solamente el número de las siguientes opciones):\n 1-Enchiladas\n 2-quesadilla"))
            pedido()
            while ((menu !== 1) && (menu !== 2)) {
                alert("Platillo no valido, por favor escoja una opción válida")
                menu = parseInt(prompt("Que deseas volver a pedir?(Ingresa solamente un número de las siguientes opciones):\n 1-Enchiladas\n 2-Quesadilla"))
                pedido()
            } 
        } else {
            alert("Gracias por elegirnos, vuelve pronto")
        }      
}
pedido();*/

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
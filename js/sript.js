// // // // // // // // // // Confirm y Alert para las cookies // // // // // // // // // // 
var aceptaCookies = confirm("Este sitio web utiliza cookies para mejorar su experiencia de navegación. ¿Acepta las cookies?");

if (aceptaCookies) {
  var nombre = prompt("Por favor ingrese su nombre:");
  var apellido = prompt("Por favor ingrese su apellido:");
  var nombreProyecto = prompt("Por favor ingrese el nombre del proyecto de digitalización:");
} else {
  // Si el usuario no acepta las cookies, se muestra un mensaje de alerta
  alert("Sentimos mucho que no acepte nuestras cookies.");
}

// // // // // // // // // //  Función de primera  calculadora para convertir cm a pulgadas // // // // // // // // // // 

function convertir() {
    const cm = parseFloat(document.getElementById("cm").value);
    const pulgadas = cm / 2.54;
    document.getElementById("pulgadas").value = pulgadas.toFixed(2);
  }

  
// // // // // // // // // //  Función de segunda calculadora para obtener la dimensión en dpi // // // // // // // // // // 
function calcular() {
  var pulgad = document.getElementById("pulgad").value;
  var dpi = document.getElementById("dpi").value;
  var resultado = pulgad * dpi;
  document.getElementById("resultado").textContent = resultado;
}

// // // // // // // // // //  Función de tercera  calculadora para obtener la dimensión total en pixeles // // // // // // // // // // 
function calculando() {
  var pixelAlto = document.getElementById("pixelAlto").value;
  var pixelAncho = document.getElementById("pixelAncho").value;
  var resultin = pixelAlto * pixelAncho;
  document.getElementById("resultin").textContent = resultin;
}

// // // // // // // // // //  Función de cuarta calculadora para obtener el peso del archivo  // // // // // // // // // // 
function division() {
  var pixelTotal = document.getElementById("pixelTotal").value;
  var profundidadBits = document.getElementById("profundidadBits").value;
  var resultadoDivision = pixelTotal / profundidadBits;
  document.getElementById("resultadoDivision").textContent = resultadoDivision;
}

// // // // // // // // // //  Función de cuarta calculadora para obtener el peso del archivo  // // // // // // // // // // 
function calculadoraFinal() {
  var valor = document.getElementById("valor").value;
  var unidad = document.getElementById("unidad").value;
  var medida;

  switch (unidad) {
    case "gb":
    medida = valor / 1024;
    break;     
    case "tb":
      medida = valor / (1024 * 1024);
      break;
    default:
      medida = "Unidad no válida";
  }

  document.getElementById("medida").textContent = medida;
}

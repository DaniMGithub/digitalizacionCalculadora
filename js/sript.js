// // // // // // // // // //  Confirm y Alert para las cookies // // // // // // // // // // 
var aceptaCookies = confirm("Este sitio web utiliza cookies para mejorar su experiencia de navegación. ¿Acepta las cookies?");

if (aceptaCookies) {
  var nombre = prompt("Por favor ingrese su nombre:");
  var apellido = prompt("Por favor ingrese su apellido:");
  var nombreProyecto = prompt("Por favor ingrese el nombre del proyecto de digitalización:");
  // Si el usuario acepta las cookies y proporciona la información solicitada, se puede realizar alguna acción aquí
  // Por ejemplo, guardar la información en una cookie o utilizarla para personalizar el sitio web
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
// // // // // // // // // //  Función de primera  calculadora para convertir cm a pulgadas // // // // // // // // // // 

function convertir() {
    const cm = parseFloat(document.getElementById("cm").value);
    const pulgadas = cm / 2.54;
    document.getElementById("pulgadas").value = pulgadas.toFixed(2);
  }
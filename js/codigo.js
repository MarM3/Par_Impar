
function parImpar(parNumero){
    if (!isNaN(parNumero)){
      if (parNumero%2 == 0){
        alert("El número introducido es par.");
      }else{
        alert("El número introducido es impar.");
      }
    }else{
      alert("El numero introducido no es correcto. Intentelo de nuevo.");
      parNumero = prompt("Introduzca un número:");
    }
  }

  let numero = prompt("Introduzca un número:");
  parImpar(numero);
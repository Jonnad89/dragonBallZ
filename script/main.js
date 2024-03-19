/* querySelector() Es una función que obtiene una referencia en este caso 
al título y la almacena en una variable llamada "miTitulo", despúes de eso establecemos el valor de la propiedad "textContent" de la variable "miTitulo" que representa el contenido del título y le asigno "¡Hola mundo!" haciendo que el contenido anterior cambie por este */

// const miTitulo = document.querySelector("h1");
// miTitulo.textContent = "¡Hola mundo!";
// miTitulo.textContent = "Dragon Ball Z";

const nombrePersonaje = document.querySelector("h3");
nombrePersonaje.textContent = "Goku - Ultra Instinto";
// Cambiar imagenes
let miImage = document.querySelector("img");
miImage.onclick = function () {
  let miSrc = miImage.getAttribute("src");
  if (miSrc === "images/goku.jpg") {
    miImage.setAttribute("src", "images/gokuUI.jpg");
  } else {
    miImage.setAttribute("src", "images/goku.jpg");
  }
};
// let cell = document.querySelector("#cell");
// cell.onclick = function () {
//     let transform = cell.getAttribute("src");
//     if(transform !== "images/cell1.jpg"){
//         cell.setAttribute("src", "images/cell2.jpg")
//         transform = "images/cell2.jpg";

//     } else {
//         cell.setAttribute("src", "images/cell3.jpg")
//         transform = "images/cell3.jpg"
//     }
// }
let cell = document.querySelector("#cell");
let currentState = 1;

cell.onclick = function () {
  if (currentState === 1) {
    cell.setAttribute("src", "images/cell2.png");
    currentState = 2;
  } else if (currentState === 2) {
    cell.setAttribute("src", "images/cell3.png");
    currentState = 3;
  } else {
    cell.setAttribute("src", "images/cell1.png");
    currentState = 1;
  }
};
let frezzer = document.querySelector("#frezzer");

frezzer.onclick = function () {
  if (currentState === 1) {
    frezzer.setAttribute("src", "images/frezzer2.png");
    currentState = 2;
  } else if (currentState === 2) {
    frezzer.setAttribute("src", "images/frezzer3.jpg");
    currentState = 3;
  } else if (currentState === 3) {
    frezzer.setAttribute("src", "images/frezzer4.png");
    currentState = 4;
  } else if (currentState === 4) {
    frezzer.setAttribute("src", "images/frezzer5.png");
    currentState = 5;
  } else {
    frezzer.setAttribute("src", "images/frezzer1.png");
    currentState = 1;
  }
};

let majinBoo = document.querySelector("#majinBoo");
majinBoo.onclick = function () {
    if (currentState === 1) {
      majinBoo.setAttribute("src", "images/majinBoo2.png");
      currentState = 2;
    } else if (currentState === 2) {
      majinBoo.setAttribute("src", "images/majinBoo3.png");
      currentState = 3;
    } else if (currentState === 3) {
      majinBoo.setAttribute("src", "images/majinBoo4.png");
      currentState = 4;
    } else if (currentState === 4) {
      majinBoo.setAttribute("src", "images/majinBoo5.png");
      currentState = 5;
    } else {
      majinBoo.setAttribute("src", "images/majinBoo1.png");
      currentState = 1;
    }
  };
// Dar mensaje de bienvenida
let miBoton = document.querySelector("button");
let miTitulo = document.querySelector("h2");

function estableceNombreUsuario() {
  let miNombre = prompt("Introduzca su nombre.");
  if (!miNombre) {
    estableceNombreUsuario();
  } else {
    localStorage.setItem("nombre", miNombre);
    miTitulo.innerHTML = "Bienvenido/a, " + miNombre;
  }
}

if (!localStorage.getItem("nombre")) {
  estableceNombreUsuario();
} else {
  let nombreAlmacenado = localStorage.getItem("nombre");
  miTitulo.textContent = "Bienvenido/a, " + nombreAlmacenado;
}

// Cambiar usuario
miBoton.onclick = function () {
  estableceNombreUsuario();
};
// let helado = "chocolate";
// let respuestaAfirmativa = "Si, amo el helado de chocolate"
// let respuestaAlterna ="Awww, pero mi favorito es el de chocolate..."
// if (helado === "chocolate") {
//   alert(respuestaAfirmativa);
// } else {
//   alert(respuestaAlterna);
// }

// function multiplica(num1, num2) {
//     let resultado = num1 * num2;
//     return resultado;
//   }
/*
Dos maneras de hacer las funciones
document.querySelector("p").onclick = function () {
    alert("¡Ouch! ¡Deja de pincharme!");
  };
document.querySelector("p").onclick =() =>{
    alert("¡Ouch! ¡Deja de pincharme!")
}
*/

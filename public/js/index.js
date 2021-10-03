let main = document.querySelector("main.container");
let subtitle = document.querySelector("h2");
let titleMovie = document.querySelector("h2 a");
var paragraphs = document.querySelectorAll(".informacion p");

let usuarioNombre = window.prompt("Ingrese un nombre");

if (!usuarioNombre || usuarioNombre == "") {
  subtitle.innerHTML += "Invitado";
} else if (usuarioNombre) {
  subtitle.innerHTML += usuarioNombre;
}

subtitle.style.textTransform = "uppercase";
titleMovie.style.color = "#E51B3E";

let background = window.confirm("¿Desea colocar un fondo de pantalla?");

if (background) {
  document.querySelector("body").classList.add("fondo");
}

for (let i = 0; i < paragraphs.length; i++) {
  if (paragraphs[i].innerHTML.length % 2) {
    paragraphs[i].classList.add("destacadoPar");
  } else {
    paragraphs[i].classList.add("destacadoImpar");
  }
}

main.style.display = "block";

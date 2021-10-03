let body = document.querySelector("body");
let title = document.querySelector("h1");

let darkMode = window.confirm("Desea modo oscuro?");

if (darkMode) {
  body.style.backgroundColor = "#7f7f7f";
  body.classList.add("fondoMoviesList");
}

title.innerHTML += "Listado de peliculas".toUpperCase();

title.style.color = "white";
title.style.backgroundColor = "teal";
title.style.padding = "20px";

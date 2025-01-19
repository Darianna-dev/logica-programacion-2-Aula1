// const titulo = document.querySelector("h1");
// const parrafo = document.querySelector(".texto__parrafo");

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function intentoDeUsuario() {
    alert("Click desde el boton");
}

function generarNumeroSecreto(numero) {
    return Math.ceil(Math.random() * numero);
}

asignarTextoElemento("h1", "Juego del Número Secreto");
asignarTextoElemento("p", "Escoge un número del 1 al 10");

let numSecreto = generarNumeroSecreto(10);
console.log(numSecreto);

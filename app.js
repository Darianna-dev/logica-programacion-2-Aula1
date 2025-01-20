let cantidadDeIntentos = 3;
let intento = 1;

const btnIntentar = document.querySelector(".intentar");
const btnNuevoJuego = document.querySelector("#reiniciar");
const body = document.querySelector("body");
const textInput = document.querySelector(".container__input");

let numSecreto = generarNumeroSecreto(10);
console.log(numSecreto);

const reiniciarJuego = () => {
    window.location.href = window.location.href; /* Recarga la página */
    // location.reload();                                    /* Recarga la página */
};

btnNuevoJuego.addEventListener("click", reiniciarJuego);

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function verificarIntento() {
    if (textInput.value === "") {
        asignarTextoElemento("P", `Debe ingresar un número entre 1 y 10`);
        textInput.focus();
        return false;
    }
    let numeroDeUsuario = parseInt(textInput.value);
    console.log(numeroDeUsuario);

    if (numeroDeUsuario === numSecreto) {
        // modal.showModal();
        asignarTextoElemento(
            "P",
            `Acertaste el número en ${intento} ${
                intento === 1 ? "intento" : "intentos"
            }`
        );
        // textInput.setAttribute("disabled", true);        /* desactiva el textInput*/
        textInput.disabled = true; /* desactiva el textInput*/
        btnIntentar.disabled = true;
        btnNuevoJuego.disabled = false;
        // btnNuevoJuego.removeAttribute("disabled");           /* Elimina el Atributo disabled */
        // window.location.href = window.location.href;         /* Recarga la página */
    } else {
        if (intento !== cantidadDeIntentos) {
            console.log("Intento: " + intento);
            if (numeroDeUsuario < numSecreto) {
                asignarTextoElemento("P", "El número es mayor");
                limpiarInput();
            } else {
                asignarTextoElemento("P", "El número es menor");
                limpiarInput();
            }
        } else {
            asignarTextoElemento("P", "Se agotaron los intentos");
            textInput.setAttribute("disabled", true);
            limpiarInput();
            btnIntentar.disabled = true;
            btnNuevoJuego.disabled = false;
        }
        intento++;
    }

    return;
}

function limpiarInput() {
    textInput.value = "";
    textInput.focus();
}

function generarNumeroSecreto(numero) {
    return Math.ceil(Math.random() * numero);
}

asignarTextoElemento("h1", "Juego del Número Secreto");
asignarTextoElemento("p", "Escoge un número del 1 al 10");

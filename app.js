let cantidadDeIntentos = 3;
let intento = 1;

const btnIntentar = document.querySelector(".intentar");
const btnNuevoJuego = document.querySelector("#reiniciar");
const body = document.querySelector("body");

/* **************************************************************************************** */

//*************************** ventana Modal***************************************

// const modal = document.createElement("dialog");
// const textoModal = document.createElement("p");
// const closeModal = document.createElement("button");

// body.appendChild(modal);
// modal.appendChild(textoModal);
// modal.appendChild(closeModal);
// closeModal.textContent = "Cerrar";
// closeModal.onclick = () => modal.close();
// modal.style.width = "300px";
// modal.style.height = "150px";
// modal.style.position = "fixed";
// modal.style.top = "50%";
// modal.style.left = "50%";
// modal.style.transform = "translate(-50%, -50%)";
// modal.style.background = "white";
// modal.style.border = "1px solid black";
// modal.style.padding = "20px";
// modal.style.borderRadius = "10px";
// modal.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.5)";
// modal.style.zIndex = "1000";
// modal.style.display = "none";
// modal.style.textAlign = "center";
// modal.style.fontFamily = "Arial, sans-serif";
// modal.style.fontSize = "16px";
// modal.style.color = "black";
// modal.style.fontWeight = "bold";
// modal.style.textDecoration = "none";
// modal.style.cursor = "pointer";
// modal.style.userSelect = "none";
// modal.style.msUserSelect = "none";
// modal.style.mozUserSelect = "none";
// modal.style.webkitUserSelect = "none";
// modal.style.oUserSelect = "none";
// modal.style.borderSpacing = "0px";
// modal.style.borderCollapse = "separate";
// modal.style.outline = "none";
// modal.style.boxSizing = "border-box";

/* **************************************************************************************** */

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
    const textInput = document.querySelector(".container__input");
    let numeroDeUsuario = parseInt(textInput.value);
    console.log(numeroDeUsuario);

    if (numeroDeUsuario === numSecreto) {
        // modal.showModal();
        alert("¡Has acertado!");
        // textInput.setAttribute("disabled", true);        /* desactiva el textInput*/
        textInput.disabled = true;
        /* desactiva el textInput*/
        btnIntentar.disabled = true;
        btnNuevoJuego.disabled = false;
        // window.location.href = window.location.href;     /* Recarga la página */
    } else {
        if (intento !== cantidadDeIntentos) {
            console.log("Intento: " + intento);
            if (numeroDeUsuario < numSecreto) {
                alert("El número es mayor");
                textInput.value = "";
                textInput.focus();
            } else {
                alert("El número es menor");
                textInput.value = "";
                textInput.focus();
            }
        } else {
            alert("Has agotado los intentos");
            textInput.setAttribute("disabled", true);
            btnIntentar.disabled = true;
            btnNuevoJuego.disabled = false;
        }
        intento++;
    }

    return;
}

function generarNumeroSecreto(numero) {
    return Math.ceil(Math.random() * numero);
}

asignarTextoElemento("h1", "Juego del Número Secreto");
asignarTextoElemento("p", "Escoge un número del 1 al 10");

let numSecreto = generarNumeroSecreto(10);
console.log(numSecreto);

//*************************** ventana Modal***************************************

// const modal = document.createElement("dialog");
// const textoModal = document.createElement("p");
// const closeModal = document.createElement("button");

// body.appendChild(modal);
// modal.appendChild(textoModal);
// modal.appendChild(closeModal);
// closeModal.textContent = "Cerrar";
// closeModal.onclick = () => modal.close();
// modal.style.width = "300px";
// modal.style.height = "150px";
// modal.style.position = "fixed";
// modal.style.top = "50%";
// modal.style.left = "50%";
// modal.style.transform = "translate(-50%, -50%)";
// modal.style.background = "white";
// modal.style.border = "1px solid black";
// modal.style.padding = "20px";
// modal.style.borderRadius = "10px";
// modal.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.5)";
// modal.style.zIndex = "1000";
// modal.style.display = "none";
// modal.style.textAlign = "center";
// modal.style.fontFamily = "Arial, sans-serif";
// modal.style.fontSize = "16px";
// modal.style.color = "black";
// modal.style.fontWeight = "bold";
// modal.style.textDecoration = "none";
// modal.style.cursor = "pointer";
// modal.style.userSelect = "none";
// modal.style.msUserSelect = "none";
// modal.style.mozUserSelect = "none";
// modal.style.webkitUserSelect = "none";
// modal.style.oUserSelect = "none";
// modal.style.borderSpacing = "0px";
// modal.style.borderCollapse = "separate";
// modal.style.outline = "none";
// modal.style.boxSizing = "border-box";

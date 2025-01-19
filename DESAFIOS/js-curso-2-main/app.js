const titulo = document.querySelector("h1");
const botones = document.querySelectorAll(".button");
const botones2 = document.querySelectorAll("button");

console.log(botones);
console.log(botones2);

const [btnConsole, btnAlert, btnPrompt, btnSuma] = [...botones]; // Desestructurcion del NodeList a un Array
console.log(btnConsole);
console.log(btnAlert);
console.log(btnPrompt);
console.log(btnSuma);

titulo.innerHTML = "Hora del Desafío";

btnConsole.addEventListener("click", clickConsole);
btnAlert.addEventListener("click", clickAlert);
btnPrompt.addEventListener("click", clickPrompt);
btnSuma.addEventListener("click", clickSuma);

function clickConsole() {
    console.log("El botón fue clicado");
}

function clickAlert() {
    alert("Yo amo JS");
}

function clickPrompt() {
    const ciudad = prompt("Indique un nombre de uns ciudad");
    alert(`Estuve en ${ciudad} y me acordé de ti`);
}

function clickSuma() {
    const num1 = Number(prompt("Ingrese un número"));
    const num2 = Number(prompt("Ingrese otro número"));
    const resultado = num1 + num2;
    alert(` ${num1} + ${num2} = ${resultado}`);
}

// Recorrer un NodeList
// botones2.forEach((node, index) => {
//     console.log(index, node); // Imprime el índice y el nodo
// });

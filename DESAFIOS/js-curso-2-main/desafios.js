//? **********************************************************************************************************************************************
//? Crea una función que devuelva la posición en la lista donde se encuentra un elemento pasado como parámetro, o -1 si no existe en la lista.
//? **********************************************************************************************************************************************

// const lista = [
//     "HTML",
//     "GO",
//     "CSS",
//     "JS",
//     "NODEJS",
//     "PYTHON",
//     "C#",
//     "C++",
//     "GO",
//     "SWIFT",
//     "KOTLIN",
// ];
// console.log(lista);
// function buscarIndex(elemento) {
//     const listaIndex = [];
//     // let index = null;
//     let primerIndice = null;
//     let ultimoIndice = null;

//     lista.forEach((elem, indice) => {
//         if (elemento == elem) {
//             // index = indice;
//             listaIndex.push(indice);
//             primerIndice = listaIndex[0];
//             ultimoIndice = listaIndex[listaIndex.length - 1];
//         }
//     });

//     if (listaIndex.length === 0) {
//         return console.log("No hay indices para mostrar\n");
//     } else if (listaIndex.length === 1) {
//         // return index1
//         console.log(`El índice es: ${primerIndice}\n`);
//         // console.log(`El último índice es: ${ultimoIndice}`);
//     } else {
//         console.log(`El primer índice es: ${primerIndice}`);
//         console.log(`El último índice es: ${ultimoIndice}\n`);
//     }
// }

// buscarIndex("GO");
// buscarIndex("JS");

//? **********************************************************************************************************************************************
//? Crea una función que reciba dos listas de números del mismo tamaño y devuelva una nueva lista con la suma de los elementos uno a uno/***********************************************************************************************************************************************
//? **********************************************************************************************************************************************
// const lista1 = [1, 2, 3, 4, 5];
// const lista2 = [6, 7, 8, 9, 10];
// let cantidad = 0;
// let result = null;

// const listaFinal = [];

// function sumaArrays(lista1, lista2) {
//     while (cantidad < lista1.length) {
//         result = lista1[cantidad] + lista2[cantidad];
//         listaFinal.push(result);
//         cantidad++;
//     }
//     result = lista1.concat(lista2);
//     // listaFinal
//     console.log(listaFinal);
// }

// sumaArrays(lista1, lista2);

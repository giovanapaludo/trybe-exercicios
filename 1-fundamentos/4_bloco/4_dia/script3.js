// function verificarPalindromo (palavra) {
//     let palindromo = palavra.split('').reverse().join('');
//     if (palavra === palindromo) {
//         return true;
//     }
//     else {
//         return false;
//     }
// }

// console.log(verificarPalindromo('arara'));


// function indiceMaiorValor (numeros) {
//     let resultado = 0;
//     for (let index in numeros) {
//         if (numeros[index] > numeros[resultado]) {
//             resultado = index;
//         }
//     }
//     return resultado;
// }


// console.log(indiceMaiorValor([4, 5, 2, 7, 1]))


// function indexMenorValor (numeros) {
//     let resultado = 0;
//     for (let index in numeros) {
//         if (numeros[index] < numeros[resultado]) {
//             resultado = index;
//         }
//     }
//     return resultado;
// }

// console.log(indexMenorValor([-2, 5, 4, -6, 7, 3, 8]))


function maiorNome (nomes) {
    let palavra = nomes[0];
    for (let index in nomes) {
        if (nomes[index].length > palavra.length) {
            palavra = nomes[index]
        }
    }
    return palavra;
}

console.log(maiorNome(['Ana', 'Maria', 'Fernanda', 'Carla']))

// function repete (numeros) {
//     let resultado = 0;
//     for (let index in numeros) {
//         if (numeros[index] === )
//     }
// }
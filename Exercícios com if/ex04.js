/* Escreva um programa que leia um número e use uma estrutura  if/else para verificar se o número é par ou ímpar. Imprima uma mensagem apropriada.
*/
function verificarParImpar(numero) {
    if (numero % 2 === 0) {
        console.log(`O número ${numero} é par.`);
    } else {
        console.log(`O número ${numero} é ímpar.`);
    }
}


const numero = parseInt(prompt("Digite um número:"));


if (!isNaN(numero)) {
    verificarParImpar(numero);
} else {
    console.log("Por favor, digite um número válido.");
}    
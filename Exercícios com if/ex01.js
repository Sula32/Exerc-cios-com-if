/* Escreva um programa que leia um número e use uma estrutura if para verificar se o número é positivo, negativo ou zero. Imprima uma
mensagem apropriada para cada caso.*/

function verificarNumero() {
    const numero = parseFloat(prompt("Digite um número:"));

   
    if (numero > 0) {
        console.log("O número é positivo.");
    } else if (numero < 0) {
        console.log("O número é negativo.");
    } else {
        console.log("O número é zero.");
    }
}


verificarNumero();
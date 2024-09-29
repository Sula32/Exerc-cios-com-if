/* Escreva um programa que leia um número de 1 a 4 e use uma estrutura switch para imprimir a estação do ano correspondente. (1 =
Primavera, 2 = Verão, 3 = Outono, 4 = Inverno)*/

function obterEstacaoDoAno(numero) {
    switch (numero) {
        case 1:
            console.log("Primavera");
            break;
        case 2:
            console.log("Verão");
            break;
        case 3:
            console.log("Outono");
            break;
        case 4:
            console.log("Inverno");
            break;
        default:
            console.log("Número inválido! Por favor, insira um número de 1 a 4.");
            break;
    }
}

// Leitura do número
const numero = parseInt(prompt("Digite um número de 1 a 4:"));

// Chamada da função
obterEstacaoDoAno(numero);

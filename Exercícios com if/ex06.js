/* Escreva um programa que leia um número de 1 a 7 e use uma estrutura switch para imprimir o dia da semana correspondente. (1 =
Domingo, 2 = Segunda-feira, etc.)*/
// Função para obter o dia da semana
function obterDiaDaSemana(numero) {
    switch (numero) {
        case 1:
            return "Domingo";
        case 2:
            return "Segunda-feira";
        case 3:
            return "Terça-feira";
        case 4:
            return "Quarta-feira";
        case 5:
            return "Quinta-feira";
        case 6:
            return "Sexta-feira";
        case 7:
            return "Sábado";
        default:
            return "Número inválido! Por favor, digite um número de 1 a 7.";
    }
}

// Leitura do número
const numero = parseInt(prompt("Digite um número de 1 a 7:"));

// Imprimindo o dia da semana correspondente
const diaDaSemana = obterDiaDaSemana(numero);
console.log(diaDaSemana);
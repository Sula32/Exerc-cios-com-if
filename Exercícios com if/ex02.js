/* Escreva um programa que leia um ano e use uma estrutura if para verificar se o ano é bissexto. Um ano é bissexto se for divisível por 4,
mas não por 100, exceto se também for divisível por 400. Imprima uma mensagem apropriada.*/

// Função para verificar se um ano é bissexto
function verificarAnoBissexto(ano) {
    if ((ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0)) {
        console.log(`${ano} é um ano bissexto.`);
    } else {
        console.log(`${ano} não é um ano bissexto.`);
    }
}

// Lê um ano do usuário
const anoInput = prompt("Digite um ano:");
const ano = parseInt(anoInput);

// Verifica se o ano é bissexto
verificarAnoBissexto(ano);
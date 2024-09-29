/* Escreva um programa que leia três notas de um aluno, calcule a média e use uma estrutura if/else para determinar o conceito (A, B, C, D, E, F) baseado na média. Imprima o conceito.
*/
// Função para calcular a média e determinar o conceito
function calcularConceito() {
    // Lê as notas do aluno
    let nota1 = parseFloat(prompt("Digite a primeira nota:"));
    let nota2 = parseFloat(prompt("Digite a segunda nota:"));
    let nota3 = parseFloat(prompt("Digite a terceira nota:"));
    
    // Calcula a média
    let media = (nota1 + nota2 + nota3) / 3;
    
    // Inicializa a variável conceito
    let conceito;

    // Determina o conceito baseado na média
    if (media >= 9) {
        conceito = 'A';
    } else if (media >= 7.5) {
        conceito = 'B';
    } else if (media >= 6) {
        conceito = 'C';
    } else if (media >= 4) {
        conceito = 'D';
    } else if (media >= 0) {
        conceito = 'E';
    } else {
        conceito = 'F'; // Para médias negativas, o conceito é F
    }

    // Imprime o conceito
    console.log(`A média do aluno é: ${media.toFixed(2)} e o conceito é: ${conceito}`);
}

// Chama a função
calcularConceito();
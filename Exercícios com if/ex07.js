/* Escreva um programa que leia dois números e um operador (+, -, *, /) e use uma estrutura switch para calcular o resultado da operação.
Imprima o resultado.*/
function calcular() {
    // Lê os números e o operador do usuário
    const num1 = parseFloat(prompt("Digite o primeiro número:"));
    const num2 = parseFloat(prompt("Digite o segundo número:"));
    const operador = prompt("Digite o operador (+, -, *, /):");
  
    let resultado;
  
    // Estrutura switch para determinar a operação
    switch (operador) {
      case '+':
        resultado = num1 + num2;
        break;
      case '-':
        resultado = num1 - num2;
        break;
      case '*':
        resultado = num1 * num2;
        break;
      case '/':
        if (num2 !== 0) {
          resultado = num1 / num2;
        } else {
          resultado = "Erro: Divisão por zero!";
        }
        break;
      default:
        resultado = "Operador inválido!";
    }
  
    // Imprime o resultado
    console.log(`Resultado: ${resultado}`);
  }
  
  // Chama a função para executar o cálculo
  calcular();

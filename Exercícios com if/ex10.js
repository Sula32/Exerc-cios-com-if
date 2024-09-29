/* Escreva um programa que leia o peso (kg) e a altura (m) de uma pessoa, calcule o Índice de Massa Corporal (IMC) e use uma estrutura
if/else para determinar a categoria:
            Abaixo do peso: IMC < 18.5
            Peso normal: IMC 18.5 - 24.9
            Sobrepeso: IMC 25 - 29.9
            Obesidade grau I: IMC 30 - 34.9
            Obesidade grau II: IMC 35 - 39.9
            Obesidade grau III: IMC >= 40*/

            function calcularIMC(peso, altura) {
                return peso / (altura * altura);
            }
            
            // Função para determinar a categoria com base no IMC
            function determinarCategoria(imc) {
                if (imc < 18.5) {
                    return "Abaixo do peso";
                } else if (imc >= 18.5 && imc < 24.9) {
                    return "Peso normal";
                } else if (imc >= 25 && imc < 29.9) {
                    return "Sobrepeso";
                } else {
                    return "Obesidade";
                }
            }
            
            // Lê o peso e a altura do usuário
            const peso = parseFloat(prompt("Digite seu peso em kg:"));
            const altura = parseFloat(prompt("Digite sua altura em metros:"));
            
            // Calcula o IMC
            const imc = calcularIMC(peso, altura);
            
            // Determina a categoria
            const categoria = determinarCategoria(imc);
            
            // Exibe o resultado
            console.log(`Seu IMC é: ${imc.toFixed(2)}`);
            console.log(`Categoria: ${categoria}`);
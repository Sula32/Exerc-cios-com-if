/* Escreva um programa que leia a idade de uma pessoa e use uma estrutura if/else para determinar a faixa etária:
            Criança: 0 - 12 anos
            Adolescente: 13 - 17 anos
            Adulto: 18 - 59 anos
            Idoso: 60 anos ou mais*/

            function determinarFaixaEtaria(idade) {
                if (idade >= 0 && idade <= 12) {
                    return "Criança";
                } else if (idade >= 13 && idade <= 17) {
                    return "Adolescente";
                } else if (idade >= 18 && idade <= 59) {
                    return "Adulto";
                } else if (idade >= 60) {
                    return "Idoso";
                } else {
                    return "Idade inválida"; // Para idades negativas
                }
            }
            
            // Leitura da idade
            const idade = parseInt(prompt("Digite a sua idade:"));
            
            // Determinando a faixa etária
            const faixaEtaria = determinarFaixaEtaria(idade);
            
            // Exibindo o resultado
            console.log("Você é: " + faixaEtaria);
/* Escreva um programa que leia a idade de um nadador e use uma estrutura if/else para determinar a categoria do nadador de acordo com a idade:
            Infantil A: 5 - 7 anos
            Infantil B: 8 - 10 anos
            Juvenil A: 11 - 13 anos
            Juvenil B: 14 - 17 anos
            Adulto: 18 anos ou mais */

            function determinarCategoria(idade) {
                if (idade >= 5 && idade <= 7) {
                    return "Infantil A";
                } else if (idade >= 8 && idade <= 10) {
                    return "Infantil B";
                } else if (idade >= 11 && idade <= 13) {
                    return "Juvenil A";
                } else if (idade >= 14 && idade <= 17) {
                    return "Juvenil B";
                } else if (idade >= 18) {
                    return "Adulto";
                } else {
                    return "Idade inválida para nadadores.";
                }
            }
            
            // Leitura da idade do nadador
            const idadeNadador = parseInt(prompt("Digite a idade do nadador:"));
            
            // Determinando a categoria
            const categoria = determinarCategoria(idadeNadador);
            
            // Exibindo a categoria
            alert("A categoria do nadador é: " + categoria);
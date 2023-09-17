function calculadora() {
    //serve para pegar entrada do usuario
    const operacao = Number(prompt("Escoha uma operação:\n 1 - Soma (+)\n 2 - Subtração (-)\n 3 - Multiplicação (*)\n 4 - Divisão (/)\n 5 - Divisão inteira (%)\n 6 - Potenciação (**)"));

    if (!operacao || !operacao > 6) {
        alert("Opção inválida!")
        calculadora();
    } else {
        let num1 = Number(prompt("Insira o primeiro valor: "));
        let num2 = Number(prompt("Insita o segundo valor: "));
        let result;

        if (!num1 || !num2) {
            alert("Erro! Parametros inválidos.")
            calculadora();
        } else {
            function soma() {
                result = num1 + num2;
                alert(`${num1} + ${num2} = ${result}`);
                novaOperacao()
            }
            function subtracao() {
                result = num1 - num2;
                alert(`${num1} - ${num2} = ${result}`);
                novaOperacao()
            }
            function multiplicacao() {
                result = num1 * num2;
                alert(`${num1} * ${num2} = ${result}`);
                novaOperacao()
            }
            function divisao() {
                result = num1 / num2;
                alert(`${num1} / ${num2} = ${result}`);
                novaOperacao()
            }
            function divisaoInteira() {
                result = num1 % num2;
                alert(`${num1} % ${num2} = ${result}`);
                novaOperacao()
            }
            function potenciacao() {
                result = num1 ** num2;
                alert(`${num1} ** ${num2} = ${result}`);
                novaOperacao()
            }
            function novaOperacao() {
                let opcao = prompt("Deseja fazer outra operação?\n 1 - Sim\n 2 - Não");
                if (opcao == 1) {
                    calculadora();
                } else if (opcao == 2) {
                    alert("Até mais!");
                } else {
                    alert("Opção inválida, digite novamente uma opção valida!");
                    novaOperacao();
                }
            }
        }
        switch (operacao) {
            case 1:
                soma();
                break;
            case 2:
                subtracao();
                break;
            case 3:
                multiplicacao();
                break;
            case 4:
                divisao();
                break;
            case 5:
                divisaoInteira();
                break;
            case 6:
                potenciacao();
                break;
        }
    }
}
calculadora();

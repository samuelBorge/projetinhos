// Criamos uma função chamada calcular
function calcular() {

    // Pega o primeiro input
    // .value pega o que o usuário digitou
    // Number transforma o texto em número
    const numero1 = Number(
        document.getElementById("numero1").value
    );

    // Pega o segundo número
    const numero2 = Number(
        document.getElementById("numero2").value
    );

    // Pega a operação escolhida
    const operacao =
        document.getElementById("operacao").value;

    // Criamos uma variável para guardar o resultado
    let resultado;


    // Se a operação for +
    if (operacao === "+") {

        // Faz a soma
        resultado = numero1 + numero2;
    }


    // Se a operação for -
    else if (operacao === "-") {

        // Faz a subtração
        resultado = numero1 - numero2;
    }


    // Se a operação for *
    else if (operacao === "*") {

        // Faz a multiplicação
        resultado = numero1 * numero2;
    }


    // Se a operação for /
    else if (operacao === "/") {

        // Antes de dividir,
        // verificamos se o segundo número é zero
        if (numero2 === 0) {

            // Mostra mensagem de erro
            document.getElementById("resultado")
                .textContent =
                "Não é possível dividir por zero!";

            // Para a função
            return;
        }

        // Faz a divisão
        resultado = numero1 / numero2;
    }


    // Pega o elemento que possui id="resultado"
    // e troca o texto dele
    document.getElementById("resultado")
        .textContent =
        "Resultado: " + resultado;
}
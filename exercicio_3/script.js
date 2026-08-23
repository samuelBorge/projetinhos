// =========================================================
// EXERCÍCIO 3 - CALCULADORA
// Utilizando: Arrays, Objetos, Funções, Eventos, querySelector, addEventListener
// =========================================================

// 1. SELEÇÃO DOS ELEMENTOS DO DOM COM querySelector
const num1Input = document.querySelector("#numero1");
const num2Input = document.querySelector("#numero2");
const operacaoSelect = document.querySelector("#operacao");
const btnCalcular = document.querySelector("#btnCalcular");
const resultadoBox = document.querySelector("#resultadoBox");

// 2. ARRAY DE HISTÓRICO DE CÁLCULOS
const historicoCalculos = [];

// 3. FUNÇÃO PRINCIPAL DE CÁLCULO
function calcular() {
    const num1 = Number(num1Input.value);
    const num2 = Number(num2Input.value);
    const operacao = operacaoSelect.value;
    let resultado = 0;

    // Verifica se os campos foram preenchidos
    if (num1Input.value === "" || num2Input.value === "") {
        resultadoBox.className = "alert alert-warning text-center mt-4 mb-0 fw-bold fs-6";
        resultadoBox.textContent = "Por favor, digite os dois números!";
        return;
    }

    // Executa a operação matemática
    if (operacao === "+") {
        resultado = num1 + num2;
    } else if (operacao === "-") {
        resultado = num1 - num2;
    } else if (operacao === "*") {
        resultado = num1 * num2;
    } else if (operacao === "/") {
        // Validação de divisão por zero
        if (num2 === 0) {
            resultadoBox.className = "alert alert-danger text-center mt-4 mb-0 fw-bold fs-6";
            resultadoBox.textContent = "Não é possível dividir por zero!";
            return;
        }
        resultado = num1 / num2;
    }

    // Cria um OBJETO com o cálculo realizado
    const registroCalculo = {
        primeiroNumero: num1,
        operador: operacao,
        segundoNumero: num2,
        resultadoFinal: resultado
    };

    // Salva no ARRAY
    historicoCalculos.push(registroCalculo);

    // Atualiza a MANIPULAÇÃO DO DOM
    resultadoBox.className = "alert alert-success text-center mt-4 mb-0 fw-bold fs-5";
    resultadoBox.textContent = `Resultado: ${resultado}`;
}

// 4. EVENTOS (addEventListener)
btnCalcular.addEventListener("click", calcular);
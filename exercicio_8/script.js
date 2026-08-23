// =========================================================
// EXERCÍCIO 8 - QUIZ DE INFORMÁTICA
// Utilizando: Arrays, Objetos, Funções, Eventos, querySelector, addEventListener
// =========================================================

// 1. ARRAY DE OBJETOS COM AS PERGUNTAS DO QUIZ
const perguntas = [
    {
        pergunta: "1. O que significa a sigla HTML?",
        respostas: [
            "HyperText Markup Language",
            "HighText Machine Language",
            "Hyper Tool Multi Language",
            "Home Tool Markup Language"
        ],
        correta: 0
    },
    {
        pergunta: "2. Qual linguagem é usada para estilizar páginas web?",
        respostas: [
            "HTML",
            "CSS",
            "Java",
            "SQL"
        ],
        correta: 1
    },
    {
        pergunta: "3. Qual linguagem é usada para programação interativa no navegador?",
        respostas: [
            "JavaScript",
            "HTML",
            "CSS",
            "SQL"
        ],
        correta: 0
    },
    {
        pergunta: "4. Qual comando mostra mensagens no console do JavaScript?",
        respostas: [
            "print()",
            "console.log()",
            "write()",
            "show()"
        ],
        correta: 1
    },
    {
        pergunta: "5. Qual propriedade CSS altera a cor do texto?",
        respostas: [
            "background",
            "font",
            "color",
            "text"
        ],
        correta: 2
    }
];

// 2. SELEÇÃO DE ELEMENTOS DO DOM COM querySelector
const perguntaElemento = document.querySelector("#pergunta");
const respostasContainer = document.querySelector("#respostas");
const btnProximo = document.querySelector("#btnProximo");
const feedbackAlert = document.querySelector("#feedbackAlert");
const resultadoFinal = document.querySelector("#resultadoFinal");

let indiceAtual = 0;
let pontos = 0;

// 3. FUNÇÃO PARA CARREGAR A PERGUNTA ATUAL NO DOM
function carregarPergunta() {
    // Esconde feedback e desativa botão próximo
    feedbackAlert.className = "alert d-none";
    btnProximo.disabled = true;

    const perguntaAtual = perguntas[indiceAtual];
    perguntaElemento.textContent = perguntaAtual.pergunta;

    // Limpa respostas anteriores
    respostasContainer.innerHTML = "";

    // Cria os botões para cada resposta
    perguntaAtual.respostas.forEach(function(resposta, index) {
        const botao = document.createElement("button");
        botao.className = "btn btn-resposta";
        botao.textContent = resposta;

        // 4. EVENTO AO CLICAR NA RESPOSTA (addEventListener)
        botao.addEventListener("click", function() {
            verificarResposta(index);
        });

        respostasContainer.appendChild(botao);
    });
}

// 5. FUNÇÃO PARA VERIFICAR A RESPOSTA
function verificarResposta(indiceEscolhido) {
    const correta = perguntas[indiceAtual].correta;
    const botoes = document.querySelectorAll(".btn-resposta");

    // Desativa todos os botões após a escolha
    botoes.forEach(b => b.disabled = true);

    if (indiceEscolhido === correta) {
        pontos++;
        botoes[indiceEscolhido].classList.add("btn-success");
        botoes[indiceEscolhido].classList.remove("btn-resposta");
        feedbackAlert.textContent = "✓ Parabéns! Resposta Correta!";
        feedbackAlert.className = "alert alert-success text-center fw-bold d-block";
    } else {
        botoes[indiceEscolhido].classList.add("btn-danger");
        botoes[indiceEscolhido].classList.remove("btn-resposta");
        botoes[correta].classList.add("btn-success");
        botoes[correta].classList.remove("btn-resposta");
        feedbackAlert.textContent = "✗ Que pena! Resposta Incorreta.";
        feedbackAlert.className = "alert alert-danger text-center fw-bold d-block";
    }

    btnProximo.disabled = false;
}

// 6. FUNÇÃO PARA AVANÇAR OU FINALIZAR
function proximaPergunta() {
    indiceAtual++;

    if (indiceAtual < perguntas.length) {
        carregarPergunta();
    } else {
        // Final do Quiz
        perguntaElemento.textContent = "Quiz Concluído!";
        respostasContainer.innerHTML = "";
        feedbackAlert.className = "alert d-none";
        btnProximo.style.display = "none";

        resultadoFinal.className = "alert alert-success text-center mt-3 d-block fw-bold fs-5";
        resultadoFinal.textContent = `Você acertou ${pontos} de ${perguntas.length} perguntas! 🎉`;
    }
}

// Evento do botão próximo
btnProximo.addEventListener("click", proximaPergunta);

// Inicia o quiz
carregarPergunta();
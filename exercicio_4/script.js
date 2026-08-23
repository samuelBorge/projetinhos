// =========================================================
// EXERCÍCIO 4 - LISTA DE TAREFAS
// Utilizando: Arrays, Objetos, Funções, Eventos, querySelector, addEventListener
// =========================================================

// 1. SELEÇÃO DOS ELEMENTOS DO DOM COM querySelector
const tarefaInput = document.querySelector("#tarefaInput");
const btnAdicionar = document.querySelector("#btnAdicionar");
const lista = document.querySelector("#lista");
const alertaVazio = document.querySelector("#alertaVazio");

// 2. ARRAY DE OBJETOS COM AS TAREFAS
const arrayTarefas = [
    { id: 1, texto: "Estudar lógica de programação", concluida: false },
    { id: 2, texto: "Criar exercícios com Bootstrap", concluida: false }
];

// 3. FUNÇÃO PARA RENDERIZAR AS TAREFAS NO DOM
function renderizarTarefas() {
    lista.innerHTML = "";

    if (arrayTarefas.length === 0) {
        alertaVazio.classList.remove("d-none");
        return;
    }

    alertaVazio.classList.add("d-none");

    arrayTarefas.forEach(function(tarefa, index) {
        const item = document.createElement("li");
        item.className = "list-group-item d-flex justify-content-between align-items-center";

        const textoSpan = document.createElement("span");
        textoSpan.textContent = tarefa.texto;
        textoSpan.style.cursor = "pointer";

        if (tarefa.concluida) {
            textoSpan.classList.add("tarefa-concluida");
        }

        // Evento de clique para marcar como concluída
        textoSpan.addEventListener("click", function() {
            tarefa.concluida = !tarefa.concluida;
            renderizarTarefas();
        });

        // Botão de remover (Bootstrap Button)
        const btnRemover = document.createElement("button");
        btnRemover.className = "btn btn-danger btn-sm";
        btnRemover.textContent = "Remover";

        btnRemover.addEventListener("click", function() {
            // Remove do Array pelo índice
            arrayTarefas.splice(index, 1);
            renderizarTarefas();
        });

        item.appendChild(textoSpan);
        item.appendChild(btnRemover);
        lista.appendChild(item);
    });
}

// 4. FUNÇÃO PARA ADICIONAR NOVA TAREFA
function adicionarTarefa() {
    const texto = tarefaInput.value.trim();

    if (texto === "") {
        alert("Por favor, digite uma tarefa!");
        tarefaInput.focus();
        return;
    }

    // Cria um novo OBJETO
    const novaTarefa = {
        id: Date.now(),
        texto: texto,
        concluida: false
    };

    // Adiciona ao ARRAY
    arrayTarefas.push(novaTarefa);

    // Limpa o input
    tarefaInput.value = "";
    tarefaInput.focus();

    // Atualiza a tela
    renderizarTarefas();
}

// 5. EVENTOS (addEventListener)
btnAdicionar.addEventListener("click", adicionarTarefa);

tarefaInput.addEventListener("keydown", function(evento) {
    if (evento.key === "Enter") {
        adicionarTarefa();
    }
});

// Executa a primeira renderização
renderizarTarefas();
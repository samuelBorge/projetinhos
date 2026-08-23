// =========================================================
// EXERCÍCIO 10 - SISTEMA DE NOTAS
// Utilizando: Arrays, Objetos, Funções, Eventos, querySelector, addEventListener
// =========================================================

// 1. ARRAY DE OBJETOS COM OS ALUNOS
const listaAlunos = [
    { id: 1, nome: "Samuel Borges", nota1: 9.0, nota2: 10.0 },
    { id: 2, nome: "Ana Carolina", nota1: 8.0, nota2: 7.5 },
    { id: 3, nome: "Carlos Eduardo", nota1: 5.0, nota2: 6.0 },
    { id: 4, nome: "Bruno Lima", nota1: 4.0, nota2: 3.5 }
];

// 2. SELEÇÃO DE ELEMENTOS DO DOM COM querySelector
const formAluno = document.querySelector("#formAluno");
const nomeInput = document.querySelector("#nome");
const nota1Input = document.querySelector("#nota1");
const nota2Input = document.querySelector("#nota2");
const tabelaAlunos = document.querySelector("#tabelaAlunos");
const alertaNotas = document.querySelector("#alertaNotas");

// Elementos de Estatísticas
const statTotal = document.querySelector("#statTotal");
const statMedia = document.querySelector("#statMedia");
const statAprovados = document.querySelector("#statAprovados");
const statAtencao = document.querySelector("#statAtencao");

// 3. FUNÇÃO PARA RENDERIZAR A TABELA E ATUALIZAR ESTATÍSTICAS
function renderizarTabela() {
    tabelaAlunos.innerHTML = "";

    if (listaAlunos.length === 0) {
        tabelaAlunos.innerHTML = `
            <tr>
                <td colspan="6" class="text-secondary py-4">Nenhum estudante cadastrado no momento.</td>
            </tr>
        `;
        atualizarEstatisticas(0, 0, 0, 0);
        return;
    }

    let somaMedias = 0;
    let aprovados = 0;
    let atencao = 0;

    listaAlunos.forEach(function(aluno, index) {
        const media = (aluno.nota1 + aluno.nota2) / 2;
        somaMedias += media;

        let situacao = "Aprovado";
        let badgeClasse = "bg-success bg-opacity-25 text-success border border-success border-opacity-25";

        if (media >= 7) {
            situacao = "Aprovado";
            aprovados++;
        } else if (media >= 5) {
            situacao = "Recuperação";
            badgeClasse = "bg-warning bg-opacity-25 text-warning border border-warning border-opacity-25";
            atencao++;
        } else {
            situacao = "Reprovado";
            badgeClasse = "bg-danger bg-opacity-25 text-danger border border-danger border-opacity-25";
            atencao++;
        }

        const linha = document.createElement("tr");

        linha.innerHTML = `
            <td class="fw-bold text-start ps-3 text-white">${aluno.nome}</td>
            <td class="font-monospace">${aluno.nota1.toFixed(1)}</td>
            <td class="font-monospace">${aluno.nota2.toFixed(1)}</td>
            <td class="fw-bold font-monospace">${media.toFixed(1)}</td>
            <td><span class="badge ${badgeClasse} px-3 py-1 rounded-pill">${situacao}</span></td>
            <td>
                <button class="btn btn-outline-danger btn-sm rounded-pill px-3 btn-remover" data-index="${index}">
                    Remover
                </button>
            </td>
        `;

        // 4. EVENTO DE REMOÇÃO (addEventListener)
        const btnRemover = linha.querySelector(".btn-remover");
        btnRemover.addEventListener("click", function() {
            listaAlunos.splice(index, 1);
            renderizarTabela();
        });

        tabelaAlunos.appendChild(linha);
    });

    const mediaTurma = somaMedias / listaAlunos.length;
    atualizarEstatisticas(listaAlunos.length, mediaTurma, aprovados, atencao);
}

// 5. FUNÇÃO PARA ATUALIZAR OS NÚMEROS DO TOPO
function atualizarEstatisticas(total, media, aprovados, atencao) {
    statTotal.textContent = total;
    statMedia.textContent = total > 0 ? media.toFixed(1) : "0.0";
    statAprovados.textContent = aprovados;
    statAtencao.textContent = atencao;
}

// 6. FUNÇÃO PARA ADICIONAR NOVO ESTUDANTE
function adicionarAluno(evento) {
    evento.preventDefault();

    const nome = nomeInput.value.trim();
    const nota1 = Number(nota1Input.value);
    const nota2 = Number(nota2Input.value);

    // Validações
    if (nome === "") {
        alertaNotas.textContent = "Digite o nome do estudante!";
        alertaNotas.className = "alert alert-warning border border-warning border-opacity-25 bg-warning bg-opacity-10 text-warning d-block";
        return;
    }

    if (nota1 < 0 || nota1 > 10 || nota2 < 0 || nota2 > 10) {
        alertaNotas.textContent = "As notas devem estar entre 0 e 10!";
        alertaNotas.className = "alert alert-warning border border-warning border-opacity-25 bg-warning bg-opacity-10 text-warning d-block";
        return;
    }

    // Cria o OBJETO
    const novoAluno = {
        id: Date.now(),
        nome: nome,
        nota1: nota1,
        nota2: nota2
    };

    // Adiciona ao ARRAY
    listaAlunos.unshift(novoAluno);

    // Mensagem de sucesso
    alertaNotas.textContent = `Estudante ${nome} cadastrado com sucesso!`;
    alertaNotas.className = "alert alert-success border border-success border-opacity-25 bg-success bg-opacity-10 text-success d-block";

    // Limpa o formulário
    formAluno.reset();
    nomeInput.focus();

    // Atualiza a tabela
    renderizarTabela();
}

// Limpar todos os registros
function limparTodos() {
    if (listaAlunos.length === 0) return;
    if (confirm("Deseja apagar todos os estudantes da lista?")) {
        listaAlunos.length = 0;
        renderizarTabela();
    }
}

// Evento de envio do formulário
formAluno.addEventListener("submit", adicionarAluno);

// Inicialização
renderizarTabela();
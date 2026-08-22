// Função para adicionar um aluno
function adicionarAluno() {

    // Pega o nome
    const nome =
        document.getElementById("nome")
            .value.trim();
    // Pega a primeira nota
    // Number transforma o texto em número
    const nota1 = Number(
        document.getElementById("nota1").value
    );


    // Pega a segunda nota
    const nota2 = Number(
        document.getElementById("nota2").value
    );


    // Verifica se o nome está vazio
    if (nome === "") {
        alert("Digite o nome do aluno.");
        return;
    }


    // Verifica se as notas são válidas
    if (
        nota1 < 0 ||
        nota1 > 10 ||
        nota2 < 0 ||
        nota2 > 10
    ) {

        alert(
            "As notas devem estar entre 0 e 10."
        );

        return;
    }


    /*
        Calcula a média:

        nota1 + nota2
        ----------------
                2
    */

    const media = (nota1 + nota2) / 2;


    // Variáveis para guardar a situação
    let situacao;
    let classe;


    /*
        Se a média for 7 ou maior,
        o aluno está aprovado.
    */
    if (media >= 7) {

        situacao = "Aprovado";
        classe = "aprovado";
    }


    /*
        Se for menor que 7,
        mas maior ou igual a 5.
    */
    else if (media >= 5) {

        situacao = "Recuperação";
        classe = "recuperacao";
    }


    /*
        Se não passou nas condições anteriores,
        significa que a média é menor que 5.
    */
    else {

        situacao = "Reprovado";

        classe = "reprovado";
    }


    // Pega o corpo da tabela
    const tabela =
        document.getElementById("tabelaAlunos");


    // Cria uma nova linha <tr>
    const linha =
        document.createElement("tr");


    /*
        Montamos o conteúdo da linha.

        toFixed(1)
        deixa somente uma casa decimal.

        Exemplo:
        7 vira 7.0
    */
    linha.innerHTML = `

        <td>${nome}</td>

        <td>${nota1.toFixed(1)}</td>

        <td>${nota2.toFixed(1)}</td>

        <td>${media.toFixed(1)}</td>

        <td class="${classe}">
            ${situacao}
        </td>

        <td>

            <button onclick="removerAluno(this)">
                Remover
            </button>

        </td>

    `;

    // Coloca a nova linha na tabela
    tabela.appendChild(linha);

    // Limpa o nome
    document.getElementById("nome").value = "";

    // Limpa a nota 1
    document.getElementById("nota1").value = "";

    // Limpa a nota 2
    document.getElementById("nota2").value = "";
}


// Função para remover aluno
function removerAluno(botao) {

    /*
        botao
        ↓
        <button>

        parentElement
        ↓
        <td>

        parentElement novamente
        ↓
        <tr>

        Então removemos a linha inteira.
    */

    botao.parentElement
        .parentElement
        .remove();
}
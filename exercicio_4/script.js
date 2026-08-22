// Função para adicionar uma tarefa
function adicionarTarefa() {

    // Pega o campo de texto
    const input =
        document.getElementById("tarefa");

    // Pega a lista
    const lista =
        document.getElementById("lista");

    // Pega o texto digitado
    // trim() remove espaços desnecessários
    const texto = input.value.trim();


    // Se o usuário não digitou nada
    if (texto === "") {

        // Mostra aviso
        alert("Digite uma tarefa!");

        // Para a função
        return;
    }


    // Cria um novo elemento <li>
    const item = document.createElement("li");


    // Cria um <span> para o texto
    const span = document.createElement("span");

    // Coloca o texto dentro do span
    span.textContent = texto;


    // Quando clicar no texto da tarefa
    span.addEventListener("click", function() {

        // Adiciona ou remove a classe "concluida"
        span.classList.toggle("concluida");

    });


    // Cria o botão de remover
    const botao = document.createElement("button");

    // Texto do botão
    botao.textContent = "Remover";


    // Quando clicar no botão
    botao.addEventListener("click", function() {

        // Remove a tarefa
        item.remove();

    });


    // Coloca o texto dentro do <li>
    item.appendChild(span);

    // Coloca o botão dentro do <li>
    item.appendChild(botao);


    // Coloca o <li> dentro da lista
    lista.appendChild(item);


    // Limpa o campo de texto
    input.value = "";
}
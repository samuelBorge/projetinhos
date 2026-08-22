// Pega o formulário pelo ID
const form = document.getElementById("formCadastro");

// Pega o elemento onde aparecerá a mensagem
const mensagem = document.getElementById("mensagem");

// Detecta quando o formulário for enviado
form.addEventListener("submit", function(event) {

    // Impede o navegador de recarregar a página
    event.preventDefault();

    // Pega a senha digitada
    const senha = document.getElementById("senha").value;

    // Pega a confirmação da senha
    const confirmar =
        document.getElementById("confirmarSenha").value;

    // Verifica se as duas senhas são diferentes
    if (senha !== confirmar) {

        // Mostra uma mensagem de erro
        mensagem.textContent =
            "As senhas não são iguais!";

        mensagem.style.color = "red";

        // Para a função aqui
        return;
    }

    // Se chegou aqui, as senhas são iguais
    mensagem.textContent =
        "Cadastro realizado com sucesso!";

    mensagem.style.color = "green";

    // Limpa os campos do formulário
    form.reset();
});
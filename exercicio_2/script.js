// =========================================================
// EXERCÍCIO 2 - VALIDAÇÃO DE CADASTRO
// Utilizando: Arrays, Objetos, Funções, Eventos, querySelector, addEventListener
// =========================================================

// 1. SELEÇÃO DOS ELEMENTOS DO DOM COM querySelector
const form = document.querySelector("#formCadastro");
const nomeInput = document.querySelector("#nome");
const emailInput = document.querySelector("#email");
const telefoneInput = document.querySelector("#telefone");
const senhaInput = document.querySelector("#senha");
const confirmarSenhaInput = document.querySelector("#confirmarSenha");
const alerta = document.querySelector("#mensagemAlerta");

// 2. ARRAY PARA ARMAZENAR OS USUÁRIOS CADASTRADOS
const usuariosCadastrados = [];

// 3. FUNÇÃO PARA EXIBIR MENSAGEM (Alert do Bootstrap)
function exibirMensagem(texto, tipo) {
    alerta.textContent = texto;
    alerta.className = `alert alert-${tipo} d-block`;
}

// 4. FUNÇÃO PARA VALIDAR E SALVAR O USUÁRIO
function processarCadastro(evento) {
    // Impede o recarregamento padrão da página
    evento.preventDefault();

    const senha = senhaInput.value;
    const confirmar = confirmarSenhaInput.value;

    // Verifica se as senhas são iguais
    if (senha !== confirmar) {
        exibirMensagem("As senhas não coincidem! Por favor, digite novamente.", "danger");
        return;
    }

    if (senha.length < 6) {
        exibirMensagem("A senha deve ter pelo menos 6 caracteres!", "warning");
        return;
    }

    // Cria um OBJETO com os dados do usuário
    const novoUsuario = {
        nome: nomeInput.value,
        email: emailInput.value,
        telefone: telefoneInput.value
    };

    // Adiciona o objeto ao ARRAY
    usuariosCadastrados.push(novoUsuario);

    // Mensagem de sucesso
    exibirMensagem(`Cadastro de ${novoUsuario.nome} realizado com sucesso!`, "success");

    // Limpa os campos do formulário
    form.reset();
}

// 5. EVENTO DE SUBMISSÃO (addEventListener)
form.addEventListener("submit", processarCadastro);

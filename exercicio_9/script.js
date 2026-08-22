/*
    async significa que a função pode
    trabalhar com operações assíncronas.
*/

async function carregarUsuarios() {

    // Pega a área dos usuários
    const usuarios =
        document.getElementById("usuarios");

    // Pega a mensagem
    const mensagem =
        document.getElementById("mensagem");


    /*
        try

        Colocamos aqui o código que pode
        gerar um erro.
    */
    try {

        // Faz uma requisição para a API
        const resposta = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );


        // Verifica se houve erro na resposta
        if (!resposta.ok) {

            throw new Error(
                "Erro ao buscar usuários."
            );
        }


        // Converte a resposta para JSON
        const dados = await resposta.json();


        // Remove "Carregando..."
        mensagem.textContent = "";


        // Percorre cada usuário
        dados.forEach(usuario => {

            // Cria uma div
            const card =
                document.createElement("div");


            // Adiciona a classe card
            card.classList.add("card");


            /*
                Cria o conteúdo do cartão.

                ${usuario.name}
                pega o nome.

                ${usuario.email}
                pega o e-mail.

                ${usuario.address.city}
                pega a cidade.
            */
            card.innerHTML = `
                <h2>${usuario.name}</h2>

                <p>
                    <strong>E-mail:</strong>
                    ${usuario.email}
                </p>

                <p>
                    <strong>Cidade:</strong>
                    ${usuario.address.city}
                </p>
            `;


            // Adiciona o cartão na página
            usuarios.appendChild(card);

        });

    /*
        Se alguma coisa der errado,
        o catch será executado.
    */
    } catch (erro) {

        // Mostra mensagem de erro
        mensagem.textContent =
            "Não foi possível carregar os usuários.";

        // Mostra o erro no console
        console.error(erro);
    }
}

// Executa a função
carregarUsuarios();
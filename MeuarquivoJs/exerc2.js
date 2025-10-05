// 1. Selecionar os elementos
const inputNome = document.getElementById('input-nome');
const btnSaudar = document.getElementById('btn-saudar');
const pMensagem = document.getElementById('mensagem-saudacao');

// 2. Adicionar o evento de clique ao botão
btnSaudar.addEventListener('click', () => {
    const nomeDigitado = inputNome.value; // Pega o texto que está dentro do input

    // 3. Verifica se o campo está vazio
    if (nomeDigitado.trim() === "") {
        pMensagem.textContent = "Por favor, digite seu nome.";
    } else {
        pMensagem.textContent = `Olá, ${nomeDigitado}! Seja bem-vindo(a)!`;
    }
});
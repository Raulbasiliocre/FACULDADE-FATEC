// 1. Selecionar os elementos
const pergunta = document.getElementById('pergunta');
const resposta = document.getElementById('resposta');

// 2. Adicionar o evento de clique à pergunta
pergunta.addEventListener('click', () => {
    // 3. Usa classList.toggle para adicionar/remover a classe 'escondido'
    // Se a classe existe, ele a remove (mostrando o elemento).
    // Se não existe, ele a adiciona (escondendo o elemento).
    resposta.classList.toggle('escondido');
});

// 1. Selecionar os elementos do HTML que vamos manipular
const contadorElemento = document.getElementById('contador');
const btnIncrementar = document.getElementById('btn-incrementar');
const btnResetar = document.getElementById('btn-resetar');

// 2. Criar a variável para guardar o estado do contador
let contador = 0;

// 3. Adicionar um "ouvinte de evento" para o clique no botão de incrementar
btnIncrementar.addEventListener('click', () => {
    contador++; // Incrementa a variável
    contadorElemento.textContent = contador; // Atualiza o texto do h2 na tela
});

// 4. Adicionar um "ouvinte de evento" para o clique no botão de resetar
btnResetar.addEventListener('click', () => {
    contador = 0; // Reseta a variável para 0
    contadorElemento.textContent = contador; // Atualiza o texto do h2 na tela
});
// 1. Selecionar os elementos
const imagemEl = document.getElementById('imagem-galeria');
const btnAnterior = document.getElementById('btn-anterior');
const btnProximo = document.getElementById('btn-proximo');

// 2. Criar um array com as URLs das imagens
const imagens = [
    "https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=500",
    "https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?w=500",
    "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500",
    "https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=500"
];

// 3. Criar uma variável para controlar o índice da imagem atual
let indiceAtual = 0;

// 4. Função para atualizar a imagem exibida na tela
function atualizarImagem() {
    imagemEl.src = imagens[indiceAtual];
}

// 5. Adicionar evento de clique para o botão "Próximo"
btnProximo.addEventListener('click', () => {
    indiceAtual++;
    // Se o índice passar do último item, volta para o primeiro (0)
    if (indiceAtual >= imagens.length) {
        indiceAtual = 0;
    }
    atualizarImagem();
});

// 6. Adicionar evento de clique para o botão "Anterior"
btnAnterior.addEventListener('click', () => {
    indiceAtual--;
    // Se o índice for menor que o primeiro (0), vai para o último
    if (indiceAtual < 0) {
        indiceAtual = imagens.length - 1;
    }
    atualizarImagem();
});

// 7. Exibir a primeira imagem ao carregar a página
atualizarImagem();

document.addEventListener('DOMContentLoaded', () => {
    // Selecionar os elementos
    const inputTarefa = document.getElementById('input-tarefa');
    const btnAdicionar = document.getElementById('btn-adicionar');
    const lista = document.getElementById('lista-tarefas');

    if (!inputTarefa || !btnAdicionar || !lista) {
        // Elementos esperados não encontrados — aborta para evitar erros no console
        console.warn('Exercício 5: elementos do DOM não encontrados.');
        return;
    }

    // Funções auxiliares
    function salvarTarefas() {
        const tarefas = [];
        lista.querySelectorAll('li').forEach(li => {
            tarefas.push({
                texto: li.querySelector('.texto-tarefa').textContent,
                feita: li.classList.contains('concluida')
            });
        });
        localStorage.setItem('tarefas', JSON.stringify(tarefas));
    }

    function carregarTarefas() {
        const raw = localStorage.getItem('tarefas');
        if (!raw) return;
        try {
            const tarefas = JSON.parse(raw);
            tarefas.forEach(t => adicionarTarefa(t.texto, t.feita, false));
        } catch (e) {
            console.error('Erro ao carregar tarefas do localStorage', e);
        }
    }

    function criarLi(texto, feita) {
        const li = document.createElement('li');

        const span = document.createElement('span');
        span.className = 'texto-tarefa';
        span.textContent = texto;
        li.appendChild(span);

        // botão concluir/alternar
        const btnToggle = document.createElement('button');
        btnToggle.type = 'button';
        btnToggle.className = 'btn-toggle';
        btnToggle.textContent = feita ? 'Desfazer' : 'Concluir';
        btnToggle.style.marginLeft = '8px';
        li.appendChild(btnToggle);

        // botão remover
        const btnRemover = document.createElement('button');
        btnRemover.type = 'button';
        btnRemover.className = 'btn-remover';
        btnRemover.textContent = 'Remover';
        btnRemover.style.marginLeft = '6px';
        li.appendChild(btnRemover);

        if (feita) li.classList.add('concluida');

        return li;
    }

    function adicionarTarefa(texto, feita = false, salvar = true) {
        const novoItem = criarLi(texto, feita);
        lista.appendChild(novoItem);

        // eventos dos botões
        const btnToggle = novoItem.querySelector('.btn-toggle');
        const btnRemover = novoItem.querySelector('.btn-remover');

        btnToggle.addEventListener('click', () => {
            novoItem.classList.toggle('concluida');
            btnToggle.textContent = novoItem.classList.contains('concluida') ? 'Desfazer' : 'Concluir';
            salvarTarefas();
        });

        btnRemover.addEventListener('click', () => {
            novoItem.remove();
            salvarTarefas();
        });

        if (salvar) salvarTarefas();
    }

    // Eventos: clique e pressionar Enter
    btnAdicionar.addEventListener('click', () => {
        const textoTarefa = inputTarefa.value;
        if (textoTarefa.trim() === '') {
            alert('Por favor, digite uma tarefa.');
            return;
        }
        adicionarTarefa(textoTarefa);
        inputTarefa.value = '';
        inputTarefa.focus();
    });

    inputTarefa.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            btnAdicionar.click();
        }
    });

    // Carrega tarefas salvas ao iniciar
    carregarTarefas();
});
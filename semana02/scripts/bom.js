const input = document.querySelector('#favchap');
const botao = document.querySelector('button');
const lista = document.querySelector('#list');

botao.addEventListener('click', () => {
    if (input.value.trim() !== '') {
        const li = document.createElement('li');
        const botaoExcluir = document.createElement('button');

        li.textContent = input.value;
        botaoExcluir.textContent = '❌';
        botaoExcluir.setAttribute('aria-label', `Excluir ${input.value}`);

        li.append(botaoExcluir);
        lista.append(li);

        botaoExcluir.addEventListener('click', () => {
            lista.removeChild(li);
            input.focus();
        });

        input.value = '';
        input.focus();
    }
});
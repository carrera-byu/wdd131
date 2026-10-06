// ===== DADOS DOS JOGOS - 6 JOGOS OBRIGATÓRIOS =====
const listaDeJogos = [
    { id: 1, nome: "The Witcher 3", genero: "rpg", nota: 10, img: "./imagens/witcher.webp" },
    { id: 2, nome: "Elden Ring", genero: "rpg", nota: 9.8, img: "./imagens/elden.webp" },
    { id: 3, nome: "Zelda Tears", genero: "aventura", nota: 10, img: "./imagens/zelda.webp" },
    { id: 4, nome: "FIFA 24", genero: "esporte", nota: 8.5, img: "./imagens/fifa.webp" },
    { id: 5, nome: "NBA 2K24", genero: "esporte", nota: 8.0, img: "./imagens/nba.webp" },
    { id: 6, nome: "Forza Horizon", genero: "corrida", nota: 9.5, img: "./imagens/forza.webp" }
];

// ===== FUNÇÃO PARA CARREGAR O CATÁLOGO =====
function carregarCatalogo(jogosParaMostrar = listaDeJogos) {
    const container = document.getElementById('catalogo');
    if (!container) return;
    container.innerHTML = '';
    jogosParaMostrar.forEach(jogo => {
        const card = document.createElement('div');
        card.className = 'card-jogo';
        card.innerHTML = `
      <div class="card-imagem">
        <img src="${jogo.img}" alt="${jogo.nome}" loading="lazy">
      </div>
      <div class="card-conteudo">
        <h3>${jogo.nome}</h3>
        <p>Gênero: ${jogo.genero}</p>
        <p>Nota: ${jogo.nota}/10</p>
        <button class="botao-avaliar" onclick="salvarFavorito(${jogo.id})">Avaliar</button>
      </div>
    `;
        container.appendChild(card);
    });
}

function filtrarPorGenero(genero) {
    if (genero === 'todos') {
        carregarCatalogo();
    } else {
        const filtrados = listaDeJogos.filter(jogo => jogo.genero === genero);
        carregarCatalogo(filtrados);
    }
}

function salvarFavorito(idDoJogo) {
    let meusJogos = JSON.parse(localStorage.getItem('meusJogosAvaliados')) || [];
    const jogoEncontrado = listaDeJogos.find(j => j.id === idDoJogo);
    if (!meusJogos.find(j => j.id === idDoJogo)) {
        meusJogos.push(jogoEncontrado);
        localStorage.setItem('meusJogosAvaliados', JSON.stringify(meusJogos));
        alert(`${jogoEncontrado.nome} foi salvo!`);
    } else {
        alert('Este jogo já está na sua lista!');
    }
    window.location.href = 'avaliar.html';
}

document.addEventListener('DOMContentLoaded', () => {
    carregarCatalogo();
});
// ===== HAMBURGUER CELULAR =====
const btnHamburguer = document.getElementById('hamburguer');
const navMenu = document.getElementById('nav');

if (btnHamburguer) {
    btnHamburguer.addEventListener('click', () => {
        navMenu.classList.toggle('ativo');
        btnHamburguer.textContent = navMenu.classList.contains('ativo') ? '✕' : '☰';
    });
}
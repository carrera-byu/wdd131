document.getElementById("ano").textContent = new Date().getFullYear();
document.getElementById("modificacao").textContent = document.lastModified;

const toggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");
toggle.addEventListener("click", () => {
    menu.classList.toggle("ativo");
    toggle.textContent = menu.classList.contains("ativo") ? "✖️" : "☰";
});


const temples = [
    { templeName: "Aba Nigeria", location: "Aba, Nigeria", dedicated: "2005, August, 7", area: 11500, imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg" },
    { templeName: "Manti Utah", location: "Manti, Utah, United States", dedicated: "1888, May, 21", area: 74792, imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg" },
    { templeName: "Payson Utah", location: "Payson, Utah, United States", dedicated: "2015, June, 7", area: 96630, imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg" },
    { templeName: "Yigo Guam", location: "Yigo, Guam", dedicated: "2020, May, 2", area: 6861, imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg" },
    { templeName: "Washington D.C.", location: "Kensington, Maryland, United States", dedicated: "1974, November, 19", area: 156558, imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg" },
    { templeName: "Lima Perú", location: "Lima, Perú", dedicated: "1986, January, 10", area: 9600, imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg" },
    { templeName: "São Paulo Brasil", location: "São Paulo, Brasil", dedicated: "1978, October, 30", area: 59246, imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/sao-paulo-brazil/400x250/sao-paulo-brazil-temple-lds-187030-wallpaper.jpg" },
    { templeName: "Recife Brasil", location: "Recife, Brasil", dedicated: "2000, December, 15", area: 37200, imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/recife-brazil/400x250/recife-brazil-temple-lds-700211-wallpaper.jpg" },

];

const container = document.getElementById("templos-container");
const titulo = document.getElementById("titulo-filtro");

function criarCartoes(lista) {
    container.innerHTML = "";
    lista.forEach(t => {
        let card = document.createElement("section");
        let h3 = document.createElement("h3");
        let p1 = document.createElement("p");
        let p2 = document.createElement("p");
        let p3 = document.createElement("p");
        let img = document.createElement("img");
        h3.textContent = t.templeName;
        p1.innerHTML = `<span class="label">LOCALIZAÇÃO:</span> ${t.location}`;
        p2.innerHTML = `<span class="label">DEDICADO:</span> ${t.dedicated}`;
        p3.innerHTML = `<span class="label">TAMANHO:</span> ${t.area} sq ft`;
        img.src = t.imageUrl;
        img.alt = t.templeName;
        img.loading = "lazy";
        img.width = 400;
        img.height = 250;
        card.append(h3, p1, p2, p3, img);
        container.appendChild(card);
    });
}

// INICIAL - mostra todos
criarCartoes(temples);

// FILTROS QUE A TAREFA PEDE:

// 1. Página Inicial – exibe todos
document.getElementById("home").addEventListener("click", e => {
    e.preventDefault();
    titulo.textContent = "Home";
    criarCartoes(temples);
});

// 2. Antigos – antes de 1900
document.getElementById("old").addEventListener("click", e => {
    e.preventDefault();
    titulo.textContent = "Antigos";
    criarCartoes(temples.filter(t => parseInt(t.dedicated.split(",")[0]) < 1900));
});

// 3. Novos – depois de 2000
document.getElementById("new").addEventListener("click", e => {
    e.preventDefault();
    titulo.textContent = "Novos";
    criarCartoes(temples.filter(t => parseInt(t.dedicated.split(",")[0]) > 2000));
});

// 4. Grandes – maiores que 90.000
document.getElementById("large").addEventListener("click", e => {
    e.preventDefault();
    titulo.textContent = "Grandes";
    criarCartoes(temples.filter(t => t.area > 90000));
});

// 5. Pequenos – menores que 10.000
document.getElementById("small").addEventListener("click", e => {
    e.preventDefault();
    titulo.textContent = "Pequenos";
    criarCartoes(temples.filter(t => t.area < 10000));
});
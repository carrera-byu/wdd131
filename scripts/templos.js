// --- MENU HAMBURGUER ---
const btnMenu = document.getElementById("menu");
const nav = document.querySelector(".navigation");

btnMenu.addEventListener("click", () => {
    btnMenu.classList.toggle("open");
    nav.classList.toggle("open");
});

// --- TEMPLOS ---
const temples = [
    { imageUrl: "imagens/templo-santos-ultimos-dias1.jpeg" },
    { imageUrl: "imagens/templo-santos-ultimos-dias2.jpg" },
    { imageUrl: "imagens/templo-santos-ultimos-dias3.jpg" },
    { imageUrl: "imagens/templo-santos-ultimos-dias4.jpg" },
    { imageUrl: "imagens/templo-santos-ultimos-dias5.jpg" },
    { imageUrl: "imagens/templo-santos-ultimos-dias6.jpg" },
    { imageUrl: "imagens/templo-santos-ultimos-dias7.jpg" },
    { imageUrl: "imagens/templo-santos-ultimos-dias8.jpg" },
    { imageUrl: "imagens/templo-santos-ultimos-dias9.jpg" }
];

const container = document.getElementById("temples-container");

temples.forEach((t, i) => {
    const fig = document.createElement("figure");
    fig.innerHTML = `
    <img src="${t.imageUrl}" alt="Templo ${i + 1}" loading="lazy">
    <figcaption>Templo ${i + 1}</figcaption>
  `;
    container.appendChild(fig);
});

document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = `Última modificação: ${document.lastModified}`;
const produtos = [
    { id: "fc-1888", name: "flux capacitor", avgRating: 4.5 },
    { id: "fc-2050", name: "power laces", avgRating: 4.7 },
    { id: "fs-1987", name: "time circuits", avgRating: 3.5 },
    { id: "ac-2000", name: "low voltage reactor", avgRating: 3.9 },
    { id: "jj-1969", name: "warp equalizer", avgRating: 5.0 }
];

document.addEventListener("DOMContentLoaded", () => {
    const select = document.getElementById("produto");
    if (select) {
        produtos.forEach((prod) => {
            const option = document.createElement("option");
            option.value = prod.id;
            option.textContent = prod.name;
            select.appendChild(option);
        });
    }
    const ano = document.getElementById("ano");
    if (ano) {
        ano.textContent = new Date().getFullYear();
    }
    const mod = document.getElementById("lastModified");
    if (mod) {
        mod.textContent = "Ultima modificacao: " + document.lastModified;
    }
});
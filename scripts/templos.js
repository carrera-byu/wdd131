// Atualiza ano e última modificação
document.getElementById("ano").textContent = new Date().getFullYear();
document.getElementById("modificacao").textContent = document.lastModified;

// Menu hambúrguer
const toggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");

toggle.addEventListener("click", () => {
    menu.classList.toggle("ativo");
    toggle.textContent = menu.classList.contains("ativo") ? "✖" : "☰";
});
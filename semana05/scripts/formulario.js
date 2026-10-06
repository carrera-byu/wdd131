const produtos = [
    { id: "flux", nome: "Flux Capacitor" },
    { id: "power", nome: "Power Laces" },
    { id: "time", nome: "Time Circuits" },
    { id: "low", nome: "Low Voltage Reactor" },
    { id: "warp", nome: "Warp Equalizer" }
];

const select = document.querySelector("#produto");
produtos.forEach(p => {
    const opt = document.createElement("option");
    opt.value = p.id;
    opt.textContent = p.nome;
    select.appendChild(opt);
});

const year = document.querySelector("#year");
if (year) year.textContent = new Date().getFullYear();
const mod = document.querySelector("#lastModified");
if (mod) mod.textContent = document.lastModified;
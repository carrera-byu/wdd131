const products = [
    { id: "fc-1888", name: "Flux Capacitor", averagerating: 4.5 },
    { id: "fc-2050", name: "Power Laces", averagerating: 4.7 },
    { id: "fs-1987", name: "Time Circuits", averagerating: 3.5 },
    { id: "ac-2000", name: "Low Voltage Reactor", averagerating: 3.9 },
    { id: "jj-1969", name: "Warp Equalizer", averagerating: 5.0 }
];

document.addEventListener("DOMContentLoaded", () => {
    // 1. Llena el select
    const select = document.getElementById("produto");
    if (select) {
        products.forEach(product => {
            const option = document.createElement("option");
            option.value = product.id;
            option.textContent = product.name;
            select.appendChild(option);
        });
    }


    // 2. Año actual - UNA SOLA VEZ
    const yearSpan = document.getElementById("currentyear");
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // 3. Última modificación - DENTRO del DOMContentLoaded
    const lastModSpan = document.getElementById("lastModified");
    if (lastModSpan) {
        const lastMod = new Date(document.lastModified);
        const formatted = lastMod.toLocaleString("pt-BR", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit"
        });
        lastModSpan.textContent = `Última Modificação: ${formatted}`;
    }
});
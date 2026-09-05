const ano = document.getElementById("anoatual");
const modificacao = document.getElementById("ultimaModificacao");

ano.textContent = new Date().getFullYear();
modificacao.textContent = `Última modificação: ${document.lastModified}`;
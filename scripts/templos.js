const currentYear = document.querySelector("#currentyear");
const lastModif = document.querySelector("#lastModified");

const today = new Date();
currentYear.textContent = today.getFullYear();
lastModif.textContent = `Ultima Modificação: ${document.lastModified}`;

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});
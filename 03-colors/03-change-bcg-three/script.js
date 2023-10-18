/* becode/javascript
 *
 * /03-colors/03-change-bcg-three/script.js - 3.3: couleur de fond (3)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

// Accéder au bouton via son ID
let randomColorButton = document.getElementById('run');

// Fonction qui change le fond
function changeBackgroundColor(color) {
    document.body.style.backgroundColor = color;
}

// Fonction pour générer une couleur aléatoire
function getRandomColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

// Ajouter un écouteur d'événement au bouton
randomColorButton.addEventListener('click', () => {
    let randomColor = getRandomColor();
    changeBackgroundColor(randomColor);
});

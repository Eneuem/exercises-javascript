/* becode/javascript
 *
 * /03-colors/02-change-bcg-two/script.js - 3.2: couleur de fond (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

// Accéder à l'input via son ID
let colorInput = document.getElementById('color');

// Accéder au bouton via son ID
let applyButton = document.getElementById('run');

// Fonction qui change le fond
function changeBackgroundColor(color) {
    document.body.style.backgroundColor = color;
}

// Ajouter un écouteur d'événement au bouton
applyButton.addEventListener('click', () => {
    // Récupérer la valeur de l'input au moment du clic
    let colorValue = colorInput.value;
    // Appeler la fonction pour changer la couleur de fond
    changeBackgroundColor(colorValue);
});

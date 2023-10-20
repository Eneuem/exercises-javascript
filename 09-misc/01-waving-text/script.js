/* becode/javascript
 *
 * /09-misc/01-waving-text/script.js - 9.1: effet vague
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

// Sélectionnez l'élément cible
let target = document.getElementById('target');

// Obtenez le texte de l'élément cible
let text = target.textContent;

// Divisez le texte en caractères individuels
let characters = text.split('');

// Créez un nouveau tableau pour stocker les caractères modifiés
let waveText = [];

// Parcourez chaque caractère
for (let i = 0; i < characters.length; i++) {
    // Créez un nouvel élément span
    let span = document.createElement('span');
    
    // Définissez le texte du span sur le caractère actuel
    span.textContent = characters[i];
    
    // Définissez la taille de la police du span en fonction de la position du caractère
    let fontSize = 1 + 0.5 * Math.sin((i % 10) * Math.PI / 5);
    span.style.fontSize = fontSize + 'em';
    
    // Ajoutez le span au tableau waveText
    waveText.push(span.outerHTML);
}

// Remplacez le texte original par le nouveau texte modifié
target.innerHTML = waveText.join('');

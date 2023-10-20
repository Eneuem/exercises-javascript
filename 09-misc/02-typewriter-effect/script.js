/* becode/javascript
 *
 * /09-misc/02-typewriter-effect/script.js - 9.2: effet machine à écrire
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

let target = document.getElementById('target');
let text = target.textContent;
let characters = text.split('');
let i = 0;

function typewriter() {
    if (i < characters.length) {
        // Créez un élément span pour le caractère actuel
        let span = document.createElement('span');
        // Définissez le contenu de l'élément span sur le caractère actuel
        span.textContent = characters[i];
        // Ajoutez l'élément span à l'élément cible
        target.appendChild(span);
        // Incrémente le compteur pour le prochain caractère
        i++;
        // Appelez typewriter à nouveau après un délai random pour le prochain caractère
        setTimeout(typewriter, Math.floor(Math.random() * 350));
    }
}

// Vider le texte initial de l'élément cible
target.textContent = '';

// Démarrer l'animation de la dactylographie
typewriter();

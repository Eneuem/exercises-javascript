/* becode/javascript
 *
 * /08-dom/11-change-event-input-one/script.js - 8.11: événement change (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.



// Sélectionnez l'élément input et l'élément de compteur
let inputElement = document.getElementById('pass-one');
let counterElement = document.getElementById('counter');

// Définissez la longueur maximale de la saisie
const maxLength = 10;
inputElement.maxLength = maxLength;

// Fonction pour mettre à jour le compteur
function updateCounter() {
    // Obtenez la longueur actuelle de la saisie de l'utilisateur
    let currentLength = inputElement.value.length;
    
    // Mettez à jour le compteur avec le format 'actuel/max'
    counterElement.textContent = `${currentLength}/${maxLength}`;
}

// Ajoutez un écouteur d'événement pour chaque entrée de l'utilisateur (à chaque frappe)
inputElement.addEventListener('input', updateCounter);

// Initialisez le compteur avec la valeur par défaut
updateCounter();



/* becode/javascript
 *
 * /02-maths/04-sort-numbers/script.js - 2.4: classer des nombres
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

// Étape 1: Attachez un écouteur d'événements au bouton
document.getElementById('run').addEventListener('click', sortNumbers);

function sortNumbers() {
    // Étape 2: Récupérez la valeur de l'input
    let inputStr = document.getElementById('numbers').value;

    // Étape 3: Convertissez la chaîne récupérée en un tableau de nombres
    let numbersArray = inputStr.split(',').map(Number);

    // Étape 4: Trier le tableau de nombres
    numbersArray.sort((a, b) => a - b);

    // Étape 5: Affichez le tableau trié
    alert(numbersArray.join(', '));
}


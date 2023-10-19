/* becode/javascript
 *
 * /05-arrays/01-get-element/script.js - 5.1: élément de tableau
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

// Dans script.js

let fourthElement;  // Déplacez la déclaration de la variable ici

(() => {
    const fruits = [
        "pomme",
        "poire",
        "fraise",
        "tomate",
        "kiwi",
        "banane",
        "orange",
        "mandarine",
        "durian",
        "pêche",
        "raisin",
        "cerise",
    ];

    fourthElement = fruits[3];  // Affectez la valeur ici
})();

const button = document.getElementById('run');

button.addEventListener('click', () => {
    console.log(fourthElement);  // Maintenant, cela devrait fonctionner
});


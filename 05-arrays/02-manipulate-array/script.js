/* becode/javascript
 *
 * /05-arrays/02-manipulate-array/script.js - 5.2: manipulation de tableau
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.
let fruits;

(() => {    
    fruits = [
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

    fruits[0] = "banane";
    fruits[11] = "kiwi";

})();

const button = document.getElementById('run');

button.addEventListener('click', () => {
    alert(fruits);  // Maintenant, cela devrait fonctionner
});

 
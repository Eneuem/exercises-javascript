/* becode/javascript
 *
 * /03-colors/01-change-bcg-one/script.js - 3.1: couleur de fond (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

// Acceder aux boutons via leur ID
let redButton = document.getElementById('red');
let greenButton = document.getElementById('green');
let yellowButton = document.getElementById('yellow');
let blueButton = document.getElementById('blue');

// fonction qui change le fond
function changeBackgroundColor(color) {
    document.body.style.backgroundColor = color;  
}

// Acceder aux écouteurs.
redButton.addEventListener('click', () => changeBackgroundColor('red'));
greenButton.addEventListener('click', () => changeBackgroundColor('green'));
yellowButton.addEventListener('click', () => changeBackgroundColor('yellow'));
blueButton.addEventListener('click', () => changeBackgroundColor('blue'));

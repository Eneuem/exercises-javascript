/* becode/javascript
 *
 * /08-dom/02-select-two/script.js - 8.2: sélection par sélecteur css
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    let targetElement = document.getElementsByClassName('target');
    targetElement[0].innerText = "Owned";
})();

// ALTERNATIVE ( POUR LE 3EME EXERCICE)
// (() => {
//     let targetElement = document.querySelector('.target');
//     targetElement.innerText = "Owned";
// })();

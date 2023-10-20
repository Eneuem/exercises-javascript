/* becode/javascript
 *
 * /08-dom/05-hover-image/script.js - 8.5: survol d'image
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

// Sélectionnez l'élément img
let imgElement = document.querySelector('img');

// Obtenez la valeur originale de l'attribut src
let originalSrc = imgElement.getAttribute('src');

// Obtenez la valeur de l'attribut data-hover
let hoverSrc = imgElement.getAttribute('data-hover');

// Ajoutez un écouteur d'événements pour l'événement mouseover
imgElement.addEventListener('mouseover', () => {
    // Changez l'attribut src à la valeur de l'attribut data-hover
    imgElement.setAttribute('src', hoverSrc);
});

// Ajoutez un écouteur d'événements pour l'événement mouseout
imgElement.addEventListener('mouseout', () => {
    // Changez l'attribut src à sa valeur originale
    imgElement.setAttribute('src', originalSrc);
});


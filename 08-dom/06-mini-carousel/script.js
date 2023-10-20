/* becode/javascript
 *
 * /08-dom/06-mini-carousel/script.js - 8.6: mini carousel
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const gallery = [
        "../../_shared/img/bell.svg",
        "../../_shared/img/clock.svg",
        "../../_shared/img/compass.svg",
        "../../_shared/img/lemon.svg",
        "../../_shared/img/map.svg",
    ];

    // Sélectionnez l'élément button avec l'ID "next" et l'élément img
    let button = document.getElementById('next');
    let imgElement = document.querySelector('img');

    // Initialisez un indice pour suivre l'image actuelle
    let currentIndex = 0;

    // Ajoutez un écouteur d'événements au bouton pour détecter les clics
    button.addEventListener('click', () => {
        // Incrémentez l'indice pour passer à l'image suivante
        currentIndex = (currentIndex + 1) % gallery.length;
        // Changez la source de l'élément img à la prochaine image dans le tableau gallery
        imgElement.setAttribute('src', gallery[currentIndex]);
    });
})();

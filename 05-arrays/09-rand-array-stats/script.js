/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    let button = document.getElementById('run');

button.addEventListener('click', () => {
    // Création d'un tableau vide
    let tableau = [];

    // Génération de 10 nombres aléatoires entre 1 et 100 et ajout dans le tableau
    for (let i = 0; i < 10; i++) {
        let n = Math.floor(Math.random() * 100) + 1;
        tableau.push(n);
    }

    // Calcul des statistiques
    let min = Math.min(...tableau);
    let max = Math.max(...tableau);
    let sum = tableau.reduce((a, b) => a + b, 0);
    let average = sum / tableau.length;

    // Affichage des nombres dans la table
    for (let i = 0; i < tableau.length; i++) {
        document.getElementById(`n-${i + 1}`).innerText = tableau[i];
    }

    // Affichage des statistiques
    document.getElementById('min').innerText = min;
    document.getElementById('max').innerText = max;
    document.getElementById('sum').innerText = sum;
    document.getElementById('average').innerText = average.toFixed(2);  // Arrondi à 2 décimales pour la moyenne
});

})();

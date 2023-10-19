/* becode/javascript
 *
 * /04-dates/01-title-by-hour-one/script.js - 4.1: texte en fonction de l'heure (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

function updateGreeting() {
    let currentDate = new Date();
    let hour = currentDate.getHours();
    let greetingText;

    if (hour >= 18) {
        greetingText = "Bonsoir";
    } else {
        greetingText = "Bonjour";
    }

    // Sélectionnez la balise HTML et modifiez son texte
    let messageElement = document.getElementById('target');
    messageElement.innerText = greetingText;
}

// Appelez la fonction updateGreeting pour mettre à jour le texte de la balise
updateGreeting();


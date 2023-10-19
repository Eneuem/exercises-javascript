/* becode/javascript
 *
 * /04-dates/04-locale-date/script.js - 4.4: date textuelle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

function updateGreeting() {
    let currentDate = new Date();

    let day = currentDate.toLocaleString('fr-FR', { weekday: 'long' });
    let formattedDate = currentDate.toLocaleString('fr-FR');
    let sum = day + " " + formattedDate;


    let messageElement = document.getElementById('target');
    messageElement.innerText = sum;
}

updateGreeting();

//FLEMME MAIS JE PEUX NOMMER LE MOIS AVEC 
// let month = currentDate.toLocaleDateString('fr-FR', { month: 'long' });

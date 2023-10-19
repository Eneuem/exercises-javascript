/* becode/javascript
 *
 * /05-arrays/08-array-includes/script.js - 5.8: présence dans un tableau
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

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

    
    let button = document.getElementById('run');

    button.addEventListener('click', () => {
        for (let i = 0; i < fruits.length; i++)
        {
            if (fruits[i] === "pomme")
            {
                console.log("yes");
                break;
            }
        }
    })
})();

// PLUS LONG AVEC BOOLEEN, MERCI CHAT GPT

// let button = document.getElementById('run');

// button.addEventListener('click', () => {
//     let isAppleFound = false;  // Initialisation d'une variable booléenne à false

//     for (let i = 0; i < fruits.length; i++)
//     {
//         if (fruits[i] === "pomme")
//         {
//             isAppleFound = true;  // Mise à jour de la variable booléenne à true si "pomme" est trouvé
//             break;  // Arrêt de la boucle dès que "pomme" est trouvé
//         }
//     }

//     if (isAppleFound)  // Vérification de la variable booléenne après la boucle
//     {
//         console.log("yes");
//     }
//     else
//     {
//         console.log("no");
//     }
// });

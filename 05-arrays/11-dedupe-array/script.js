/* becode/javascript
 *
 * /05-arrays/11-dedupe-array/script.js - 5.11: dédoublonnement d'un tableau
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const fruits = [
        "cerise",
        "durian",
        "pomme",
        "poire",
        "fraise",
        "tomate",
        "orange",
        "mandarine",
        "fraise",
        "durian",
        "pêche",
        "cerise",
        "raisin",
        "cerise",
    ];

    let button = document.getElementById('run');

    button.addEventListener('click', () => {
        let uniqueFruits = fruits.reduce((temp, fruit) => {
            if (!temp.includes(fruit)) {
                temp.push(fruit);
            }
            return temp;
        }, []); 
        console.log(uniqueFruits);
    });
})();
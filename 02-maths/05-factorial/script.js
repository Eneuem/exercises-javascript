/* becode/javascript
 *
 * /02-maths/05-factorial/script.js - 2.5: Factorielle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

document.getElementById("run").addEventListener("click", () => {
    const number = parseFloat(document.getElementById("number").value);
    if (!isNaN(number) && number >= 0) {
        const result = factorial(number);
        alert(result);  // ou alert(result);
    } else {
        alert("Veuillez entrer un nombre positif.");
    }
});

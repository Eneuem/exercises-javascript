/* becode/javascript
 *
 * /02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.


    // to get the value of an input: document.getElementById("element-id").value

    let a;
    let b;
    
    // to get the value of an input: document.getElementById("element-id").value
    function getvalue() {
        a = parseFloat(document.getElementById("op-one").value);
        b = parseFloat(document.getElementById("op-two").value);
    }
    
    function calculate(event) {
        getvalue();
        switch (event.target.id) {
            case "addition":
                alert(a + b);
                break;
            case "substraction":
                alert(a - b);
                break;
            case "multiplication":
                alert(a * b);
                break;
            case "division":
                if (b !== 0) {
                    alert(a / b);
                } else {
                    alert("Division par zéro n'est pas possible");
                }
                break;
            default:
                alert("Opération inconnue");
                break;
        }
    }
    
    document.getElementById("addition").addEventListener("click", calculate);
    document.getElementById("substraction").addEventListener("click", calculate);
    document.getElementById("multiplication").addEventListener("click", calculate);
    document.getElementById("division").addEventListener("click", calculate);
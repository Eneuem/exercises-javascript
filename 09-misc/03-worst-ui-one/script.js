/* becode/javascript
 *
 * /09-misc/03-worst-ui-one/script.js - 9.3: la pire interface (1) : phone slider
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {


let slider = document.getElementById("slider");
let output = document.getElementById("target");

function updateOutput(value) { let strValue = String(value);

if (strValue.charAt(0) !== '0') {

    strValue = '0' + strValue;
}
output.innerHTML = '+' + strValue;
}

updateOutput(slider.value);

slider.oninput = function() {
updateOutput(this.value);
} 
})();

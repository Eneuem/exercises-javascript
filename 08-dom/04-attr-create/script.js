/* becode/javascript
 *
 * /08-dom/04-attr-create/script.js - 8.4: manipulation d'attributs & création d'élément
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // Étape 1: Récupérez la valeur de l'attribut data-image
    let imageUrl = document.getElementById('source').getAttribute('data-image');
    
    // Étape 2: Créez une nouvelle balise img
    let newImage = document.createElement('img');
    
    // Étape 3: Attribuez la valeur de l'attribut data-image à l'attribut src de la nouvelle balise img
    newImage.src = imageUrl;
    
    // Étape 4: Insérez la nouvelle balise img dans la balise avec l'id target
    document.getElementById('target').appendChild(newImage);
    
    // Étape 5: Supprimez la balise avec l'id source
    document.getElementById('source').remove();
})();


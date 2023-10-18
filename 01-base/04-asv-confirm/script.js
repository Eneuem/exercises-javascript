function questions() {
    let age;
    let sexe;
    let home;

    while (!age || !sexe || !home) {
        if (!age) {
            age = prompt("Quel âge avez-vous ?");
            while (age == 0)  // ou vous pouvez aussi utiliser while (age === '0') si vous voulez vérifier également le type
            {
                age = prompt("Quel âge avez-vous ?");  // assigner la nouvelle valeur à la variable age
            }
        }
        if (!sexe) {
            sexe = prompt("Quel est votre sexe ?");
        }
        if (!home) {
            home = prompt("Où habitez-vous ?");
        }
    }

    return { age, sexe, home };  // retourner les valeurs comme un objet
}

// Appeler la fonction
let reponses = questions();
console.log(reponses);

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// exo 1
let nombres = [10, 20, 30];
nombres.push(40);
//nombres.push("cinquante"); //Argument of type 'string' is not assignable to parameter of type 'number'.
nombres.forEach(n => console.log(n * n));
// exo 2
let mixte = [1, "deux", 3];
mixte.forEach(m => {
    if (typeof m === "number") {
        console.log("Nombre : " + m);
    }
    else {
        console.log("Texte : " + m);
    }
});
//Exo 3
let utilisateur = [1, "Alice", true];
const afficherUtilisateur = (utilisateur) => {
    console.log("ID: " + utilisateur[0] + ", Nom: " + utilisateur[1] + ", Actif: " + utilisateur[2]);
};
afficherUtilisateur(utilisateur);
//Exo 4
function calculerStats(nombres) {
    let min = nombres[0];
    let max = nombres[0];
    let sum = 0;
    for (let i = 0; i < nombres.length; i++) {
        if (nombres[i] < min) {
            min = nombres[i];
        }
        if (nombres[i] > max) {
            max = nombres[i];
        }
        sum += nombres[i];
    }
    let moyenne = sum / nombres.length;
    return [min, max, moyenne];
}

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
const calculerStats = (nombres) => {
    if (nombres.length === 0) {
        throw new Error("the array must contain at least one number");
    }
    let min = nombres[0];
    let max = nombres[0];
    let sum = nombres[0];
    for (let i = 1; i < nombres.length; i++) {
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
};
console.log(calculerStats([3, 7, 10, 2, 8]));
//Exo 5
var Niveau;
(function (Niveau) {
    Niveau[Niveau["Debutant"] = 0] = "Debutant";
    Niveau[Niveau["Intermediaire"] = 1] = "Intermediaire";
    Niveau[Niveau["Avance"] = 2] = "Avance";
})(Niveau || (Niveau = {}));
let niveauActuel = Niveau.Intermediaire;
console.log(niveauActuel);
console.log(Niveau[niveauActuel]);
//Exo 6
var Statut;
(function (Statut) {
    Statut[Statut["TODO"] = 0] = "TODO";
    Statut[Statut["EN_COURS"] = 1] = "EN_COURS";
    Statut[Statut["TERMINE"] = 2] = "TERMINE";
})(Statut || (Statut = {}));
let tache = {
    titre: "Apprendre TypeScript",
    statut: Statut.TODO
};
tache.statut = Statut.TERMINE;
console.log(`Tâche: ${tache.titre} [${Statut[tache.statut]}]`);
//Exo 7
var StatutTache;
(function (StatutTache) {
    StatutTache[StatutTache["TODO"] = 0] = "TODO";
    StatutTache[StatutTache["EN_COURS"] = 1] = "EN_COURS";
    StatutTache[StatutTache["TERMINE"] = 2] = "TERMINE";
})(StatutTache || (StatutTache = {}));
let taches = [
    { id: 1, titre: "Apprendre TypeScript", statut: StatutTache.TODO },
    { id: 2, titre: "Apprendre React", statut: StatutTache.EN_COURS },
    { id: 3, titre: "Apprendre Angular", statut: StatutTache.TERMINE }
];
const afficherTachesParStatut = (statut) => {
    taches.forEach(tache => {
        if (tache.statut === statut) {
            console.log(tache);
        }
    });
};
afficherTachesParStatut(StatutTache.TODO);
afficherTachesParStatut(StatutTache.TERMINE);

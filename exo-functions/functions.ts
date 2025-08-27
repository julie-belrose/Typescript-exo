// Exo 1

const additionDepenses = (a: number, b: number): number => {
    return a + b;
};

const toKilometers = (v: number | string): string => {
    return (typeof v === "number") ? `${v}km` : v;
};

const totalPanier = (...prix: number[]): number => {
    const valueInit = 0;
    return prix.reduce((a, b) => a + b, valueInit);
};

console.log('Exo 1---');
console.log("Addition des dépenses : " + additionDepenses(2, 3));
//console.log("Addition des dépenses : " + additionDepenses(2, "3"));
console.log("toKilometers : " + toKilometers(10));
console.log("toKilometers : " + toKilometers("10"));
console.log("Total panier : " + totalPanier(10, 20, 30));
console.log("Total panier : " + totalPanier());



// Exo 2
const saluer = (prenom: string = "Anonyme"): string => {
    return `Bonjour, ${prenom} !`;
};


const prixTTC = (prixHT: number, tauxTVA: number = 0.2): number => {
    return prixHT + (prixHT * tauxTVA);
};


const ajouterPourboire = (total: number, tip?: number): number => {
    if (tip === undefined) {
        tip = 0;
    }
    return total + tip;
};

const formatContact = (opts: { nom?: string; ville?: string } = {}): string => {
    const { nom = "Inconnu", ville = "N/A" } = opts;
    return `${nom} — ${ville}`;
};
console.log('Exo 2---');


console.log(saluer());
console.log(saluer("Alice"));

console.log("Prix TTC : " + prixTTC(100));
console.log("Prix TTC : " + prixTTC(100, 0.1));

console.log("Total avec pourboire : " + ajouterPourboire(100));
console.log("Total avec pourboire : " + ajouterPourboire(50, 0));
console.log("Total avec pourboire : " + ajouterPourboire(50, 5));

console.log("Format contact : " + formatContact());
console.log("Format contact : " + formatContact({ nom: "Alice", ville: "Lyon" }));



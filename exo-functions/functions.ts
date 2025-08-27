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

// Exo 3
const arrondirAuCentime = (n: number): number => {
    return Math.round(n * 100) / 100;
};

const appliquerReduction = (prix: number): number => {
    const REDUCTION = 0.1;
    return prix * (1 - REDUCTION);
};

const upperProduits = (liste: string[]): string[] => {
    return liste.map(product => product.toUpperCase());
};

const creerContact = (nom: string): { id: string; nom: string } => {
    return { id: Date.now().toString(), nom };
};

console.log('Exo 3---');
console.log("Arrondir au centime : " + arrondirAuCentime(10.123));

console.log("Appliquer réduction : " + appliquerReduction(65));
console.log("Upper produits : " + upperProduits(["pain", "beurre", "jambon"]));

console.log("Creer contact : " + JSON.stringify(creerContact("Alice")));


// Exo 4

const podometre = {
    pas: 0,
    increment(): void { this.pas++; },
    reset(): void { this.pas = 0; },
    incrementArrow: (() => { // `this` est lexical (hérité du scope extérieur), donc pas accessible (La fonction fléchée est écrite dans le corps de l’objet, donc ce corps d’objet n’est pas un “scope de this)
        let pasPrivés = 0;        // variable save dans la closure
        return (): number => ++pasPrivés; // clé qui permet d'y accéder (closure)
    })()
};

console.log('Exo 4---');
podometre.increment();
console.log("Pas : " + podometre.pas);
podometre.reset();
console.log("Pas : " + podometre.pas);
console.log("Pas avec arrow : " + podometre.incrementArrow());


// Exo 5

const logAction = (message: string): void => {
    console.log((message) ? message : "Action non spécifiée");
};

const erreurFatale = (message: string): never => {
    throw new Error(`Erreur fatale : ${message}`);
};

const testError = (message?: string) => {

    message = `data corrompue`;
    try {
        erreurFatale(message);
    } catch (e) {
        console.warn("Récupération locale error fatale, on continue :", e);
    }
}

const getMeteo = async (ville: string): Promise<{ ville: string; degres: number }> => {
    return { ville, degres: 21 };
};

console.log('Exo 5---');

logAction("simple log");
console.log("testError : " + testError());
getMeteo("Lyon").then(meteo => console.log(meteo));

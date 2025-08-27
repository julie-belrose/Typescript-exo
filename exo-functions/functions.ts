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

const testError = (message: string) => {
    try {
        erreurFatale(message);
    } catch (e) {
        console.warn("Récupération locale error fatale, on continue :", e);
    }
}

const getMeteo = async (ville: string): Promise<{ ville: string; degres: number }> => {
    return new Promise<{ ville: string; degres: number }>((resolve, reject) => {
        setTimeout(() => resolve({ ville, degres: 21 }), 1000);
    });
};

console.log('Exo 5---');

logAction("simple log");
console.log("testError : " + testError(`data corrompue`));
getMeteo("Lyon").then(meteo => console.log(meteo));


// Exo 6

type Critere<T> = (v: T) => boolean;
const filtrer = <T>(arr: T[], critere: Critere<T>): T[] => {
    return arr.reduce<T[]>((acc, v) => {
        return critere(v) ? (acc.push(v), acc) : acc;
    }, []);
};

const depenseEstGrande = (n: number): boolean => {
    return n >= 100;
};

const minLongueur = (n: number): ((s: string) => boolean) => {
    return (s: string): boolean => s.length >= n;
};

console.log('Exo 6---');
console.log("Filtrer : " + filtrer([50, 120, 30], depenseEstGrande));
console.log("Filtrer : " + filtrer(["café", "épicerie"], minLongueur(7)));


// Exo 7
interface Transformeur {
    (v: string): string;
    locale?: string;
}

const titreCase: Transformeur = (str: string): string => {
    const locale = titreCase.locale ?? "fr-FR";
    const regexStartOrSpace = '(^|\\s)';
    const regexLetter = '(\\p{L})';
    const wordInitialPattern = new RegExp(`${regexStartOrSpace}${regexLetter}`, 'gu');

    return str.replace(
        wordInitialPattern,
        (fullMatch: string, separator: string, letter: string) => {
            const initialUpper = letter.toLocaleUpperCase(locale);
            return separator + initialUpper;
        }
    );
};

titreCase.locale = "fr-FR";

const appliquerTransformeur = (textes: string[], t: Transformeur): string[] => {
    return textes.map(t);
};


console.log('Exo 7---');
console.log("Titre case : " + titreCase("bonjour à tous"));
console.log("Titre case : " + titreCase("  salut   le  monde  "));
console.log("Titre case anglais : " + appliquerTransformeur(["la plage", "le marché"], titreCase));


// Exo 8
const controlFormatHeure = (hour: number, minute: number): boolean => {
    const H_MAX = 23;
    const M_MAX = 60;
    return (
        Number.isInteger(hour) && Number.isInteger(minute) &&
        hour >= 0 && hour <= H_MAX &&
        minute >= 0 && minute < M_MAX
    );
};

const convertirHeuresEnMinutes = (heure: number): number => {
    const M_PAR_HEURE = 60;
    return heure * M_PAR_HEURE;
};

const controlFormatMinutes = (minutes: number): boolean => {
    const BORN_MIN = 0;
    const BORN_MAX_EXCLU = 1440;
    return Number.isInteger(minutes) && minutes >= BORN_MIN && minutes < BORN_MAX_EXCLU;
};

const convertirMinutesEnHeures = (minutes: number): string => {
    const M_PAR_HEURE = 60;
    const heure = Math.floor(minutes / M_PAR_HEURE);
    const minute = minutes % M_PAR_HEURE;
    const PAD_LEN = 2;
    const PAD_CHAR = "0";

    return `${String(heure).padStart(PAD_LEN, PAD_CHAR)}:${String(minute).padStart(PAD_LEN, PAD_CHAR)}`;
};

export function convertirHeure(hhmm: string): number;
export function convertirHeure(minutes: number): string;

export function convertirHeure(v: number | string): number | string {

    if (typeof v === "string") {
        const [hhStr, mmStr] = v.trim().split(":");
        const hour = Number(hhStr);
        const minute = Number(mmStr);
        if (!controlFormatHeure(hour, minute)) return NaN;
        return convertirHeuresEnMinutes(hour) + minute;

    } else if (typeof v === "number") {
        if (!controlFormatMinutes(v)) return "Format invalide";
        return convertirMinutesEnHeures(v);
    }

    return "Format invalide";
};

console.log('Exo 8---');
console.log("Convertir heure : " + convertirHeure("10:30"));
console.log("Convertir heure : " + convertirHeure(630));
console.log("Heures -> minutes : " + convertirHeure("10:30"));
console.log("Heures -> minutes : " + convertirHeure("07:05"));
console.log("Minutes -> heures : " + convertirHeure(1441));


// Exo 9
type Priorite = 1 | 2 | 3 | 4 | 5;
type Tache = { titre: string; faite?: boolean; priorite: Priorite };

const creerTache = (titre: string, priorite: Priorite = 1): Tache => {
    return { titre, faite: false, priorite };
};


const majTache = (
    t: Tache,
    maj: { titre?: string; faite?: boolean, priorite?: Priorite }
) => {
    return {
        ...t,
        ...maj,
        faite: maj.faite ?? t.faite,
        priorite: maj.priorite ?? t.priorite
    };
};


const basculerFaite = (t: Tache): Tache => ({ ...t, faite: !t.faite });

console.log('Exo 9---');
const t1: Tache = { titre: "Acheter du pain", faite: false, priorite: 3 };
console.log("Creer tache : " + JSON.stringify(creerTache(t1.titre, t1.priorite)));
console.log("Creer tache : " + JSON.stringify(creerTache("A faire", 2)));
console.log("Maj tache : " + JSON.stringify(majTache(t1, { faite: true })));
console.log("Basculer faite : " + JSON.stringify(basculerFaite(t1)));


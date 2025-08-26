## Exercice 1 — QCM rapides

Pour chaque question, choisissez la bonne réponse.

1. Quelle est la différence entre `any` et `unknown` ?

   b) `any` permet tout sans contrôle, `unknown` impose une vérification avant usage.


2. Que se passe-t-il si on écrit :

   b) Erreur de compilation, car `x` est inféré en `number`.

3. Le type `never` est utilisé quand :

   b) Une fonction ne retourne jamais (erreur ou boucle infinie).



## Exercice 2 — Typage explicite vs inférence

1. Déclare une variable `prenom` initialisée avec `"Alice"` (sans annotation de type).
2. Déclare une variable `age` **sans valeur initiale**, qui doit être un `number`.
3. Vérifie que si tu fais `age = "trente";` → une erreur est détectée.

```tsx
let prenom = "Alice";
let age: number;
age = "trente";


//Type 'string' is not assignable to type 'number'.
```

## Exercice 3 — Erreurs de typage

Corrige le code suivant pour qu’il compile :

```tsx
let actif = true;

let valeur;
valeur = 10;

```


## Exercice 4 — Null et Undefined

Avec `strictNullChecks` activé :

1. Explique pourquoi ce code provoque une erreur :

    ```tsx
    let message: string = null;
    
    ```

    Le code provoque une erreu, car `null` il est interdit.

2. Propose une correction pour autoriser `null` dans `message`.

```tsx
let message: string | null = null;
```

## Exercice 5 — Fonctions

Complète la fonction suivante pour que son type soit correct :

```tsx
// Doit retourner une chaîne de caractères formatée
function bonjour(nom : string) : string {
  return "Bonjour " + nom.toUpperCase();
}

```


## Exercice 6 — Bonus (réflexion)

Explique la différence entre ces deux écritures :

```tsx
const pi = 3.14;
let pi2 = 3.14;

```

pi est une constante, donc on ne peut pas la modifier.
pi2 est une variable, donc on peut la modifier.

# Exercices - Tableaux, Tuples, Enums

## Exercice 1: Tableaux simples

1. Crée un tableau `nombres` qui contient `[10, 20, 30]`.
2. Ajoute le nombre `40` au tableau.
3. Essaie d’ajouter une chaîne `"cinquante"` → que se passe-t-il ?
4. Parcours le tableau avec une boucle et affiche chaque valeur au carré.

```tsc

let nombres : number[] = [10, 20, 30];
nombres.push(40);
//nombres.push("cinquante");

nombres.forEach(n => console.log(n * n));

```

## Exercice 2: Tableaux avec unions

1. Crée un tableau `mixte` pouvant contenir des **nombres ou des chaînes**.
2. Ajoute-y : `1`, `"deux"`, `3`.
3. Parcours le tableau et affiche :
    - `"Nombre : X"` si l’élément est un nombre
    - `"Texte : Y"` si c’est une chaîne.

## Exercice 3: Tuples

1. Déclare un tuple `utilisateur` composé de :
    - un `id` (number)
    - un `nom` (string)
    - un `actif` (boolean).
2. Assigne-lui la valeur `[1, "Alice", true]`.
3. Essaye de changer l’ordre des valeurs → que constate-t-on ?
4. Crée une fonction `afficherUtilisateur` qui prend ce tuple en paramètre et affiche :
    
    `ID: 1, Nom: Alice, Actif: true`.


## Exercice 4: Fonctions et tuples 

1. Écris une fonction `calculerStats(nombres: number[])` qui retourne un tuple `[min, max, moyenne]`.

   * `min` = plus petit nombre du tableau
   * `max` = plus grand nombre du tableau
   * `moyenne` = moyenne arithmétique des nombres

2. Appelle la fonction avec `[3, 7, 10, 2, 8]` et affiche les trois valeurs grâce à la **déstructuration**.

### Exemple attendu

```ts
const [min, max, moyenne] = calculerStats([3, 7, 10, 2, 8])
console.log(`Min = ${min}, Max = ${max}, Moyenne = ${moyenne}`)
```

## Exercice 5: Enums numériques

1. Crée un `enum Niveau` avec les valeurs `Debutant`, `Intermediaire`, `Avance`.
2. Déclare une variable `niveauActuel` de type `Niveau` et assigne-lui `Intermediaire`.
3. Affiche sa valeur numérique.
4. Affiche son libellé à partir de la valeur numérique.

## Exercice 6: Enums de chaînes

1. Crée un `enum Statut` avec les valeurs `"TODO"`, `"EN_COURS"`, `"TERMINE"`.
2. Déclare une variable `tache` :
    
    ```tsx
    { titre: string; statut: Statut }
    
    ```
    
3. Crée une tache avec `titre = "Apprendre TypeScript"` et `statut = Statut.TODO`.
4. Change son statut en `TERMINE`.
5. Affiche : `Tâche: Apprendre TypeScript [TERMINE]`.

## Exercice 7: Mini-projet

**Objectif : gérer une liste de tâches avec un tableau et un enum.**

1. Définis un `enum StatutTache` (`TODO`, `EN_COURS`, `TERMINE`).
2. Définis un type `Tache` avec `{ id: number, titre: string, statut: StatutTache }`.
3. Crée un tableau `taches` avec 3 tâches.
4. Écris une fonction `afficherTachesParStatut(statut: StatutTache)` qui affiche uniquement les tâches correspondant à ce statut.
5. Teste la fonction avec `TODO` puis avec `TERMINE`.

---
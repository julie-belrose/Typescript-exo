# TP — Manipulation d’outils autour de TypeScript

## 1 Mise en place du projet

```bash
npm init
```

```bash
npm install typescript --save-dev
```

```json
  "typescript": "^5.9.2"
```

#2

```bash
npx tsc --init
```


1. Créez un nouveau dossier de projet et initialisez `npm`.
2. Installez TypeScript en tant que dépendance de développement.
3. Vérifiez que TypeScript apparaît dans la bonne section de `package.json`.

## 2) Utilisation de `npx`

1. Générez un fichier `tsconfig.json` avec la commande appropriée.
2. Créez un dossier `src/` avec un fichier `index.ts` contenant une petite fonction et un `console.log`.
3. Compilez le projet avec `npx`.
4. Vérifiez que le JavaScript compilé est généré et exécutez-le avec Node.

## 3) Nettoyage avec `rimraf`

1. Installez `rimraf` comme dépendance de développement.
2. Dans `package.json`, ajoutez un script `clean` qui supprime le dossier de sortie (`dist/`).
3. Testez le script en compilant, exécutant, puis nettoyant le projet.


## 4) Questions de réflexion

* Pourquoi installe-t-on TypeScript comme dépendance de développement et non comme dépendance “classique” ?
* Quelle est l’utilité de `npx` par rapport à une installation globale d’outils ?
* Pourquoi ne pas utiliser `rm -rf` pour nettoyer un dossier dans un projet partagé entre plusieurs OS ?

## 5) Challenge bonus

* Ajoutez un script `dev` qui permet d’exécuter directement un fichier `.ts` sans passer par la compilation en JavaScript.
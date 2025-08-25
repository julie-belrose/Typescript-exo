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

## 2 Utilisation de `npx`

```bash
npx tsc --init
```

```bash
mkdir TP-typescript/src/
```

```bash
touch TP-typescript/src/index.ts
```

```bash
npx tsc
```

```bash
node dist/index.js
```

## 3) Nettoyage avec `rimraf`

```bash
pnpm i rimraf --save-dev
```

1. Installez `rimraf` comme dépendance de développement.
2. Dans `package.json`, ajoutez un script `clean` qui supprime le dossier de sortie (`dist/`).
3. Testez le script en compilant, exécutant, puis nettoyant le projet.


## 4) Questions de réflexion

* Pourquoi installe-t-on TypeScript comme dépendance de développement et non comme dépendance “classique” ?
* Quelle est l’utilité de `npx` par rapport à une installation globale d’outils ?
* Pourquoi ne pas utiliser `rm -rf` pour nettoyer un dossier dans un projet partagé entre plusieurs OS ?

## 5) Challenge bonus

* Ajoutez un script `dev` qui permet d’exécuter directement un fichier `.ts` sans passer par la compilation en JavaScript.
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
node ./TP-typescript/dist/index.ts
```

## 3) Nettoyage avec `rimraf`

```bash
pnpm i rimraf --save-dev
```

```bash
    "clean": "rimraf TP-typescript/dist/"
```

## 4) Questions de réflexion

* Pourquoi installe-t-on TypeScript comme dépendance de développement et non comme dépendance “classique” ?
On a besoin de typescript pour compiler le code typescript en javascript.
* Quelle est l’utilité de `npx` par rapport à une installation globale d’outils ?
On a besoin de npx pour exécuter des outils sans les installer globalement.
* Pourquoi ne pas utiliser `rm -rf` pour nettoyer un dossier dans un projet partagé entre plusieurs OS ?
On a besoin de rimraf pour nettoyer un dossier dans un projet partagé entre plusieurs OS.
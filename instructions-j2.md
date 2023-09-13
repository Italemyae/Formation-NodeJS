# Jour 2

## Rendre ses variables cristal-clear

* avec JDoc `/**`
* en typescript `.tsc` mais il faut transcompiler tsc > js avant d'executer le js
* mettre des noms explicit

## [Programmation fonctionnelle](https://github.com/Italemyae/Formation-NodeJS/blob/master/Rappels-JS/03-callback-sync.js)

```Javascript
const names = ['Romain', 'Eric', 'Jean'];
// programmation fonctionnelle
names.filter((n) => n.length === 4)
     .forEach((n) => console.log(hello(n)));
```

## Callback

* `setTimeout(, 0)` à un intérêt lors de l'affichage puis resize
* `setTimeout` est async, même à 0, il s'execute après le code sync

## Modules

* Nodes c'est principalement `CommonJS` (ancien), `ESM` (récent) et `ES2022` (trés récent)
* Attention CommonJS, ES pour les `require` ou `import {  } from <file>`
* `require` ne peut pas bloquer dans le navigateur car synchrone (bloquant)
* les bundler resolvent le problème (un seul appel)
  * `webpack` c'est un bundler connu
  * `vite` (en rust) va remplacer `webpack` (en node)
* ECMAScript Module (ESM)
  * `export function () {}`
* dans `package.json` on utilise le `type:` pour définir si `ES` (nouveau) ou `CommonJS` (ancien)
* les `.js` seront utilisé selon `package.json`, il faut explicitement typer les autres `.cjs` ou `.mjs`

## Jeu du plus et du moins : utilisation modules
* [Exercice jeu 03 modules via esm](https://github.com/Italemyae/Formation-NodeJS/blob/master/Modules/ex-esm)
* [Exercice jeu 04 modules via commonjs](https://github.com/Italemyae/Formation-NodeJS/blob/master/Modules/ex-commonjs)

## Installer un lib

* la lib doit etre publiée sur [npmjs.com](npmjs.com) (public)
  * [chalk](https://www.npmjs.com/package/chalkà ) lib de couleur en CLI.
    * `npm install chalk`
    * `chalk` est ESM (pas commonjs)
* Forcer usage même version `node -V` et `npm -V` dans un projet
* `yarn` (facebook) est une alternative à `npm` mais tape dans le même registry
* `pnpm` fait une install globale et met des liens symboliques dans les projets

## Packages
* [package.json](https://github.com/Italemyae/Formation-NodeJS/blob/master/package.json) ficher principal d'un projet
  * `npm outdated` permet de connaitre paquets pas à jour
  * dependencies
    * `^4.1.3` verrouille la majeur 4
    * `~4.1.3` verrouille la majeur et la mineur 1
    * on ne peut pas verrouiller les dépendances indirectes
    * `npm update <module>` met à jour jusqu'au `^` ou `~`
* [package-lock.json](https://github.com/Italemyae/Formation-NodeJS/blob/master/package-lock.json) permet la reinstalle du meme env, y compris des dépendances indirectes
  * `npm install ` prend le ``package-lock.json` et s'y conforme
  * `npm install xxx -D ` est un dev dependency et sera marqué comme tel dans le `package-log.json`

  ## Installer et utiliser un soft
  * install `npm i eslint`
  * run `npx eslint` au lieu de `node_modules\.bin\eslint`
  * quand on commence à utiliser des outils, la bonne pratique est de configurer le package.json

  ```json
  "scripts": {
    "lint": "eslint commonjs" // arguments
  }
  ```

  * on les execute avec, `npm run <nom du script>`

  ## Cas [ESLint](https://eslint.org/docs/latest/rules/)
  * `npx eslint --init`
  * syntax only cause Prettier
  * problems
  * commonsjs
  * framework : none
  * typescript : No
  * where : espace (choix multiple) ici Node
  * format de la config : JSON mais Javascript sympa

  Ce genre de questionnaire est généré par la lib `inquirer`

## [API-Node](https://github.com/Italemyae/Formation-NodeJS/blob/master/API-Nodes)

* process
* os
* path
* fs
    * Sync
      * Avantage : simpke à lire
      * Inconveninent : thread bloqué pendant l'opération
    * Async
      * Inconvenient : difficile à lore
      * Avantage : thread non bloqué, à choisir sur serveur
  * Attention au callback-hell
  * Les promises sont bien les `.then` cachent les callback
  * Les `async` / `await` simplifient le code

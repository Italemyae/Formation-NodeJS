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
* `yarn` est une alternative à `npm` mais tape dans le même registry

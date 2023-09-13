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

* Nodes c'est principalement `CommonJS`, `ESM` et `ES2022`

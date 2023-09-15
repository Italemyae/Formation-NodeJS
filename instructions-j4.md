# Jour 4

## Rappels
* `Promises` et `await` permet d'ecrire de l'async à la façon du sync
* `import` importe le `use strict`
  * Le mode strict est une bonne pratique
  * ESM est en mode strict par defaut (import)
* Promises
  * `.all` : la promesse combinée résolue quand toutes sont résolues, dans le .then on récupere les réponses

  ``` javascript
  const [foo, bar] = await Promise.all([foofoo, barbar]);
  // equivalent
  Promise.all([foofoo, barbar]).then(([foo, bar]) => {} );

  ```
  * `.any` : récupere la réponse la plus rapide, ne fait pas cas des échec
    * exemple: ping multiple serveur pour récuperer le plus rapide
  * `.race` : ressemble a `.any`, s'utilise souvent avec un `setTimeout()`, si la 1ere est en echec, le tout est en echec
  * concept interessant : Observables `RxJS` très utilisés en 2017
    * `Angular` repose sur ce concept
    * 3 etats, plus de combinaisons possibles
    * remplacé par (sorti après Angular) :

``` javascript
for await (const answer of rl) {
  console.log('foobar : ' + answer);
}
```
* `readStream` permet de lire des gros volumes. Se pipe bien voir [12-Stream.js](https://github.com/Italemyae/Formation-NodeJS/blob/master/API-Node/12-stream.js#L17)

## Dans un projet legacy
* npm audit --fix
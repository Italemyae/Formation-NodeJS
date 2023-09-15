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

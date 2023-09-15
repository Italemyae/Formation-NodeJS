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
* voir outil qui fait en auto


## Express-REST
* regarder [JWT (Json Web Token)](https://jwt.io/) Bearer token très utilisé
* regarder [dotenv](https://www.dotenv.org/docs/)

## Echange back-front
* Remote Procedure Call (RPC) : JSONRPC, XMLRPC
  * [trpc](https://trpc.io/) API coté client / serveur
* [GraphQL](https://graphql.org/) : client qui fait une sorte de reqête SQL
  * Dev Facebook, environment React
* REST : Express

## Stack
* MEAN : Mongo Express Angular Node
* MERN : Mong Express React Node

## NoSQL
* Clé / valeur : Redis, Memcached
* Orienté Colonne : HBase, Cassandra
* Orienté Document-Object: __MongoDB__, CouchD
* Orienté Graphe Neo4j

#### MongoDB
* Embarque un moteur Javascript
  * SpiderMonkey, le moteur Mozilla
  * V8, le moteur Node.js
* MongoDB Shell, MongoDB Compass, [Relation Migrator](https://www.mongodb.com/try/download/relational-migrator), [Database-tools](https://www.mongodb.com/try/download/database-tools)

![SGBD](https://github.com/Italemyae/Formation-NodeJS/blob/master/SGBD.png)
mongoimport --collection restaurants --file ~/downloads/primer-dataset.json

* [jeu de données](https://raw.githubusercontent.com/OpenKitten/Mongo-Assets/master/primer-dataset.json) restaurants
* import avec database tool : `mongoimport --collection restaurants --file ~/downloads/
primer-dataset.json`
* Avec Mongo.exe
  * `db.restaurants.find({ borough: "Queens"}).count()`
  * `db.restaurants.find({ borough: /^bro/i}).count()`
  * `db.restaurants.find({ "address.zipcode": "10022"}).count()`
* Avec Mongo Compass
  * `{ borough: "Queens"}`
  * `{ "grades.grade": "B"}`
  * `{ "grades.score": 0}` 0 = rien à redire
  * `{ "grades.score": {$gt: 20}}`
  * `{ borough: "Queens", cuisine: "American"}` et logique
  * `{ $or: [{borough: "Queens"}, {cuisine: "American"}]}` ou
*  [Drivers officiels](https://www.mongodb.com/docs/drivers/) pour les langages les plus courants
    * exemple [FindOne Document](https://www.mongodb.com/docs/drivers/node/current/usage-examples/findOne/)
  * Ouvrir / fermer une connexion est couteux : utiliser un lib pour gerer un pool de connexion et répartir les queries
    * souvent on utilise [Mongoose](https://mongoosejs.com/) car c'est plus haut niveau
  * [Mongoose](https://mongoosejs.com/docs/guide.html) > Mongo (drivers officiel)
  * Mongoose utilise Mongo donc c'est normal que son trend soit inférieur à Mongo

#### [Mongoose API](https://mongoosejs.com/docs/guide.html)
* [Populate](https://mongoosejs.com/docs/populate.html#population) permet de faire des jointures si on a fait un `Saving refs`
  * Lookup de Mongo est moins légère

## Tests Automatisés

* Jest > [Mocha](https://mochajs.org/) > Jasmin
  * Jest est le plus utilisé, tests en // dans un pool de workers node
  * Mocha s'inspire de Jest, extrêmement flexible
  * On utilisera Mocha
* Coté server : Jest
* Coté client : Selenium
* Bonne pratique : [Pattern AAA](https://methodpoet.com/aaa-in-unit-testing/)
* cucumber.io existe en nodejs

#### Notre framwork de tests : [Mocha](https://mochajs.org/#getting-started)

* Mocha est prevu pour le TDD et un simili-BDD (style)
* Où mettre ses tests ? 2 ecoles
  * Test au même endroit que le test : le plus répandu
  * séparés dans l'arborescence : src dans src, test dans test
* install `npm install mocha -D`
* souvent on utilise aussi [chai](https://www.chaijs.com/api/bdd/)
    * install `npm install chai -D`
* Sinon permet de gerer pas mal de choses
  * install `npm install sinon -D`
  * install `npm install sinon-chai -D`
  * install `npm install chai-http -D`

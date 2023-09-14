# Jour 3

## Rappels
* `Async` marche les les `modules/promises`
``` javascript
async function copyGitIgnore() {
    const buffer = await fs.readFile('foo.file');
    await fs.writeFile('bar.file', buffer);
    console.log("Copy Sync Done");
}
```

* Attention aux actions simultanées qui peuvent être executées dans des ordres différents
* `Promise.all` est la solution. Voir aussi `Promise.allSettled`, `Promise.race` et `Promise.any` dans [09-api-promises.js](https://github.com/Italemyae/Formation-NodeJS/blob/master/API-Node/09-api-promises.js)

## Server

* dans le package.json
``` json
"scripts": {
  "start": "node 14-http.js",
  "start:dev": "nodemon 14-http.js"
}
```

* nodemon relance le serveur si les fichiers changent
* `http2` / `https` : à gerer avec des outils autres que node
    * serveur apache en frontal pour gerer, fait office de proxy
    * node lancé via pm2 en interne (exemple)
* on utilisera [http](https://nodejs.org/api/http.html#class-httpserver) dans les exo mais il y a des framework web
* [express](https://expressjs.com/) est très utilisé [restify, tastify et koa des concurrents](https://npmtrends.com/@nestjs/core-vs-express-vs-fastify-vs-koa)
* [Nest](https://nestjs.com/) monte, à surveiller mais il est recommandé de déjà connaitre `express`

## Express

* Dans le header du Network de Edge, on voit
  * Etag est un md5 de la réponse
  * X-powered est à retirer pour éviter de donner des infos aux hackers
* QueryParam c'est le `?xxx`
* Params c'est le `/xxx`
* Postman est une appli electron, permet de tester

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

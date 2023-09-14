import fs from 'node:fs/promises';
/*
On ne peut ps dire quand les fichiers vont être li
onc impossible de les ecrires dans un ordre

fs.readFile('01-process.js')
  .then( (bufferFile1) => {
    console.log('--- FILE 1 ---');
    console.log(bufferFile1.toString())
  });

fs.readFile('02-os.js')
  .then( (bufferFile2) => {
    console.log('--- FILE 2 ---');
    console.log(bufferFile2.toString())
  });

*/


// Promise.all
// Quand toutes les promesses seront resolues (en succès), l'esnsemble est résolu
// et les retours sont dns l'ordre du tableau de départ (pas dans l'ordre de résolution)
// si l'une des promesses echoue, l'ensemble echoue

// syntaxe fonctionnelle

Promise.all([
  fs.readFile('01-process.js'),
  fs.readFile('02-os.js')
]).then( ([bufferFile1, bufferFile2]) => {
  console.log(bufferFile1.toString());
  console.log(bufferFile2.toString());
})

// autre syntaxe

const [bufferFile1, bufferFile2] = await Promise.all([
  fs.readFile('01-process.js'),
  fs.readFile('02-os.js')
]);

console.log(bufferFile1.toString());
console.log(bufferFile2.toString());


// Promise.allSettled
// equivalent à promise.all mais on récupere tous les résultats qu'ils echouent ou pas
// use case : dashboard dans lequel j'envoie toutes les requetes HTTP en même
// temps mais on souhaite afficher les résultats partiels si une ou plusieurs requêtes echouent

// Promise.race
// quand la première est résolue (en succès), l'ensemble est résolu et on arrête les suivante
// on récupère un seul résultat
// si le premier est en erreur, l'ensemble échoue
// use case : faire une opération avec un timeout
// Promise.race([fs.readFile('file.txt'), setTimeout(3000)])

// Promise.any
// quand la première est résolue (en succès), l'ensemble est résolu et on arrête les suivante
// on récupère un seul résultat
// si le premier est en erreur, on attend la suivnte
// si elle sont toutes en erreur l'ensemble est en erreur
// usecase : ping de plusieurs serveur pour connaitre le plus rapide
//           si le premier retour est une erreur on attends le suivant

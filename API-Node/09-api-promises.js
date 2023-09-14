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

Promise.all([
  fs.readFile('01-process.js'),
  fs.readFile('02-os.js')
]).then( ([bufferFile1, bufferFile2]) => {
  console.log(bufferFile1.toString());
  console.log(bufferFile2.toString());
})

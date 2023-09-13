import process from 'node:process';

// node 01-process.js --name Julien
console.log(process.argv);
console.log(process.cwd());
process.chdir('..');
console.log(process.cwd());

console.log(process.platform);


process.exit(0); // 0 ok, 1 erreur

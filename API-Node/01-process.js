import process from 'node:process';

// node 01-process.js --name Julien
console.log(process.argv);
console.log(process.cwd());
process.chdir('..');
console.log(process.cwd());

const env = process.env.NOD_ENV ?? 'developpement';
// pratique pour savoir si on install les devDependencies

console.log(process.platform);


process.exit(0); // 0 ok, 1 erreur

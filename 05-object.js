// objets préinstanciés :

// Langage JS
console.log(typeof Math);
console.log(typeof JSON);

// Node.js
console.log(typeof process);

// En JS l'object est dynamique

// On peut ajouter, modifier ou supprimer des clefs/valeurs

console.log(Math.sum);
Math.sum = (a, b) => a + b; // on crée sum dans Math
console.log(Math.sum(1, 2));

delete Math.random;
console.log(Math.random); // on supprime

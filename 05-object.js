/* eslint-disable no-prototype-builtins */
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

// MAUVAISE PRATIQUE de modifier des objets du langage, de la plateforme (cpt obvious...)

// Pour crée un objet
// 2 systèmes

// 1 - Object Literal
// Use case :
// - pour les objects qui sont instanciés une seule fois
// - pour des objects instanciés plusieurs fois sans méthode
const coords = {
  x:1,
  y:2,
}

console.log(coords.x); // 1
console.log(coords.y); // 2

coords.z = 3;
console.log(coords.z); // 3

globalThis.MyMath = {
  sum(a, b) {
    return a + b;
  }
}

console.log(globalThis.MyMath.sum(3, 4));

// 2 - Constructor (fonction constructor)
function Contact(name) {
  this.name = name
  // ne pas crée de fonction ici pour éviter de dupliquer les fonctions !
}

const romain = new Contact();
console.log(typeof romain); // object

const paul = new Contact('Paul');
console.log(paul.name); // object

// pour mettre un proto
Contact.prototype.hello = function() {
  return `Hello ${this.name}`;
}
console.log(paul.hello()); // object

// eslint-disable-next-line no-prototype-builtins
console.log(paul.hasOwnProperty('name'))
console.log(paul.hasOwnProperty('hello'))


// ES2015
// eslint-disable-next-line @typescript-eslint/no-unused-vars
class Contact2 {
  constructor(name) {
    this.name = name;
    // ne pas crée de fonction ici pour éviter de dupliquer les fonctions !
  }
  // pour mettre un proto
  hello() {
    return `Hello ${this.name}`;
  }
}


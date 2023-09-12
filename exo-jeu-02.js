// 1. Reprendre le jeu du plus ou moins (correction)
// 2. Créer un objet random avec la syntaxe Object Literal et y regrouper les fonctions aléatoires
// 3. Créer une fonction constructeur Jeu recevant un objet en paramètres d’entrée et définir 3 propriétés : rl, entierAlea et essais
// 4. Créer une méthode loop/jouer() tel que le code suivant soit fonctionnel
// 5. Prévoir des valeurs par défaut pour min et max

// TDD fourni

const Random = {
  getRandom: function() { return Math.random();
  },
  getRandomArbitrary: function(min, max) {
    return Math.random() * (max - min) + min;
  },
  getRandomInt: function(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
  },
  getRandomIntInclusive: function(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
  }
};

function Jeu(options) {
  this.rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  this.entierAlea = Random.getRandomIntInclusive(options.min, options.max);
  this.essais = [];
}

Jeu.prototype.jouer = function() {

  this.rl.question('Quel est le nombre ? ', (answer) => {

    if (isNaN(answer)) {
      console.log("Try with and integer...");
      return this.jouer();
    }

    let i = +answer;

    if (i == this.entierAlea) {
      console.log(`---- Eukera ! ${i} == ${this.entierAlea} ----`);
      this.rl.close(); // interface
      return; // fn
    }

    console.log(`\t${i} est ` + (i > this.entierAlea ? "Trop grand !" : "Trop petit..."));
    this.essais.push(i);
    console.log("\tdeja joué : " + this.essais.join(' - '));
    this.jouer(); // rejouer
  });
}

// import d'un API (ici readline)
const readline = require('node:readline');

const game = new Jeu({
  min: 0,
  max: 20,
});

game.jouer();

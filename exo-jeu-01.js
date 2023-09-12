// Jeu du plus ou moins
// 1.Générer un entier aléatoire entre 0 et 100 (API Math sur MDN)
// 2.Demander et récupérer la saisie (API Readline sur Node.js) puis afficher si le nombre est plus grand, plus petit ou trouvé
// 3.Pouvoir trouver en plusieurs tentatives (problème d’asynchronisme)
// 4.Stocker les essais dans un tableau et les réafficher entre chaque tour (API Array sur MDN)
// 5.Afficher une erreur si la saisie n'est pas un nombre (API Number sur MDN)
// ‣ Attention, le callback de question est toujours appelé avec un type String, à
// convertir si besoin


// from https://nodejs.org/docs/latest-v16.x/api/readline.html

// import d'un API (ici readline)
const { log } = require('node:console');
const readline = require('node:readline');

// configuration de l'abstraction
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let nombreAleatoire = Math.floor(Math.random() * 100) + 1;
let essais = [];

function jouer() {

  rl.question('Quelle est la valeur mystère [1;100] ? ', (answer) => {

    if (isNaN(answer)) {
      console.log("not a number");
      return jouer();
    }

    // let i = parseInt(answer, 10);
    // let i = Nummber.parseInt(answer, 10);
    // let i = Number(i);
    let i = +answer; // +  : version courte pour cast str to int
                     // !! : version courte pour cast int to bool

    if (i == nombreAleatoire) {
      console.log(`---- Eukera ! ${i} == ${nombreAleatoire} ----`);
      rl.close(); // interface
      return; // fn
    }

    console.log(`\t${i} est ` + (i > nombreAleatoire ? "Trop grand !" : "Trop petit..."));
    essais.push(i);
    console.log("\tessais : " + essais);

    jouer(); // rejouer
  });
}

jouer();

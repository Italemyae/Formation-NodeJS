// importer getRandomIntInclusive et readline
import { getRandomIntInclusive } from './random.js';
import * as readline from 'node:readline';
import chalk from 'chalk';

// exporter Jeu (default permet d'éviter les accolades)
export default class Jeu {
  constructor(options = {}) {
    const min = options.min ?? 0;
    const max = options.max ?? 100;
    this.rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    this.entierAlea = getRandomIntInclusive(min, max);
    this.essais = [];
  }
  jouer() {
    // pose une question
    // - la question s'affiche de façon synchrone
    // - la réponse est attendue en asynchrone
    if (this.essais.length) {
      console.log(chalk.grey('Vous avez déjà joué : ' + this.essais.join(' - ')));
    }

    this.rl.question(chalk.bgGrey('Quel est le nombre ?') + ' ', (answer) => {
      const entierSaisi = Number.parseInt(answer, 10);

      if (Number.isNaN(entierSaisi)) {
        console.log('Erreur : il faut saisir un entier');
        return this.jouer();
      }

      this.essais.push(entierSaisi);

      if (entierSaisi < this.entierAlea) {
        console.log('Trop petit');
        this.jouer();
      } else if (entierSaisi > this.entierAlea) {
        console.log('Trop grand');
        this.jouer();
      } else {
        console.log('Gagné');
        this.rl.close();
      }
    });
  }
}

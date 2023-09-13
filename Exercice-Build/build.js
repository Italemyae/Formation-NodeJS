const fs = require('fs/promises');
const chalk = require('chalk');
const path = require('path');
const md5 = require('md5');
const { minify } = require('terser');

const distPath = path.resolve(__dirname, 'dist');
const srcPath = path.resolve(__dirname, 'src');
const horlogeJsPath = path.resolve(srcPath, 'js', 'horloge.js');
const indexJsPath = path.resolve(srcPath, 'js', 'index.js');
const indexHtmlPath = path.resolve(srcPath, 'index.html');
const indexHtmlDistPath = path.resolve(distPath, 'index.html');
const appJsDistPath = path.resolve(distPath, 'app.js');

async function build() {
  console.log(chalk.bgBlue("1 - supprimer le dossier dist s'il exist"));
  await fs.rm('dist', { force: true, recursive: true }).catch((err) => console.error(err.message));

  console.log(chalk.bgBlue('2 - créer dossier dist'));
  await fs.mkdir('dist', { recursive: true });

  fs.readFile(horlogeJsPath)
    .then( (buffer) => fs.writeFile(appJsDistPath, buffer))
    .then( () => console.log(chalk.bgBlue("3 - Copy horloge to app.js done")))
    .catch( (err) => console.error(err.message));

  fs.readFile(indexJsPath)
    .then( (buffer) => fs.appendFile(appJsDistPath, buffer))
    .then( () => console.log(chalk.bgBlue("4 - Append index to app.js done")))
    .catch( (err) => console.error(err.message));
}

build();

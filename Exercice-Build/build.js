import fs from 'node:fs/promises';
import { resolve } from 'node:path';
import { Buffer } from 'node:buffer';
import url from 'node:url';
import { createHash } from 'node:crypto';
import { minify } from 'terser';
import minimist from 'minimist';
import chalk from 'chalk';

// const args = minimist(process.argv.slice(2));

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));


const distPath = resolve(__dirname, 'dist');
const srcPath = resolve(__dirname, 'src');
const horlogeJsPath = resolve(srcPath, 'js', 'horloge.js');
const indexJsPath = resolve(srcPath, 'js', 'index.js');
const indexHtmlPath = resolve(srcPath, 'index.html');
const indexHtmlDistPath = resolve(distPath, 'index.html');
let appJsDistPath = resolve(distPath, 'app.js');


/* mon code - fonctionnel
async function build() {
  console.log(chalk.bgBlue("1 - supprimer le dossier dist s'il exist"));
  await fs.rm('dist', { force: true, recursive: true }).catch((err) => console.error(err.message));

  console.log(chalk.bgBlue('2 - créer dossier dist'));
  await fs.mkdir('dist', { recursive: true });

  await fs.readFile(horlogeJsPath)
    .then( (buffer) => fs.writeFile(appJsDistPath, buffer))
    .then( () => console.log(chalk.bgBlue("3 - Copy horloge to app.js done")))
    .catch( (err) => console.error(err.message));

  await fs.readFile(indexJsPath)
    .then( (buffer) => fs.appendFile(appJsDistPath, buffer))
    .then( () => console.log(chalk.bgBlue("4 - Append index to app.js done")))
    .catch( (err) => console.error(err.message));

  // et sans mélanger les syntaxes..
  const buffer = await fs.readFile(appJsDistPath);
  const minifiedCode = await minify(buffer.toString('utf8'));
  await fs.writeFile(appJsDistPath, minifiedCode.code);
  console.log(chalk.bgBlue("5 - App.js minified"));

  // const buffer = await fs.readFile(appJsDistPath);
  const signature = await md5(buffer.toString('utf8'));
  console.log(signature);
  await fs.rename(appJsDistPath, appJsDistPath.replace('js', signature + '.js'))


}

build();
*/

// correction
async function rmAndMKdirDist() {
  await fs.rm(distPath, { force: true, recursive: true});
  await fs.mkdir(distPath);
  console.log(chalk.bgGreen('dist created'));
}

async function buildJs() {
  const buffers = await Promise.all([fs.readFile(horlogeJsPath), fs.readFile(indexJsPath)]);
  let bufferOrStrToWrite = Buffer.concat(buffers);
  let checksum;

  if (true) {
    const { code } = await minify(bufferOrStrToWrite.toString('utf8'));
    bufferOrStrToWrite = code;
  }

  if (true) {
    checksum = createHash('md5').update(bufferOrStrToWrite).digest('hex');
    appJsDistPath = appJsDistPath.replace('app.js', `app.${checksum}.js`)
  }

  await fs.writeFile(appJsDistPath, bufferOrStrToWrite);
  console.log(chalk.bgGreen('app.js created') + chalk.green(' + minified'));

  return checksum;
}

async function buildHtml(checksum) {
  let contentStr = await fs.readFile(indexHtmlPath, { encoding: 'utf-8' });

  contentStr = contentStr.replace('<script src="./js/horloge.js"></script>', '')
    .replace('js/index.js', checksum ? `app.${checksum}.js` : 'app.js');

  await fs.writeFile(indexHtmlDistPath, contentStr);
  console.log(chalk.bgGreen('index.html created'));
}

try {
  await rmAndMKdirDist();
  const checksum = await buildJs();
  await buildHtml(checksum);
} catch (err) {
  console.log(chalk.red(err.message));
}

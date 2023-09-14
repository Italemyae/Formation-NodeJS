// // traduction API non-promise vers promise
// function setTimeout(delay) {
//   return new Promise((resolve, reject) => {
//     globalThis.setTimeout(() => {
//       resolve();
//     }, delay);
//   });
// }

// setTimeout(1000).then(() => {
//   console.log('1s');
// });



// function setInterval(delay) {
//   return new Promise((resolve, reject) => {
//     globalThis.setInterval(() => {
//       resolve();
//     }, delay);
//   });
// }

import {setTimeout, setInterval} from 'node:timers/promises';
import {createInterface} from 'node:readline/promises'; // node 18
import { log } from 'node:console';

await setTimeout(1000);
console.log('setTimeout 1s');

// for await (const _ of setInterval(1000)) {
//   console.log('setInterval 1s');
// }

const rl = createInterface({
  input: process.stdin,
  output: process.stdout
})

console.log('Quel est le nombre ?');
for await (const answer of rl) {
  console.log('Vous avez répondu : ' + answer);
  console.log('Quel est le nombre ?');
}

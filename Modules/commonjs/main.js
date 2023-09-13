// const MyMath = require('./my-math.js'); // ancien
import { sum, sub } from './my-math.js'; // nouveau
import { hello } from './hello.js'; // nouveau

console.log(sum(1, 2)); // 3
console.log(sub(1, 2)); // -1

console.log(hello('Julien'));

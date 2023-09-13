/* eslint-disable @typescript-eslint/no-var-requires */
const MyMath = require('./my-math.cjs')
const hello = require('./hello.cjs');

console.log(MyMath.sum(1, 2)); // 3
console.log(MyMath.sub(1, 2)); // -1

console.log(hello('Julien'));

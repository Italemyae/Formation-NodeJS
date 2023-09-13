const MyMath = require('./my-math.cjs');
const MyHello = require('./hello.cjs');

console.log(MyMath.sum(1, 2)); // 3
console.log(MyMath.sub(1, 2)); // -1

console.log(MyHello.hello('Julien'));

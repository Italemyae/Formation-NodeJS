function sum(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

console.log('execute my-math.js');

exports.sum = sum;
exports.sub = sub;
// console.log(exports);


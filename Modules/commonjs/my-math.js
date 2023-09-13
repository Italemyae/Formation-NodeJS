function sum(a, b) {
  return a + b;
}

// globalThis.sum = sum;

console.log('execute my-math.js');

// exports.sum = sum; // ancien
// console.log(exports);

export { sum }; // nouveau

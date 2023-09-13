import fs from 'node:fs';

// Sync
const buffer = fs.readFileSync('03-path.js');
console.log(buffer.toString('utf-8'));

// Async
fs.readFile('03-path.js', (err, buffer) => {
  console.log('Async');
  console.log(buffer.toString('utf-8'));
});

console.log('Test'); // executé avant Async

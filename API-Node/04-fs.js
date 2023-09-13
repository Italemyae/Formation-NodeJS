import fs from 'node:fs';
import { CLIENT_RENEG_WINDOW } from 'node:tls';

// Sync
const buffer = fs.readFileSync('03-path.js');
console.log(buffer.toString('utf-8'));

// Async
fs.readFile('03-path.js', (err, buffer) => {
  console.log('Async');
  console.log(buffer.toString('utf-8'));
});

console.log('Test'); // executé avant Async

import fs from 'node:fs';

// Sync
try {
  const buffer = fs.readFileSync('03-path.js'); // lecture
  fs.writeFileSync('03-path.bak', buffer); // ecriture .bak

  console.log(buffer.toString('utf-8'));
  console.log("Copy Sync Done");

} catch (err) {
  console.error(err.message);
}

// Async - Callback Hell / Pyramid of Doom
fs.readFile('03-path.js', (err, buffer) => {
  if (err) {
    console.error(err.message);
  } else {
    fs.writeFile('03-path.bak', buffer, (err) => {
      if (err) {
       console.log(err.message);
      } else {
        console.log(('Copy Async Done'));
      }
    })
  }

  console.log('Async');
  console.log(buffer.toString('utf-8'));
});

console.log('Test'); // executé avant Async

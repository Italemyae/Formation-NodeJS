import fs from 'node:fs/promises';

/*
fs.readFile('03-path.js')
  .then((buffer) => {
    return fs.writeFile('03-path.bak', buffer);
  })
  .then(() => {
    console.log('Copy Async Done');
  })
  .catch((err) => {
    console.error(err.message);
  });
*/


fs.readFile('03-path.js')
  .then((buffer) => fs.writeFile('03-path.bak', buffer))
  .then(() => console.log('Copy Async Done'))
  .catch((err) =>console.error(err.message));

console.log('Test'); // executé avant Async

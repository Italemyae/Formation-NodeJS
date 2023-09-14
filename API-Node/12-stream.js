import { createReadStream, createWriteStream } from 'node:fs';
import { createGzip } from 'node:zlib';
const readStream = createReadStream('exemple.html');

/*
let paquets = 0;

readStream.on('data', (data) => {
  console.log((++paquets) + ' === ' + data.toString());
})
*/

const writeStream = createWriteStream('exemple.html.zip')

const transformStream = createGzip();

readStream.pipe(transformStream).pipe(writeStream)


// cat exemple.html | gzip > vi exemple.html.zip

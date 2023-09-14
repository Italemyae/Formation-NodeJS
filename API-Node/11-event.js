import EventEmitter from 'node:events';

const events = new EventEmitter();

// enc as de reception d'un event data, on traite la data dans le callback
events.on('data', (data) => {
  console.log('on ', data);
})

events.once('data', (data) => {
  console.log('once ', data);
})


events.emit('data', 'hello'); // on envoie l'info via l'event data
events.emit('data', 'hello'); // pas sur once
events.emit('data', 'hello'); // pas sur once
console.log('FIN');

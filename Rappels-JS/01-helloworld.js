console.log('Hello world');

function hello(name) {
  return `hello ${name}`;
}

const names = ['Romain', 'Julien', 'Eric', 'Jean'];
for(const n of names) {
  console.log(hello(n))
}

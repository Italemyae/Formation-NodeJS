console.log('Hello world');

const names = ['Romain', 'Julien', 'Eric', 'Jean'];

/**
 *
 * @param {string} name
 * @returns
 */
function hello(name: string) {
  return `hello ${name.toUpperCase()}`;
}

for (const n of names) {
  console.log(hello(n));
}

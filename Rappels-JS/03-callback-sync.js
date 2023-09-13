const names = ['Romain', 'Julien', 'Eric', 'Jean'];

function hello(name) {
  return `hello ${name.toUpperCase()}`;
}

// programmation impérative (for / of)
for (const n of names) {
  if (n.length === 4) {
    console.log(hello(n));
  }
}

// programmation fonctionnelle
names.filter((n) => n.length === 4)
     .forEach((n) => console.log(hello(n)));

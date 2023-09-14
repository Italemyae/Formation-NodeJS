import express from 'express';

const todos = [
  {
    id: 1,
    title: 'Acheter du pain',
    completed: false,
  },
  {
    id: 2,
    title: 'Introduire Express',
    completed: true,
  },
];

const app = express();

// Ajouter vos routes ici :
// ...

app.listen(4000, () => {
  console.log('Server started on http://localhost:4000');
});

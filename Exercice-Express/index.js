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

function nextId(todosArray) {
  let maxId = 0;

  for (const todo of todosArray) {
    if (todo.id > maxId) {
      maxId = todo.id;
    }
  }

  return maxId + 1;
}


const app = express();

app.get('/api/todos', (req, res) => {
  // res.statusCode = 200; //  (par défaut dans express)
  console.table(todos);
  res.json(todos)
});

app.get('/api/todos/:todoId', (req, res) => {
  // res.statusCode = 200; //  (par défaut dans express)
  console.table(todos.filter(todo => todo.id === Number(req.params.todoId)));
  res.json(todos.filter(todo => todo.id === Number(req.params.todoId)));
});

app.listen(4000, () => {
  console.log('Server started on http://localhost:4000');
});

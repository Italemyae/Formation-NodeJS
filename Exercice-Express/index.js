import express from 'express';

let todos = [
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

function nextId() {
  const maxId = todos.reduce((max, todo) => {
    return Math.max(max, todo.id);
  }, 0);
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
  // res.json(todos.filter(todo => todo.id === Number(req.params.todoId)));

  let todo = todos.filter(todo => todo.id === Number(req.params.todoId));
  if (todo.length) {
    res.json(todo);
  } else {
    res.statusCode = 404;
    res.json({msg: 'Todo not found'});
  }
});

// express.json() == body-parser
app.post('/api/todos', express.json(), (req, res) => {
  console.log(req.body);
  const i = nextId();
  console.log(i);
  todos.push({'id': i, ...req.body});
  console.table(todos);

  let todo = todos.filter(todo => todo.id === i);
  res.statusCode = 201;
  res.json(todo);
})


app.delete('/api/todos/:todoId', (req, res) => {

  console.table(todos);

  const oldlengh = todos.length;
  todos = todos.filter(todo => todo.id !== Number(req.params.todoId));

  console.log('removed');
  console.table(todos);

  if (todos.length == oldlengh) {
    res.statusCode = 404;
    res.json({"msg": "Todo not found"});
  } else {
    res.statusCode = 200;
    res.json(todos);
  }
})


// express.json() == body-parser
app.put('/api/todos/:todoId', express.json(), (req, res) => {

  console.table(todos);
  const i = +req.params.todoId; // + revient à convertir en number
  const todo = todos.find((el) => el.id === i);

  if (!todo) {
    res.status = 404;
    res.json({
      msg: 'Todo not found',
    });
  }

  // on degage tout sauf body
  for (const key of Object.keys(todo)) {
    if (key === 'id') {
      continue;
    }
    delete todo[key];
  }

  // on retire body des trucs à ajouter (car il y est encore)
  delete req.body.id; // on ne garde que l'id de l'URL

  // on copy les k:v reçues
  for (const [key, value] of Object.entries(req.body)) {
    todo[key] = value;
  }

  console.table(todos);
  res.json(todo);
});


// express.json() == body-parser
app.patch('/api/todos/:todoId', express.json(), (req, res) => {

  console.table(todos);
  const i = +req.params.todoId; // + revient à convertir en number
  const todo = todos.find((el) => el.id === i);

  if (!todo) {
    res.status = 404;
    res.json({
      msg: 'Todo not found',
    });
  }

  // on degage tout sauf body
  // for (const key of Object.keys(todo)) {
  //   if (key === 'id') {
  //     continue;
  //   }
  //   delete todo[key];
  // }

  // on retire body des trucs à ajouter (car il y est encore)
  delete req.body.id;

  // on copy les k:v reçues
  for (const [key, value] of Object.entries(req.body)) {
    todo[key] = value;
  }

  console.table(todos);
  res.json(todo);
});






app.listen(4000, () => {
  console.log('Server started on http://localhost:4000');
});

import express from 'express'

const app = express();
// app.use(express.json())

app.post('/users/register', express.json(), (req, res) => {
  console.log(req.body);

  res.json({
    msg: 'user created',
  })
})


app.listen(3000, () => {
  console.log(`Serveur running at http://127.0.0.1:3000`);
});


// http://localhost:3000/users/register

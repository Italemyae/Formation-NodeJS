import express from 'express'

const app = express();


app.use('/api', (req, res)  => {
  res.send('/api');
})

// URL exacte /demo-all
app.all('/demo-all', (req, res)  => {
  res.send('Demo');
})

// app.METHOD HTTP
app.get('/', (req, res) => {
  console.log(req.query.order);
  res.send('Home');
})

app.get('/hello/:prenom', (req, res) => {
  res.json({msg: 'Hello' + req.params.prenom});
})

app.get('/api/hello', (req, res) => {
  res.json({msg: 'Hello'});
})




app.listen(3000, () => {
  console.log(`Serveur running at http://127.0.0.1:3000`);
});

const express = require('express');
const app = express();
const port = 3000;
const host = 'localhost';

const { list } = require('./controllers/list');

app.get('/', (req, res) => {
  res.send(`<h1>Benvenuto nel mio blog</h1>`);
});

app.get('/list', list);

app.listen(port, host, () => {
  console.log(`Server avviato su http://${host}:${port}`);
});

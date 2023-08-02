const express = require('express');
const path = require('path');

const app = express();

const PORT = 3000;

app.use(express.json());

app.use(express.static('./ui'));

app.get('/hello', (req, res) => {
  res.status(200).json({ Message: 'hello world from js' });
})
app.get('/bye', (req, res) => {
  res.status(200).json({ Message: 'goodbye world :(' });
})

app.get('/', (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, '../ui/index.html'));
})

app.listen(PORT, () => {
  console.log('Listening on: ' + PORT);
})
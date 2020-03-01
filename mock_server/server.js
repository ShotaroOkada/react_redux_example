const express = require('express');
const user = require('./jsons/user.json')
const tasks = require('./jsons/tasks.json')

const app = express();
const port_number = 3001;

// CORS対策
app.use((_, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.get('/', (_, res) => res.send('React Redux Example Mock Server'));

app.get('/user', (req, res) => {
  const id = req.query.id
  if (id == "user01") {
    res.status(200).json(user)
  } else {
    res.status(400).send('id is not exist')
  }
});

app.get('/tasks', (req, res) => {
  const id = req.query.id
  if (id == "user01") {
    res.status(200).json(tasks)
  } else {
    res.status(400).send('id is not exist')
  }
})

app.listen(port_number, () => console.log('Listening on Port' + port_number));


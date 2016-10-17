const path = require('path');

//npm
const express = require('express');
const ejs = require('ejs');

//initialize
const app = express();

//set views directory
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//route that renders index view
// app.get('/', function(req, res, next) {
//   res.render('index.ejs', {greeting: 'Hello, from ejs!'});
// });

app.get('/', function(req, res, next) {
  res.render('index.ejs', { names: ['Rick', 'Morty', 'Summer', 'Beth', 'Jerry']})
});

const port = 3000;
app.listen(port, () => console.log(`Server listening on: ${port}`));

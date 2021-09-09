const express = require('express');
const path = require('path');

const app = express();

//ejs setup
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//routers
app.get('/', (req, res) => {
  res.render('index');
});

app.listen(3000, () => {
  console.log('server is running on 3000');
});

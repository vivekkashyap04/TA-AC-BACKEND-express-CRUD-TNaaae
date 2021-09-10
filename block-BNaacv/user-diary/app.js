const express = require('express');
const path = require('path');
const user = require('./routes/user');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: false }));

app.use('/users', user);

app.get('/', (req, res) => {
  res.send('welcome');
});
app.use((req, res, next) => {
  res.send('page not found');
});

app.listen(4000, () => {
  console.log('server is listen on 4000');
});

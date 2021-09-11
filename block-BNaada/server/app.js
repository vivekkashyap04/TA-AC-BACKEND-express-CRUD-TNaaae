const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const routingIndex = require('./routes/index');
const userRouting = require('./routes/user');

//databse connect
mongoose.connect('mongodb://localhost/bookStore', (err) => {
  console.log(err ? err : 'database is connected');
});

const app = express();

//views setup
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
//middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

//routing setup
app.use('/', routingIndex);
app.use('/users', userRouting);

app.use((req, res, next) => {
  res.send('page not found');
  next();
});

app.use((err, req, res, next) => {
  res.send(err);
});

app.listen(3000, () => {
  console.log('server is listen on 3000');
});

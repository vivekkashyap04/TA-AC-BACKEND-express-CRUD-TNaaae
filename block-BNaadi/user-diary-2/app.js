const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const userRoute = require('./routes/user');

//databse connect

mongoose.connect('mongodb://localhost/user-diary', (err) => {
  console.log(err ? err : 'database is connected');
});
//app
const app = express();
//set view
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

//routes
app.use('/users', userRoute);
app.get('/', (req, res) => {
  res.send('welcome');
});

//error
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

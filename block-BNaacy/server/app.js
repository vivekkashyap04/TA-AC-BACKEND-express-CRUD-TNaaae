const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const indexRouter = require('./routes/index');
const userRouter = require('./routes/user');

//database connect
mongoose.connect('mongodb://localhost/bookStore', (err) => {
  console.log(err ? err : 'database is connected');
});

const app = express();
//set view
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//middleware capture from data
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

//middleware router
app.use('/', indexRouter);
app.use('/users', userRouter);
//error
app.use((req, res, next) => {
  res.send('page not found');
  next();
});

app.use((err, req, res, next) => {
  res.send(err);
});

//listener
app.listen(3000, () => {
  console.log('server is listen on 3000');
});

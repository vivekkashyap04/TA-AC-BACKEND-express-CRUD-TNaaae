var express = require('express');
const path = require('path');
var app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use('/student', require('./routes/student'))

app.get('/', (req, res) => {
  res.send('welcome');
});

app.listen(3000, () => {
  console.log('server is running on 3000');
});

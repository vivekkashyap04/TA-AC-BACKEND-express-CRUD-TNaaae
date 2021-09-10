const express = require('express');
const router = express.Router();

router.get('/new', (req, res) => {
  res.send('request form');
});

router.get('/', (req, res) => {
  res.render('student', { list: ['ankit', 'suraj', 'prashant', 'ravi'] });
});

router.get('/:id', (req, res) => {
  var id = req.params.id;

  res.render('studentDetail', {
    student: { name: 'rahul', email: 'rahul@altcampus.io' },
  });
});

module.exports = router;

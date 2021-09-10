const express = require('express');
const router = express.Router();

router.get('/new', (req, res) => {
  res.render('userForm');
});

router.get('/', (req, res) => {
  var list = ['vivek', 'sunny', 'bim'];
  res.render('users', { list: list });
});
router.get('/:id', (req, res) => {
  res.render('singleUser', {
    user: {
      name: 'vivek',
      email: 'viek@gmail.com',
    },
  });
});

router.post('/', (req, res) => {
  res.send(req.body);
});
router.delete('/', (req, res) => {});
router.put('/', (req, res) => {});

module.exports = router;

const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.get('/new', (req, res) => {
  res.render('userForm');
});

router.post('/', (req, res, next) => {
  User.create(req.body, (err, usrdata) => {
    console.log(usrdata);
    if (err) return next(err);
    res.redirect('/');
  });
});

module.exports = router;

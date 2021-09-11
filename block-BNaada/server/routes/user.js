const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.get('/new', (req, res) => {
  res.render('userForm');
});

router.get('/', (req, res, next) => {
  User.find({}, (err, users) => {
    console.log(err, users);
    if (err) return next(err);
    res.render('user', { user: users });
  });
});

router.get('/:id', (req, res, next) => {
  var id = req.params.id;
  User.findById(id, (err, user) => {
    res.render('userDetail', { user: user });
  });
});

router.post('/', (req, res, next) => {
  User.create(req.body, (err, usrdata) => {
    console.log(usrdata);
    if (err) return next(err);
    res.redirect('/');
  });
});

module.exports = router;
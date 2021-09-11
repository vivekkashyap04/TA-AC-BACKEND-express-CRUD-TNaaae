const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.get('/', (req, res, next) => {
  User.find({}, (err, data) => {
    if (err) return next(err);
    res.render('user', { user: data });
  });
});

router.get('/new', (req, res) => {
  res.render('userForm');
});
router.post('/', (req, res, next) => {
  User.create(req.body, (err, data) => {
    if (err) return next(err);
    res.redirect('/users');
  });
});

router.get('/:id', (req, res, next) => {
  var id = req.params.id;
  User.findById(id, (err, data) => {
    if (err) return next(err);
    res.render('userDetail', { user: data });
  });
});

router.get('/:id/edit', (req, res, next) => {
  var id = req.params.id;
  User.findById(id, (err, data) => {
    console.log(data);
    if (err) return next(err);
    res.render('editForm', { user: data });
  });
});

router.post('/:id', (req, res, next) => {
  var id = req.params.id;
  User.findByIdAndUpdate(id, req.body, (err, data) => {
    if (err) return next(err);
    res.redirect('/users/' + id);
  });
});
module.exports = router;

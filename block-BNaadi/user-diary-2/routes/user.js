const { Router } = require('express');
const express = require('express');
const route = express.Router();
const User = require('../models/user');

route.post('/', (req, res, next) => {
  User.create(req.body, (err, data) => {
    if (err) return next(err);
    res.redirect('/users');
  });
});

route.get('/', (req, res, next) => {
  User.find({}, (err, data) => {
    if (err) return next(err);
    res.render('user', { user: data });
  });
});

route.get('/:id', (req, res, next) => {
  var id = req.params.id;
  User.findById(id, (err, data) => {
    if (err) return next(err);
    res.render('userDetail', { user: data });
  });
});

route.put('/:id', (req, res, next) => {
  User.findByIdAndUpdate(req.params.id, req.body, (err, data) => {
    if (err) return next(err);
    res.redirect('/users');
  });
});

route.delete('/:id', (req, res, next) => {
  User.findByIdAndDelete(req.params.id, (err, data) => {
    if (err) return next(err);
    res.redirect('/users');
  });
});
module.exports = route;

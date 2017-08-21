const express = require('express');
const Frog = require('../models/frog');
const List = require('../models/list');
const User = require('../models/user');
const router = express.Router();

router.get("/", (req,res) => {
  User.find().then(user => {
    res.json(user);
  })
});

router.get("/:id", (req,res) => {
  User.findById(req.params.id).then((user) => {
    res.json(user);
  });
});


module.exports = router;
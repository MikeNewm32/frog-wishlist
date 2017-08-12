const express = require('express');
const Frog = require('../models/frog');
const router = express.Router();

router.get("/", (req,res) => {
  Frog.find().then(frogs => {
    res.json(frogs);
  })
});

router.get("/:id", (req,res) => {
  Frog.findById(req.params.id).then((frogs) => {
    res.json(frogs);
  });
});


module.exports = router;
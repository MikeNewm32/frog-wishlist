const express = require('express');
const Breeder = require('../models/breeder');
const router = express.Router();

router.get("/", (req,res) => {
  Breeder.find().then(breeders => {
    res.json(breeders);
  })
});

router.get("/:id", (req,res) => {
  Breeder.findById(req.params.id).then((breeders) => {
    res.json(breeders);
  });
});


module.exports = router;
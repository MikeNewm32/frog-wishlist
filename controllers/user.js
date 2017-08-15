const express = require('express');
const User = require('../models/user');
const List = require('../models/list');
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

router.post('/create', (req, res) => {
  User.find().then((user) => {
    const userNameToSearch = users.find((user) => {
      return user.userName === req.body.userName
    })
    if(userNameToSearch) {
      res.send("This username is already in use!")
    } else {
      const newUser = new User();
      newUser.userName = req.body.userName;
      const newList = new List();
      newList.name = "My frogs";
      newList.frogs = [];
      newList.save()
      newUser.list = [newList];
      newUser.save()
    }
  })
})


module.exports = router;
const express = require('express');
const List = require('../models/list');
const Frog = require('../models/frog');
const User = require('../models/user');
const router = express.Router();

router.get("/:id", (req,res) => {
  List.findById(req.params.id).then((list) => {
    res.json(list);
  });
});

router.post("/new", (req,res) => {
    const newList = new List ()
    newList.name = req.body.name;
    newList.save()
    User.findById(req.params.userId).then((user) => {
        user.list.push(newList)
        res.json(user);
        return user.save()
  });
});

router.post("/:id", (req, res) => {
    const newFrog = new Frog()
    newFrog.morph = req.body.morph;
    newFrog.scientificName = req.body.scientificName;
    newFrog.description = req.body.description;
    newFrog.picture = req.body.picture;
    newFrog.care = req.body.care

    User.findById(req.params.userId)
    .then((user) => {
        const foundList = user.list.find((list) => {
            return list.id === req.params.id
        })
        const oldList = foundList;
        foundList.frog.push(newFrog);
        const updateList = foundList;
        List.findByIdAndUpdate(oldList, updateList, {new: true})
        .then((list) => {console.log('update' + list)})
        .then(() => {console.log(user)
        res.json(user)
    })
    return user.save()
    })
})


module.exports = router;
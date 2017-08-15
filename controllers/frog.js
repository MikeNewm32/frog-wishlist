const express = require('express');
const List = require('../models/list')
const Frog = require('../models/frog');
const User = require('../models/user')
const router = express.Router({mergeParams: true});

router.delete('/:id', (req, res) => {
  const userId = req.params.userId;
  const listId = req.params.listId;
  const frogId = req.params.frogId;

  User.findById(userId).then((user) => {
    const foundList = user.list.find((list) => {
      return list.id === listId
    })
    const frogToRemove = foundList.frog.findIndex((frog) => {
      return frog.id === frogId
    })
    const oldList = foundList;
    foundList.frog.splice(frogToRemove, 1);
    const updateList = foundList;
    List.findByIdAndUpdate(oldList, updateList, {new: true})
    .then((list) => {console.log('removed frog from ' + list)
    res.json(list)
  })
  return user.save()
  })
})



module.exports = router;
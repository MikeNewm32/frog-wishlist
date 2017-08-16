const express = require('express');
const List = require('../models/list')
const Frog = require('../models/frog');
const User = require('../models/user')
const router = express.Router({mergeParams: true});

router.get("/", (req, res) => {
  const userId = req.params.id;
  const listId = req.params.listId;
  const frogId = req.params.frogId;

  User.findById(userId).then((user) => {
    console.log(user)
    const foundList = user.lists.find((list) => {
      return list.id === listId
    })
    console.log(foundList.frogs)
    res.json(foundList.frogs)
  });
});

router.post("/", (req, res) => {
  const userId = req.params.id;
  const listId = req.params.listId;
  const frogId = req.params.frogId;
  const newFrogInfo = req.body.frogs;

  User.findById(userId).then((user) => {
    const foundList = user.lists.find((list) => {
      return list.id === listId
    })
    const newFrog = new Frog(newFrogInfo);
    foundList.frogs.push(newFrog);
    console.log(newFrog)
    return user.save();
  }).then((user) => {
    res.json(user);
  }).catch(err => console.log(err));
})

router.get("/:frogId", (req, res) => {
  const userId = req.params.id;
  const listId = req.params.listId;
  const frogId = req.params.frogId;

  User.findById(userId).then((user) => {
    const foundList = user.lists.find((list) => {
      return list.id === listId
    })
    const foundFrog = foundList.frogs.find((frog) => {
      return frog.id === frogId
    })
    console.log(foundList.frogs)
    res.json(foundFrog)
  });
});

router.put('/:frogId', (req, res) => {
  const userId = req.params.id;
  const listId = req.params.listId;
  const frogId = req.params.frogId;
  const updateFrogInfo = req.body;
  const foundFrogArray = [];
  User.findById(userId).then((user) => {
    const foundList = user.lists.find((list) => {
      return list.id === listId;
    })
    const foundFrog = foundList.frogs.find((frog) => {
      return frog.id === frogId;
    })
    foundFrog.morph = req.body.morph;
    foundFrog.scientificName = req.body.scientificName;
    foundFrog.description = req.body.description;
    foundFrog.care = req.body.care;
    foundFrogArray.push(foundFrog);
    return user.save();
  }).then((user) => {
    console.log("Updated user " + user._id)
    res.json(foundFrogArray)
  })
});

router.delete('/:frogId/delete', (req, res) => {
  const userId = req.params.id;
  const listID = req.params.listId;
  const frogId = req.params.frogId;

  User.findById(userId).then((user) => {
    const newLists = user.lists.map((trip) => {
      if (list.id === listID){
        const newFrogs = trip.frogs.filter((frog) => {
          return frog.id !== frogId
        })
        list.frogs = newFrogs;
      }
      console.log(list)
      return list
    })
    console.log(newLists)
    user.lists = newLists;
    return user.save();
  }).then(() => {
    console.log('you did it')
    res.send(200);
  }).catch((error) => {
    console.log(error);
  })
})



module.exports = router;
const express = require('express');
const List = require('../models/list');
const Frog = require('../models/frog');
const User = require('../models/user');
const router = express.Router({ mergeParams: true });

router.get("/", (req, res) => {
    const userId = req.params.id;
    const listId = req.params.listId;

    User.findById(userId).then((user) => {
        const arrayOfLists = user.lists
        res.json(arrayOfLists)
    });
});

router.post("/", (req, res) => {
    const userId = req.params.id;
    const newListFrogs = req.body.lists;

    User.findById(userId).then((user) => {
        const newList = new List(newListFrogs);
        user.lists.push(newList);
        console.log(newList)
        return user.save();
    }).then((user) => {
        res.json(user);
    }).catch(err = console.log(err));
})

router.get('/:listId', (req, res) => {
    const userId = req.params.id;
    const listId = req.params.listId;
    User.findById(userId).then((user) => {
        const foundList = user.lists.find((list) => {
            return list.id === listId;
        })
        res.json(foundList)
    })
    .catch((error) => {
        console.log("Failed " + error);
    })
});


module.exports = router;
const express = require('express');
const Frog = require('../models/frog');
const List = require('../models/list');
const User = require('../models/user');
const router = express.Router({ mergeParams: true });

router.get("/", (req, res) => {
    const userId = req.params.userId;
    const listId = req.params.id;

    User.findById(userId).then((user) => {
        const lists = user.lists
        res.json(lists)
    });
});

router.post("/", (req, res) => {
    const userId = req.params.userId;
    console.log("req.body is ")
    console.log(req.body)
    console.log("req.body.list is ")
    console.log(req.body.list)
    const newListFrogs = req.body;
    console.log(newListFrogs);
    User.findById(userId).then((user) => {
        const newList = new List(newListFrogs);
        user.lists.push(newList);
        console.log(newList)
        return user.save();
    }).then((user) => {
        res.json(user);
    }).catch(err => console.log(err));
})

router.get('/:id', (req, res) => {
    const userId = req.params.userId;
    console.log(userId)
    const listId = req.params.id
    console.log(listId)
    User.findById(userId).then((user) => {
        // console.log(user.lists)
        let list = {};
        user.lists.map((userList) => {
            if (userList.id === listId) {
                return list = userList 
            }   
        })
        res.json({list})
        console.log(list);
    })

    // User.findById(userId).then((user) => {
    //     const foundList = user.lists.findById(listId)
    //     // res.json(foundList)
    // })

    // .catch((error) => {
    //     console.log("Failed " + error);
    // })
});

router.put('/:id', (req, res) => {
    const userId = req.params.userId;
    const listId = req.params.id
    console.log(req.body);
    User.findById(userId).then((user) => {
        let list = {};
        user.lists.map((userList) => {
            if (userList.id === listId) {
                return list = userList
            }
        })
        console.log(list.name)
        list.name = req.body.name;
        console.log(list.name)
        user.save();
        // res.redirect(`/user/${userId}/lists/${listId}`)
    })
})

router.delete('/:id/delete', (req, res) => {
    const userId = req.params.userId;
    console.log("userId in controller is: " + userId);
    const listId = req.params.id;
    console.log("listId in controller is: " + listId);
    User.findById(userId).then((user) => {
        console.log(user.lists)
        let listToRemove = {};
        user.lists.map((list) => {
            if (list.id === listId) {
                return listToRemove = list;
            }
        })
        console.log(listToRemove);
        let newList = {};
        user.lists.map((list, index) => {
            if (list === listToRemove) {
                return newList = user.lists.splice(list, index)
            }
        })
        console.log("new list is: ");
        console.log(newList);
        user.lists = newList;
        console.log(user.lists);
        // user.lists.splice(listToRemove, 1);
        // console.log(user.lists);
        return user.save();
    })
});


module.exports = router;
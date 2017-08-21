const mongoose = require('mongoose');


const frogSchema = mongoose.Schema ({
    morph: String,
    scientificName: String,
    description: String,
    // picture: String,
    care: Number
});

const listSchema = mongoose.Schema ({
    name: String,
    frogs: [frogSchema]
});

const userSchema = mongoose.Schema ({
    userName: String,
    password: String,
    lists: [listSchema]
    
});

const Frog = mongoose.model('Frog', frogSchema);
const List = mongoose.model('List', listSchema);
const User = mongoose.model('User', userSchema);

module.exports = {
    Frog, List, User
};
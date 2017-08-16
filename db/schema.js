const mongoose = require('mongoose');


const FrogSchema = mongoose.Schema ({
    morph: String,
    scientificName: String,
    description: String,
    picture: String,
    care: Number
});

const ListSchema = mongoose.Schema ({
    name: String,
    frogs: [FrogSchema]
});

const UserSchema = mongoose.Schema ({
    userName: String,
    password: String,
    list: [ListSchema]
    
});

const Frog = mongoose.model('Frog', FrogSchema);
const List = mongoose.model('List', ListSchema);
const User = mongoose.model('User', UserSchema);

module.exports = {
    Frog, List, User
};
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const FrogSchema = new Schema ({
    morph: String,
    scientificName: String,
    description: String,
    picture: String,
    care: Number
});

const ListSchema = new Schema ({
    name: String,
    frogs: [FrogSchema]
});

const UserSchema = new Schema ({
    userName: String,
    list: [ListSchema],
    
});

const Frog = mongoose.model('Frog', FrogSchema);
const List = mongoose.model('List', ListSchema);
const User = mongoose.model('User', UserSchema);

module.exports = {
    Frog, List, User
};
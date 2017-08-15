const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const FrogSchema = new Schema ({
    morph: String,
    scientificName: String,
    description: String,
    picture: String,
    care: Number
});

const BreederSchema = new Schema ({
    breederName: String,
    website: String
});

const UserSchema = new Schema ({
    userName: String,
    wishlist: [FrogSchema],
    breederList: [BreederSchema]
});

const User = mongoose.model('User', UserSchema);
const Frog = mongoose.model('Frog', FrogSchema);
const Breeder = mongoose.model('Breeder', BreederSchema);

module.exports = {
  User, Frog, Breeder
};
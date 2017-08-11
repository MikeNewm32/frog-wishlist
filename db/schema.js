const mongoose = require('mongoose');

const userSchema = mongoose.Schema ({
    userName: String,
    createdAt: Date,
    updatedAt: Date,
    wishlist: [morph] 
});

const frogSchema = moongoose.Schema ({
    morph: String,
    scientificName: String,
    description: String,
    picture: String,
    care: Number
});

const breederSchema = mongoose.Schema ({
    breederName: String,
    website: String
});

const User = mongoose.model('User', userSchema);
const Frog = mongoose.model('Frog', frogSchema);
const Breeder = mongoose.model('Breeder', breederSchema);

module.exports = {
  User, Frog, Breeder
};
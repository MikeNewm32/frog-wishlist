const mongoose = require('mongoose');


const frogSchema = mongoose.Schema ({
    morph: String,
    scientificName: String,
    description: String,
    picture: String,
    care: Number
});

const userSchema = mongoose.Schema ({
    username: String,
    createdAt: Date,
    updatedAt: Date,
    wishlist: [frogSchema] 
})

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
require("dotenv").config();
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI);

const User = require('../models/user');
const Frog = require('../models/frog');
const Breeder = require('../models/breeder');

// Use native promises
mongoose.Promise = global.Promise;

User.remove({}, (err) => console.log(err));
Frog.remove({}, (err) => console.log(err));
Breeder.remove({}, (err) => console.log(err));

const michael = new User({
  username: "Michael",
  wishlist: []
})

const cobalt = new Frog({
  morph: "Cobalt",
  scientificName: "Dendrobates tinctorius",
  description: "Great beginner frog, bright blue and yellow coloration, bold, easy to breed, quiet call",
  picture: "http://i.imgur.com/PhQkinF.jpg",
  care: '2'
})

const shoreThingExotics = new Breeder({
  breederName: "Lindsay Shore",
  website: "https://www.shorethingexotics.com/"
})

michael.save().then(() => console.log("Michael Saved!"));
cobalt.save().then(() => console.log("Cobalt Saved!"));
shoreThingExotics.save().then(() => console.log("Shorething Saved!"))


mongoose.connection.close();
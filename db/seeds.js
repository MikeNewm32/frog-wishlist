require("dotenv").config();
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI);

const User = require('../models/user');
const Frog = require('../models/frog');
const Breeder = require('../models/breeder');
const Wishlist = require('../models/wishlist')

// Use native promises
mongoose.Promise = global.Promise;

User.remove({}, (err) => console.log(err));
Frog.remove({}, (err) => console.log(err));
Breeder.remove({}, (err) => console.log(err));


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

const wishlist = new wishlist ({
  name: "Wish List",
  description: "Frogs I Want",
  frogs: [cobalt]
})

const myBreeders = new myBreeders ({
  name: "My Breeders",
  breeders: [shoreThingExotics]
})

const michael = new User({
  userName: "Michael",
  id: "this.id",
  wishlist: [wishlist],
  breeders: [myBreeders]
})

michael.save().then(() => console.log("Michael Saved!"));
wishlist.save().then(() => console.log("Wishlist Saved!"));
myBreeders.save().then(() => console.log("Breeders Saved!"))


mongoose.connection.close();
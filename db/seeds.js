require("dotenv").config();
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI);

const User = require('../models/user');
const Frog = require('../models/frog');
const WishList = require('../models/wishList');


mongoose.Promise = global.Promise;

User.remove({}, (err) => console.log(err));
Frog.remove({}, (err) => console.log(err));


const cobalt = new Frog({
  morph: "Cobalt",
  scientificName: "Dendrobates tinctorius",
  description: "Great beginner frog, bright blue and yellow coloration, bold, easy to breed, quiet call",
  picture: "http://i.imgur.com/PhQkinF.jpg",
  care: '2',
  breederLink: "https://www.shorethingexotics.com/"
})


const wishList = new WishList ({
  name: "Wish List",
  frogs: [cobalt]
})


const michael = new User({
  userName: "Michael",
  wishlist: [wishlist]
})

michael.save().then(() => console.log("Michael Saved!"));
wishList.save().then(() => console.log("Wishlist Saved!"));


mongoose.connection.close();
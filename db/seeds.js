require("dotenv").config();
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI);

const User = require('../models/user');
const List = require('../models/list');
const Frog = require('../models/frog');


mongoose.Promise = global.Promise;

User.remove({}, (err) => console.log(err));
List.remove({}, (err) => console.log(err));
Frog.remove({}, (err) => console.log(err));


const cobalt = new Frog({
  morph: "Cobalt",
  scientificName: "Dendrobates tinctorius",
  description: "Great beginner frog, bright blue and yellow coloration, bold, easy to breed, quiet call",
  picture: "http://i.imgur.com/PhQkinF.jpg",
  care: "2",
  breederLink: "https://www.shorethingexotics.com/"
});

const blueLegged = new Frog({
  morph: "Blue Legged",
  scientificName: "Ranitomeya ventrimaculata",
  description: " Great beginner thumbnail, bright yellow and black coloration, shy, easy to breed, quiet call, small, great in Groups",
  picture: "http://i.imgur.com/8VTMUj6.jpg",
  care: "2",
  breederLink: "https://www.shorethingexotics.com/"
});

const myFrogs = new List({
  name: "My frogs",
  frogs: [cobalt]
})

const wishList = new List ({
  name: "Wish List",
  frogs: [blueLegged]
});


const michael = new User({
  userName: "Michael",
  password: '12345',
  list: [wishList, myFrogs]
});

blueLegged.save().then(() => console.log("Blue Legged Saved!"));
cobalt.save().then(() => console.log("Cobalt Saved!"));
myFrogs.save().then(() => console.log("My frogs Saved!"));
wishList.save().then(() => console.log("Wishlist Saved!"));
michael.save().then(() => console.log("Michael Saved!"));


mongoose.connection.close();
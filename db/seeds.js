require("dotenv").config();
var mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI);

const User = require('../models/user');
const Frog = require('../models/frog');
const Breeder = require('../models/breeder');

// Use native promises
mongoose.Promise = global.Promise;

User.remove({}, (err) => console.log(err));
Frog.remove({}, (err) => console.log(err));
Breeder.remove({}, (err) => console.log(err));




mongoose.connection.close();
require("dotenv").config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const UserController = require("./controllers/user");
const FrogController = require("./controllers/frog");
const BreederController = require("./controllers/breeder");
const app = express();

mongoose.Promise = global.Promise;

// Mongoose connection
mongoose.connect(process.env.MONGODB_URI);
const connection = mongoose.connection;

connection.on('connected', () => {
  console.log('Mongoose Connected Successfully');    
}); 

connection.on('error', (err) => {  
  console.log('Mongoose default connection error: ' + err);
}); 

app.use('/api/user', UserController);
app.use('/api/frog', FrogController);
app.use('/api/breeder', BreederController);
app.use(bodyParser.json());
app.get('/', (req,res) => {
  res.send('Hello world!')
})

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log("Magic happening on port " + PORT);
})
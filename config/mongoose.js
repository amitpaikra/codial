const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/codeial_developement');

const db = mongoose.connection;

db.on('error', console.error.bind(console, "Error connecting to MongoDB"));

db.once('open', function(){
    console.log("Connected to DataBase :: MongoDB");
});

module.exports = db;
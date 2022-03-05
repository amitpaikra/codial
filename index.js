const express = require("express");
const app = express();
const port = 8000;
const expressLayouts = require("express-ejs-layouts");
const db = require('./config/mongoose');

app.use(expressLayouts);

//using express router
//any request comes in goes to routes folder
app.use("/", require("./routes/"));//by default it finds index.js
//set up the view engine
app.set('view engine', 'ejs');
app.set('views', "./views");

app.listen(port, function(err){
    if(err){
        console.log(`Error occured on running server in port ${port}`);
        return;
    }

    console.log(`server started running on port ${port}`);
});
const express = require("express");
const app = express();
const port = 8000;


app.listen(port, function(err){
    if(err){
        console.log(`Error occured on running server in port ${port}`);
        return;
    }

    console.log(`server started running on port ${port}`);
});
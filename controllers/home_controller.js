module.exports.home = function( req, res){

    // return res.send("<h1>I am here!!! Alright codeial</h1>")
    return res.render("home",{
        title:"AMIT PAIKRA"
    });
};
//require all of our dependencies, including our burger model
var burger = require("../models/burger.js");
var express = require("express");
var router = express.Router();

//redirect localhost/3000/ to our "index"
router.get("/", function(req,res){
    res.redirect("/index");
});
//using the index.handlebars page..
router.get("/index", function(req,res){
    burger.selectAll(function(data){
        var burgerObject = { burgers: data };
        res.render("index", burgerObject);
    });
});
//When we create a new burger, it's posted, then redirected to our "index" page
router.post("/burger/create/", function(req,res){
    burger.insertOne(req.body.burger_name, function(){
        res.redirect("/index");
    });
});
//When we update our burger from devoured = false to true, we once again get redirected to our "index" page
router.post("/burger/devour/:id", function(req,res){
    burger.updateOne(req.params.id, function(){
        res.redirect("/index");
    });
});
//export our routers....
module.exports = router;
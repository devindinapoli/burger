//require our connection..
var connection = require("./connection.js")

var orm = {
    //this will display all of the burgers
    selectAll: function(cb) {
        var queryString = "SELECT * FROM burgers";

        connection.query(queryString, function(err,result){
            if(err) throw err;
            cb(result);
        })
    },
    //will use this to update a burger from devoured = false to devoured = true 
    updateOne: function(burgerId, cb) {
        queryString = "UPDATE burgers SET ? WHERE ?";
        connection.query(queryString, [{devoured: true,}, {id: burgerId}], function(err,result){
            if(err) throw err;
            cb(result);
        })
    },
    //will use this to create a new burger, setting it to devoured = false and given a burger name 
    insertOne: function(burger_name,cb) {
        var queryString = "INSERT INTO burgers SET ?";
        connection.query(queryString, {
            burger_name: burger_name,
            devoured: false,
        }, function(err,result){
            if(err) throw err;
            cb(result);
        })
    },


}
//export the orm variable..
module.exports = orm;
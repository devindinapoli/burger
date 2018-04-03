var connection = require("./connection.js")


var orm = {
    selectAll: function(cb) {
        var queryString = "SELECT * FROM burgers";

        connection.query(queryString, function(err,result){
            if(err){
                throw err;
            }
            cb(result);
        })
    },

    updateOne: function(burgerId, cb) {
        queryString = "UPDATE burgers SET ? WHERE ?";
        connection.query(queryString, [{devoured: true,}, {id: burgerId}], function(err,result){
            if(err) throw err;
            cb(result);
        })
    },

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

module.exports = orm;
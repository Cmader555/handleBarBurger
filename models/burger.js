const orm = require("../config/orm");

//USED TO TEST FUNCTIONALITY
// let cols = ["burger_name", "devoured"]
// let vals = ['burger-test', false]
// let objColVals = {devoured: true}; 
// let condition = "id = 1"


let burger = {

    selectAll: function (cb) {

        orm.selectAll("burgers", function (res) {

            cb(res); 
            //console.log("burger.js selectAll", res);

        })

    },

    create: function (cols, vals, cb) {

        orm.create("burgers", cols, vals, function(res){

            cb(res); 
            //console.log("burger.js create", res); 
        })
    }, 

    update: function(objColVals, condition, cb) {

        orm.update("burgers", objColVals, condition, function(res){

            cb(res); 
            //console.log("burger.js update", res)


        }); 


    }

};

module.exports = burger; 

//USED TO TEST FUNCTIONALITY 
// burger.selectAll(); 
// burger.create(); 
// burger.update(); 
const express = require("express");
const burger = require("../models/burger.js");

const router = express.Router();



router.get("/", function (req, res) {
  burger.selectAll(function (data) {
    let hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
    //res.send("hello World")
  });
});



router.post("/api/burgers", function (req, res) {

  burger.create(
    [
      "burger_name", "devoured"
    ],
    [req.body.burger_name, req.body.devoured

    ], function (result) {
      // Send back the ID of the new quote
      res.json({ id: result.insertId });
    });

});



router.put("/api/burgers/:id", function(req, res) {
  let condition = "id = " + req.params.id;

  console.log("condition", condition);
  
  burger.update({
    devoured: req.body.devoured
  }, condition, function(result) {
    console.log(req.body)
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});


router.put("/api/burgers", function(req, res) {


    burger.delete(function(result) {


    })
})



module.exports = router; 
const express = require("express");
const burger = require("../models/burger.js"); 

const router = express.Router();



router.get("/", function(req, res) {
    burger.selectAll(function(data) {
      var hbsObject = {
        cats: data
      };
      console.log(hbsObject);
      //res.render("index", hbsObject);
      res.send("hello World")
    });
  });




  module.exports= router; 
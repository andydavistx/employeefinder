const express = require("express");
const router = express.Router();
const employeeList = require("../data/employees.js");

router.get("/api/employees", function(req,res){
 res.json({employeeList});

});


router.post("/api/employees", function(req,res){
    let randomUser = Math.floor(Math.random() * employeeList.length)
    console.log(employeeList[0])
   res.json(employeeList[randomUser]);
});


module.exports = router;
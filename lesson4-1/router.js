const express = require("express");

const router = express.Router();

const users = [
  { name: "ben", age: "20" },
  { name: "John", age: "30" },
  { name: "Chris", age: "40" },
  { name: "Jane", age: "50" },
]


router.get("/users",(req,res) => {
  console.log("user list");
  res.send({
    status:0,
    msg:"get users list",
    data:users
  })
})

router.post("/user",(req,res) => { 
  const body = req.body
  console.log("body",body);
  res.send({
    status:0,
    msg:"post user list",
    data:body
  })
})


module.exports = router
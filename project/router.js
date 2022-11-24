const express = require("express")
const axios = require("axios")
const router = express.Router();
// GET users
// http://localhost/api/users

router.get("/users",async(req,res) => {
  
  const url = "http://localhost:3000/users"
  const users = await axios.get(url);
  console.log("users",users.data);
  res.status(200).json({
    msg:"get users succeed",
    data: users.data,
  });
});

// GET cards by id
// http://localhost/api/cards?userId=user-uuid-1

// POST a card to special user
//http://localhost/api/cards

//DELETE card by card id
//http://localhost/api/cards/:card_id

module.exports = router;
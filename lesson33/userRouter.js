const express = require("express")

const router = express.Router();

const users = [
  { name: "ben", age: "20" },
  { name: "John", age: "30" },
  { name: "Chris", age: "40" },
  { name: "Jane", age: "50" },
]
router.get("/user/list",(req,res) => {
  res.send({
    status: 0,
    msg:"get succeed",
    data: users,

  });
});

router.post("/user/add", (req,res) => {
  const body = req.body;
  console.log('body',body);
  res.send({
    status:0,
    msg:'add user succceed',
    data:body
  })
})


router.post('/user/add',(req,res) => {

})

module.exports = router
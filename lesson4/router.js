const express = require('express');

const router = express.Router();

const users = [
  { name: "ben", age: "20" },
  { name: "John", age: "30" },
  { name: "Chris", age: "40" },
  { name: "Jane", age: "50" },
]

router.get('/users',(req, res) => {
  res.send({
    status:0,
    msg:'get users succceed',
    data:users

  })
})

router.post('/user', (req, res) => {
  const body = req.body;
  console.log('body', body);
  res.send({
    status: 0,
    msg: 'add user succceed',
    data: body,
  })


});



module.exports = router;
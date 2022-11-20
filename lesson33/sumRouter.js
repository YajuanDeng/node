const express = require('express');

const router = express.Router();

const sum = (n) => {
  let result = 0;
  for(let i =1; i<=n; i++){
    result +=i;
  }
  return result;
};

// for of 
const sum2 = (n) => {
  let result = 0;
  console.log("n",typeof n);
  let number = Number(n) + 1;
  console.log("arr", Array.from(Array(number).keys()));
  let arr = Array.from(Array(number).keys());
  for (let value of arr) {
    result += value;
  }
  return result;
}


router.get('/sum',(req,res) => {
  const number = req.query.number;
  console.log('number',number); 
  const result = sum2(number)
  res.send({
    msg:'get succeed',
    data:`Sum of 1-${30} is ${result}`
  })
})

module.exports = router



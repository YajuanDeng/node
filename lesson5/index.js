const express = require("express");

const app = express();

//定义一个简单的中间件函数
const mw = function(req,res,next){
  //获取请求到达服务器的时间
  const time = Date.now();
  //为req对象家在一个自定义属性，从而把时间共享给后面所有的api(给req这个obj增加一个key 和value)
  req.startTime = time;
  next()
}
//a把mw注册为全局中间件
app.use(mw);

app.get("/home",(req,res) => {
  console.log("call home page api");
  res.send(`home page ${req.startTime}`)
})

app.get("/user",(req,res) => {
  console.log("call user page api");

  res.send(`user page ${req.startTime}`)

})


app.listen(80, function() {

  console.log("Your server is running on http://127.0.0.1:80");

})
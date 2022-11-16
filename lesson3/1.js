const express = require("express");

//创建web服务器
const app = express();

app.get("/user",(req, res) => {
  //express 提供res.send()向客户端响应一个json对象
  res.send("响应成功");

})

app.post("/api",(req,res) => {

  res.send("post succed")

})

app.listen(80,() => {
  console.log("Sever is running on http://127.0.0.1:80");
})

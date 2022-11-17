const express = require("express");

//创建web服务器
const app = express();

app.get("/user",(req, res) => {
  //express 提供res.send()向客户端响应一个json对象
  //通过req.query可以获取客户端发送过来的查询数据
  console.log("query", req.query);
  res.send(req.query);

})

//:后面的为动态参数
app.get('/users/:id/:age',(req,res) => {
  console.log(req.params);
  res.send(req.params)
})

app.post("/api",(req,res) => {

  res.send("post succeed")

})

app.listen(80,() => {
  console.log("Sever is running on http://127.0.0.1:80");
})

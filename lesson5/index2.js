const express = require("express");

const app = express();

// app.use(express.json());
// app.use(express.urlencoded({extended:false}));

//导入解析表单的中间件 body-parser
const parser = require("body-parser")
app.use(parser.json());
app.use(parser.urlencoded());
//定义第一个全局中间件
const mw1 = (req,res,next) => {
  console.log("the first global middleware");
  next()
}
//定义第二个全局中间件
const mw2 = (req, res, next) => {
  console.log("the second global middleware");
  next()
}

const mw3 = (req, res, next) => {
  console.log("try yourself");
  next()
}

//app.use(mw1);
//app.use(mw2);

//调用局部中间件写法一
app.get("/user",mw2,mw1,(req,res) => { 
  console.log("user page");
  res.send("user page")
})

//调用局部中间件写法二
app.get("/about",[mw2,mw1],(req,res) => {
  console.log("about page");
  res.send("about page")
})

app.get("/book", mw3,(req, res) => {
  console.log("book page");
  res.send("book page")
})
//通过express.json()这个中间件解析表单中json格式的数据
app.post("/user",(req, res) => {
  console.log("req.body",req.body);
  res.send(req.body)
})

app.listen(60, () => {
  console.log("Your server is running on http://127.0.0.1:60");
})
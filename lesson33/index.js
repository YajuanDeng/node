const express = require("express");

const app = express();

app.use(express.json())

const userRouter = require("./userRouter")
const sumRouter = require("./sumRouter")

app.use("/user",userRouter)
app.use(sumRouter)

app.listen(80,() => {
  console.log("Server is running on http://127.0.0.1:80");
})
const express = require("express");

const app = express();

app.use(express.json())

const userRouter = require("./userRouter")

app.use(userRouter)

app.listen(80,() => {
  console.log("Server is running on http://127.0.0.1:80");
})
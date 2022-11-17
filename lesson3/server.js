const express = require("express");

const app = express();

const router = require("./router");

app.use("/profile",router)

app.listen(80,()=> {
  console.log("Server is running on http://127.0.0.1:80");
})
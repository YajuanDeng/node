const express = require("express");
const cors = require("cors")
const app = express()
const router = require("./router")

app.use(cors())
app.use(express.json())
app.use("/api",router)

app.listen(80,() => {
  console.log("server is running on http://127.0.0.1:80");
})
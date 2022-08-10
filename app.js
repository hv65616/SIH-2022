const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Server is runing on PORT:3000");
});

app.listen(3000, (req, res) => {
  console.log("Server started on port 3000");
});

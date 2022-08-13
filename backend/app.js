const express = require("express");
const path = require("path");
const app = express();

// staticpath store the location of frontend directory
const staticpath = path.join(__dirname, "../frontend");

// express.static is responsible displaying the static files as the server runs
app.use(express.static(staticpath));

app.get("/", (req, res) => {
  res.send("Server is runing on PORT:3000");
});

app.listen(3000, (req, res) => {
  console.log("Server started on port 3000");
});

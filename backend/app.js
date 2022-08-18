const express = require("express");
const path = require("path");
const app = express();
const bodyParser = require("body-parser");
// Official_Signup Schema
const User = require("./models/official_signup");
// Official_Login Schema
const User_Login = require("./models/official_login");
const connectToMongo = require("./db");
connectToMongo();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const staticpath = path.join(__dirname, "../frontend");

app.use(express.static(staticpath));

app.get("/", (req, res) => {
  res.send("Server is runing on PORT:3000");
});

// POST reqquest 
app.post("/official_signup", async (req, res) => {
  try {
    const password = req.body.password;
    const confirmpassword = req.body.confirmpassword;
    let user_email_check = await User.findOne({ email: req.body.email });
    if (user_email_check) {
      res.send("A user with the same email already exist");
    } else if (password === confirmpassword) {
      const user = new User({
        universityname: req.body.universityname,
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
      });
      const official_user = await user.save();
      res.send("User Registration Successful");
    } else {
      res.send("Password are not matching");
    }
  } catch (error) {
    res.status(400).send(error);
  }
});

// Post Request
app.post("/official_login", async (req, res) => {
  try {
    const username = req.body.username;
    const password = req.body.password;
    const user = await User_Login.findOne({ username: username });
    if (user.password === password) {
      res.send("User Login Successful");
    } else {
      res.send("Please enter your correct password");
    }
  } catch (error) {
    res.status(400).send("Invalid");
  }
});

app.listen(3000, (req, res) => {
  console.log("Server started on port 3000");
});

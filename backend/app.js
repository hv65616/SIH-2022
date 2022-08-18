const express = require("express");
const path = require("path");
const app = express();
const bodyParser = require("body-parser");
const User = require("./models/official_signup");
const connectToMongo = require("./db");
connectToMongo();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const staticpath = path.join(__dirname, "../frontend");

app.use(express.static(staticpath));

app.get("/", (req, res) => {
  res.send("Server is runing on PORT:3000");
});

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

app.listen(3000, (req, res) => {
  console.log("Server started on port 3000");
});

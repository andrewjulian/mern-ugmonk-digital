require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const bcrypt = require("bcryptjs");
const passport = require("passport");
const passportlocal = require("passport-local").Strategy;
const session = require("express-session");

const User = require("./User/Model");

const listener = app.listen(process.env.PORT || 3000, () => {
  console.log("Your app is listening on port " + listener.address().port);
});
const uri = process.env.ATLAS_URI;

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB Atlas!");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB Atlas:", error);
  });

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors({ origin: "http://127.0.0.1:5175/", credentials: true }));

app.use(
  session({
    secret: uri,
    resave: true,
    saveUninitialized: true,
  })
);

app.use(cookieParser(uri));
app.use(passport.initialize());
app.use(passport.session());
require("./User/PassportConfig")(passport);

app.use("/api/user", require("./User/Route"));
app.use("/api/card", require("./Cards/Route"));
//app.use("/api/task", require("./Tasks/Route"));

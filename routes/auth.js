const express = require("express");
const passport = require('passport');
const router = express.Router();
const User = require("../models/User");

const nodemailer = require("nodemailer");
const templates = require("../public/javascripts/template");

// Bcrypt to encrypt passwords
const bcrypt = require("bcrypt");
const bcryptSalt = 10;


router.get("/login", (req, res, next) => {
  res.render("auth/login", { "message": req.flash("error") });
});

router.post("/login", passport.authenticate("local", {
  successRedirect: "main/zen-board",
  failureRedirect: "/auth/login",
  failureFlash: true,
  passReqToCallback: true
}));

router.post("/signup", (req, res, next) => {
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;
  const characters =
    "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let token = "";
  for (let i = 0; i < 25; i++) {
    token += characters[Math.floor(Math.random() * characters.length)];
  }
  const confirmationCode = token;
  if (username === "" || email === "" || password === "") {
    res.render("home", { message: "Indicate username, email and password!" });
    return;
  }

  User.findOne({ username }, "username", (err, user) => {
    if (user !== null) {
      res.render("home", { message: "The username already exists" });
      return;
    }

    const salt = bcrypt.genSaltSync(bcryptSalt);
    const hashPass = bcrypt.hashSync(password, salt);

    const newUser = new User({
      username,
      email,
      password: hashPass,
      confirmationCode,
    });

    newUser.save()
//     .then(() => {
//       res.redirect("/zen-board");
//     })
//     .catch(err => {
//       res.render("home", { message: "Something went wrong" });
//     })
//   });
// });
.then(response => {
  let transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS
    }
  });

  const message = `http://localhost:3000/auth/confirm/${confirmationCode}`
  transporter.sendMail({
    from: '"My Awesome Project 👻" <myawesome@project.com>',
    to: email,
    subject: "Account confirmation",
    text: message,
    html: templates.templateExample(message, username)
  });
  res.redirect("/");
})
.catch(err => {
  res.render("auth/signup", { message: "Something went wrong" });
});
});
});

router.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/home");
});

module.exports = router;

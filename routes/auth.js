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
  res.render("login", { "message": req.flash("error") });
});

router.post("/login", passport.authenticate("local", {
  successRedirect: "main/zen-board",
  failureRedirect: "/login",
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
 let confirmationCode = token;

  if (username === "" || email === "" || password === "") {
    res.render("home", { message: "Indicate username, email and password!" });
    return;
  }

  User.findOne({ username }, "username", (err, user) => {
    if (user !== null) {
      res.render("home", { message: "The username already exists" });
      res.redirect("/");
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

    newUser
    .save()
    .then(response => {

      let transporter = nodemailer.createTransport({
        service: "Gmail",
        auth: {
          user: process.env.GMAIL_USER,
          pass: process.env.GMAIL_PASS
        }
      });

      console.log(process.env.GMAIL_USER);
      console.log(process.env.GMAIL_PASS);

      const message = `http://localhost:3000/auth/confirm/${confirmationCode}`

      transporter.sendMail({
          "from": "My website",
          "to": email,
          "subject": "Please activate your account",
          "text": message,
          "html": `Please go to the link http://localhost:3000/auth/confirm/${confirmationCode}`
        })
          
          res.redirect("/validate-your-account");
        }).catch(err => console.log(err));
      })
});


router.get("/validate-your-account", (req,res,next) => {
  res.render("validate-your-account")
})

router.get("/confirm/:confirmationCode", (req,res,next) => {
  let confirmationCode = req.params.confirmationCode
  User.findOneAndUpdate ({confirmationCode}, { status: "active" })
    .then(user => { 
    req.login(user, () => {
      res.redirect("/zen-board")
    })
  })
})

router.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/home");
});

module.exports = router;
const express = require("express");
const router = express.Router();
const Zen = require("../models/Zen");
const nodemailer = require("nodemailer");

const multer = require("multer");
const upload = multer({ dest: "./public/uploads" });

const {checkConnected} = require("../middlewares");
const User = require("../models/User");

const template = require("../public/javascripts/template");

const uploadCloud = require('../bin/cloudinary.js');

router.get("/zen-board", checkConnected, (req, res, next) => {
  let userEmail = req.user.email;
  Zen.find({emailTo: userEmail}).then(zens => {
      res.render("zen-board", { zens });
  });
});

router.get("/zen-history", checkConnected, (req, res, next) => {
  Zen.find({_creator: req.user._id}).populate("_creator").then(zens => {
    res.render("zen-history", { zens });
  });
});

router.get("/delete-zen/:zenId", checkConnected, (req, res, next) => {
  let zenId = req.params.zenId;
  Zen.findOneAndDelete({ _id: zenId }).then(response => {
    res.redirect("/main/zen-history");
  });
});

// localhost:3000/main/profile
router.get("/profile", checkConnected, (req,res,next) => {
    if (req.user){
      res.render("profile", {user: req.user})
    }
    else {
      res.redirect("/login")
    }
  })

  router.get("/edit-profile", checkConnected, (req, res, next) => {
    res.render("edit-profile");
  });
  
  router.post("/edit-profile", checkConnected, (req, res, next) => {
    console.log("CHECK", req.body)
    User.findByIdAndUpdate(req.user._id)
    .then(user => {
      res.redirect("/main/profile");
    })
  });


router.get('/delete-zen/:zenId', checkConnected, (req, res, next) => {
    let zenId = req.params.zenId
    Zen.findOneAndDelete({_id: zenId}).then(response => {
         res.redirect("/main/zen-history");
    }); 
});

router.get("/create-zen", checkConnected, (req, res, next) => {
  res.render("create-zen");
});

router.post("/send-zen",  uploadCloud.single('image') ,checkConnected, (req, res, next) => {

  let title = req.body.title;
  let description = req.body.description;
  let additional_info = req.body.additional_info;
  let defaultImageUrl = "https://res.cloudinary.com/hanqgr02n/image/upload/v1562866169/zen-images/logo-with-background_lnh1gk.png"
  let image = defaultImageUrl;

  if (req.file) {
    image = req.file.secure_url;  
  } 

  let links = req.body.links;
  let destination_email = req.body.destination;
  let creator = req.user._id;
  let username = req.user.username

  Zen.create({
    title: title,
    description: description,
    additional_info: additional_info,
    image: image,
    links: links,
    emailTo: destination_email
  })
    .then(response => {
      let transporter = nodemailer.createTransport({
        service: "Gmail",
        auth: {
          user: process.env.GMAIL_USER,
          pass: process.env.GMAIL_PASS
        }
      });

      if (image === defaultImageUrl) {
        image = " "
      }

      transporter.sendMail({
        from: "My website",
        to: destination_email,
        subject: `A Zen from ${username}`,
        html: template.template(username, title, description, additional_info, image, links)
      });
      res.redirect("/main/zen-history");
    })
    .catch(err => console.log(err));
});

router.get("/resend-zen/:zenId", checkConnected, (req, res, next) => {
  let zenId = req.params.zenId;
  Zen.findById(zenId).then(zen => {
    res.render("edit-zen", zen)
  })
});

module.exports = router;

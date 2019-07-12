const express = require("express");
const router = express.Router();
const Zen = require("../models/Zen");
const User = require("../models/User");
const nodemailer = require("nodemailer");
const multer = require("multer");
const upload = multer({ dest: "./public/uploads" });

const {checkConnected} = require("../middlewares");


const template = require("../public/javascripts/zen-template");

const uploadCloud = require('../bin/cloudinary.js');

router.get("/zen-board", checkConnected, (req, res, next) => {
  let userEmail = req.user.email;
  Zen.find({emailTo: userEmail, _creator: req.user._id})
  .populate("_creator")
  .then(zens => {
      res.render("zen-board", { zens });
  })
  .catch(next)
});

router.get("/zen-history", checkConnected, (req, res, next) => {
  console.log(req.user._id)
  Zen.find({_creator: req.user._id}).
  populate("_creator").then(zens => {
      if (!zens){
          return res.status(404).render('not-found');
      }
    res.render("zen-history", { zens });
  })
  .catch(next)
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
  let additional = req.body.additional;
  let defaultImageUrl = "https://res.cloudinary.com/hanqgr02n/image/upload/v1562866169/zen-images/logo-with-background_lnh1gk.png"
  let image = defaultImageUrl;
  let logo = "https://res.cloudinary.com/hanqgr02n/image/upload/v1562866169/zen-images/logo_modsf6.png";
  let allLinks = " ";

//   if (description.length >= 500 || additional.length >= 500) {
//     req.flash("error", "Max. 500 characters!")
//     res.redirect("/create-zen");
//     return;
//   }

  if (req.file) {
    image = req.file.secure_url;  
  } 

  let links = req.body.links;
  let destination_email = req.body.destination;
  let creator = req.user._id;
  let username = req.user.username

  Zen.create({
    _creator: creator,
    title: title,
    description: description,
    additional: additional,
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

      console.log("DEBUG:   ", links, links.length);

      links = links.filter((elemnt) => {return elemnt !== ''});

      if (links.length > 0) {
        allLinks = `<p style="font-family:Roboto, Helvetica, sans-serif;font-size:16px;font-weight:300;line-height:24px;text-align:left;color:#616161;"> Here are some helpful links:</p>
        <p style="color:#BDBDBD; line-height: 9px"> <a href="${links}" style="color: #3498DB;">${links}
          </a>`;
      }

      transporter.sendMail({
        from: "My website",
        to: destination_email,
        subject: `A Zen from ${username}`,
        html: template.zenEmailTemplate(username, title, description, additional, logo, image, allLinks)
      });
      res.redirect("/main/zen-history");
    })
    .catch(err => console.log(err));
});

router.get("/resend-zen/:zenId", checkConnected, (req, res, next) => {
  let zenId = req.params.zenId;
  Zen.findById(zenId).then(zen => {
    console.log(zen)
    res.render("edit-zen", zen)
  })
});

module.exports = router;

const express = require("express");
const router = express.Router();
const Zen = require("../models/Zen");
const nodemailer = require("nodemailer");

const multer = require("multer");
const upload = multer({ dest: "./public/uploads" });

const {checkConnected} = require("../middlewares");
const User = require("../models/User");

router.get("/zen-board", checkConnected, (req, res, next) => {
  let userEmail = req.user.email;
  Zen.find({emailTo: userEmail}).then(zens => {
      res.render("zen-board", { zens });
  });
});

router.get("/zen-history", checkConnected, (req, res, next) => {
  Zen.find({}).populate("_creator").then(zens => {
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

router.get('/zen-board', checkConnected, (req, res, next) => {
    Zen.find({}).then(zens =>
        
        {res.render('zen-board', {zens})
    });
});

router.get('/zen-history', checkConnected, (req, res, next) => {
    Zen.find({}).then(zens =>
        {res.render('zen-history', {zens})
    });
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

router.post("/send-zen", upload.single("image"), checkConnected, (req, res, next) => {
  let title = req.body.title;
  let description = req.body.description;
  let additional_info = req.body.additional_info;
  let image = req.file.filename;
  let links = req.body.links;
  let destination_email = req.body.destination;
  let creator = req.user._id;

  Zen.create({
    _creator: creator,
    title: title,
    description: description,
    additional_info: additional_info,
    image: `/uploads/${image}`,
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

      transporter.sendMail({
        from: "My website",
        to: destination_email,
        subject: "A Zen from a Friend",
        text: "Wtv"
        //,"html": ``
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

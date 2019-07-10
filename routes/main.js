const express = require("express");
const router = express.Router();
const Zen = require("../models/Zen");
const nodemailer = require("nodemailer");

const multer = require("multer");
const upload = multer({ dest: "./public/uploads" });

const {checkConnected} = require("../middlewares");
const User = require("../models/User");

router.get("/zen-board", checkConnected, (req, res, next) => {
  let userId = req.user._id;
  Zen.find({_creator: userId}).then(zens => {
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
    console.log(req)
  let title = req.body.title;
  let description = req.body.description;
  let additional_info = req.body.additional_info;
  let image = ""
    if (req.file === undefined) {
    image = "../images/default_img.png"
  console.log("image",image)    
  } else {
    image = req.file.filename;
  }
  let links = req.body.links;
  let destination_email = req.body.destination;
  let creator = req.user._id;

  Zen.create({
    _creator: creator.username,
    title: title,
    description: description,
    additional_info: additional_info,
    image: `/uploads/${image}`,
    links: links
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
        subject: `A Zen from ${{creator}}`,
        text: `wtv ${creator} ${creator} ${creator} ${creator}`,
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

router.post("/resend-zen/:zenId", upload.single("image"), checkConnected, (req, res, next) => {
  let title = req.body.title;
  let description = req.body.description;
  let additional_info = req.body.additional_info;
  if (req.file === undefined) {
      console.log("IF FILE UNDEFINED",req.file)
  let image = "../images/default_img.png"
  } else {
      console.log("IF FILE !== UNDEFINED",req.file)
    let image = req.file.filename;
  }
  let links = req.body.links;
  let destination_email = req.body.destination;
  let zenId = req.params.zenId;
  

  Zen.findByIdAndUpdate({_id: zenId}, {
    title: title,
    description: description,
    additional_info: additional_info,
    image: `/uploads/${image}`,
    links: links
  }).then(response => {
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


module.exports = router;

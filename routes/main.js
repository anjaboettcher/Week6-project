const express = require("express");
const router = express.Router();
const Zen = require("../models/Zen");
const nodemailer = require("nodemailer");

const multer = require("multer");
const upload = multer({ dest: "./public/uploads" });

const {checkConnected} = require("../middlewares");

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

router.get("/edit-zen/:zenId", checkConnected, (req, res, next) => {
  let zenId = req.params.zenId;
  Zen.findOne({ _id: zenId }).then(zen => {
    res.render("edit-zen", zen);
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
        subject: "A Zen from a Friend",
        text: "Wtv"
        //,"html": ``
      });
      res.redirect("/main/zen-history");
    })
    .catch(err => console.log(err));
});

router.post("/resend-zen", upload.single("image"), checkConnected, (req, res, next) => {
  let title = req.body.title;
  let description = req.body.description;
  let additional_info = req.body.additional_info;
  let image = req.file.filename;
  let links = req.body.links;
  let destination_email = req.body.destination;
  let zenId = req.params.zenId;

  Zen.findByIdAndUpdate(zenId, {
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
        subject: "A Zen from a Friend",
        text: "Wtv"
        //,"html": ``
      });
      res.redirect("/main/zen-history");
    })
    .catch(err => console.log(err));
});

module.exports = router;

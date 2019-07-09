const express = require("express");
const router = express.Router();
const Zen = require("../models/Zen");
const nodemailer = require("nodemailer");

const multer = require("multer");
const upload = multer({ dest: "./public/uploads" });

router.get("/zen-board", (req, res, next) => {
  Zen.find({}).then(zens => {
    res.render("zen-board", { zens });
  });
});

router.get("/zen-history", (req, res, next) => {
  Zen.find({}).then(zens => {
    res.render("zen-history", { zens });
  });
});

router.get("/delete-zen/:zenId", (req, res, next) => {
  let zenId = req.params.zenId;
  Zen.findOneAndDelete({ _id: zenId }).then(response => {
    res.redirect("/main/zen-history");
  });
});

router.get("/edit-zen/:zenId", (req, res, next) => {
  let zenId = req.params.zenId;
  Zen.findOne({ _id: zenId }).then(zen => {
    res.render("edit-zen", zen);
  });
});

router.get("/create-zen", (req, res, next) => {
  res.render("create-zen");
});

router.post("/send-zen", upload.single("image"), (req, res, next) => {
  let title = req.body.title;
  let description = req.body.description;
  let additional_info = req.body.additional_info;
  let image = req.file.filename;
  let links = req.body.links;
  let destination_email = req.body.destination;

  Zen.create({
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

router.post("/resend-zen", upload.single("image"), (req, res, next) => {
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

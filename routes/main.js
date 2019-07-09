const express = require('express');
const router = express.Router();
const Zen = require('../models/Zen'); 
const User = require("../models/User");
const { checkConnected } = require('../middlewares.js'); 

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


module.exports = router;
const express = require('express');
const router = express.Router();
const Zen = require('../models/Zen'); 

router.get('/zen-board', (req, res, next) => {
    Zen.find({}).then(zens =>
        
        {res.render('zen-board', {zens})
    });
});

router.get('/zen-history', (req, res, next) => {
    Zen.find({}).then(zens =>
        
        {res.render('zen-history', {zens})
    });
});

router.get('/delete-zen/:zenId', (req, res, next) => {
    let zenId = req.params.zenId
    Zen.findOneAndDelete({_id: zenId}).then(response => {
         res.redirect("/main/zen-history");
    }); 
});


module.exports = router;
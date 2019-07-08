const express = require('express');
const router = express.Router();
const Zen = require('../models/Zen');

router.get('/zen-board', (req, res, next) => {
    Zen.find({}).then(zens =>
        
        {console.log("!!!!!"+zens); res.render('zen-board', {zens})
    });
});

module.exports = router;
const express = require('express');
const router = express.Router();

router.get('/zen-board', (req, res, next) => {
    res.render('zen-board');
});

module.exports = router;
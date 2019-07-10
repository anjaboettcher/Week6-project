const express = require('express');
const router  = express.Router();

router.get('/', (req, res, next) => {
  res.render('home', {
    message: req.flash("error")
  });
});

module.exports = router;


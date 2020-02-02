const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // lets play with the date header...
  const date=new Date(1974,4,25);
  res.set('Date', date);
  // res.set('Cache-Control','no-store');
  // res.set('content-type','text/html');
  // things we want to do befor  or after the cache
  // console.log(req.fresh);
  // console.log(req.stale);
  res.render('index', { title: 'Express' });
});

module.exports = router;

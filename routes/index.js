var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/lalit', (req, res, next) => {
     console.log(req.body, "req === ", req);
     res.end(req.body);
});

module.exports = router;

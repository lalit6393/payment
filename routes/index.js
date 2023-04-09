var express = require('express');
const bodyParser = require('body-parser');

var router = express.Router();
router.use(bodyParser.json());

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/lalit', (req, res, next) => {
  const payment = req.body.payload.payment.entity;
  console.log(payment);
  console.log(req.body, "req === ", req);
  res.send(req.body);
});

module.exports = router;

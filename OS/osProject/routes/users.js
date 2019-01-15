var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/', function(req, res, next) {
  res.send('POST 요청');
});

router.put('/', function(req, res, next) {
  res.send('PUT 요청');
});

router.delete('/', function(req, res, next) {
  res.send('DELETE 요청');
});



module.exports = router;

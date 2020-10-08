var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/mercadoliebre', function(req, res, next) {
  res.render("vistaMercadoLiebre");
});

router.get('/registro', function(req, res, next) {
  res.render("registro");
});

router.get('/login', function(req, res, next) {
  res.render("login");
});

module.exports = router;

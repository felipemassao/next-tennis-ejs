var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let carrouselItens = ["https://static.netshoes.com.br/produtos/tenis-olympikus-quasar-masculino/88/D22-3580-788/D22-3580-788_zoom1.jpg?ts=1601414754&",
  "https://static.netshoes.com.br/produtos/tenis-olympikus-quasar-masculino/36/D22-3580-036/D22-3580-036_zoom1.jpg?ts=1582244471&",
  "https://a-static.mlcdn.com.br/618x463/tenis-feminino-bordado-fe-branco-salto-plataforma-anabela-casual-dia-a-dia-gugi-calcados/gugicalcados/pfe-branco-34-ale2/18fecf4b1a14b7f51be07493f441b6a0.jpg"]
  res.render('index', {carrouselItens});
});

module.exports = router;

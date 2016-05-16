var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

function Pirates() {return knex('all_pirates');}

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log('routes working');
  Pirates().select().then(function(pirates){
    console.log(pirates);
    res.json(pirates);
  });
});

module.exports = router;

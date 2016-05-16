var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

function Pirates() {return knex('all_pirates');}

/* GET home page. */
router.get('/', function(req, res, next) {
  Pirates().select().then(function(pirates){
    res.json(pirates);
  });
});

router.post('/', function(req, res, next) {
  Pirates().insert(req.body).then(function(){
    res.send(200);
  });
});

router.put('/:id', function(req, res, next) {
  Pirates().where({id:req.params.id}).update(req.body).then(function(){
    res.send(200);
  });
});

router.delete('/:id', function(req, res, next) {
  Pirates().del().where({id:req.params.id}).then(function(){
    res.send(200);
  });
});

module.exports = router;

var express = require('express');
var router = express.Router();
var Beer = require('../models/beer.js');

// get all beers
router.get('/beers', function(req, res, next) {
  Beer.find(function(err, data){
    if(err){
      res.json({'message': err});
    } else {
      res.json(data);
    }
  });
});


// get a beer
router.get('/beer/:id', function(req, res, next) {
  Beer.findById(req.params.id, function(err, data){
    if(err){
      res.json({'message': err});
    } else {
      res.json(data);
    }
  });
});

// post a beer
router.post('/beers', function(req, res, next) {
  newBeer = new Beer({
    name: req.body.name,
    type: req.body.type,
    abv: parseFloat(req.body.abv)
  });
  newBeer.save(function(err, data){
    if(err){
      res.json({'message': err});
    } else {
      res.json(data);
    }
  });
});

// put a beer
router.put('/beer/:id', function(req, res, next) {
  var update = {
    name: req.body.name,
    type: req.body.type,
    abv: parseFloat(req.body.abv)
  };
  Beer.findByIdAndUpdate(req.params.id, update, function(err, data){
    if(err){
      res.json({'message': err});
    } else {
      res.json(data);
    }
  });
});

// delete a beer
router.delete('/beer/:id', function(req, res, next) {
  Beer.findByIdAndRemove(req.params.id, function(err, data){
    if(err){
      res.json({'message': err});
    } else {
      res.json(data);
    }
  });
});

module.exports = router;

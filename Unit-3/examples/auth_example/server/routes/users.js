var express = require("express");
var app = express();
var router = express.Router();
var db = require("../models");
var path = require("path");
var jwt = require('jsonwebtoken');
var secret = "awesomesauce";
var token;

// only allow AJAX calls to prevent tampering in the browser bar
function checkHeaders(req,res,next){
  if(!req.headers["x-requested-with"]) {
    res.sendFile(path.join(__dirname, '../../client', 'index.html'));
  }
  else {
    next();
  }
}

// middleware to check the token against params to authorize a user
function checkToken(req,res,next){
  try {
    var decoded = jwt.verify(req.headers.authorization.split(" ")[1], secret);
    if(req.params.id && decoded.id === req.params.id){
      req.decoded_id = decoded.id;
      next();
    }
    else {
      res.status(401).send("Not Authorized");
    }
  } catch(err) {
    res.status(500).send(err.message);
  }
}

// middleware to check the token in general
function checkTokenForAll(req,res,next){
  try {
    var decoded = jwt.verify(req.headers.authorization.split(" ")[1], secret);
      next();
    }
   catch(err) {
    res.status(500).send(err.message);
  }
}

router.use(checkHeaders);

router.post('/signup',function(req,res){
  db.User.create(req.body, function(err,user){
    if(err)
      return res.status(400).send("Username/Password can't be blank and Username must be unique");
    var listedItems = {id: user._id, username: user.username};
    token = jwt.sign({ id: user._id}, secret);
    res.json({token:token, user:listedItems});
  });
});

router.post('/login',function(req,res){
  db.User.authenticate(req.body, function(err,user){
    if(err) return res.status(400).send(err);
    if (!user) return res.status(400).send(err);
    var listedItems = {id: user._id, username: user.username};
    token = jwt.sign({ id: user._id}, secret);
    res.json({token:token, user:listedItems});
  });
});

// this is for demonstration purposes....this is not a route you would have unless you SERIOUSLY secured it
router.get('/users', checkTokenForAll, function(req,res){
  // only send back usernames and id's
  db.User.find({}, 'username _id', function(err,users){
    if (err) res.status(500).send(err);
    res.status(200).send(users);
  });
});

router.get('/users/:id', checkToken, function(req,res){
  db.User.findById(req.decoded_id, function(err,user){
    if (err) res.status(500).send(err);
    if (!user) res.status(401).send(err);
    var listedItems = {id: user._id, username: user.username};
    res.status(200).send(listedItems);
  });
});

router.put('/users/:id', checkToken, function(req,res){
 db.User.findByIdAndUpdate(req.decoded_id, req.body, {new: true}, function(err,user){
   if (err) res.status(400).send(err);
   else {
    var listedItems = {id: user._id, username: user.username};
    res.status(200).send(listedItems);
   }
 });
});

router.delete('/users/:id', checkToken, function(req,res){
  db.User.findByIdAndRemove(req.decoded_id, function(err,user){
    if (err) res.status(500).send(err);
    if (!user) res.status(401).send(err);
    res.status(200).send("Removed");
  });
});

module.exports = router;

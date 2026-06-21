const express = require('express');
const router = express.Router();
const tripsController = require('../controllers/trips');
const authController = require('../controllers/authentication');
const jwt = require('jsonwebtoken'); // Enable JSON Web Tokens

// Method to authenticate our JWT
function authenticateJWT(req, res, next) {
    // console.log('In Middleware');
  
    const authHeader = req.headers['authorization'];
    // console.log('Auth Header: ' + authHeader);
  
    if (authHeader == null) {
      console.log('Auth Header Required but NOT PRESENT!');
      return res.sendStatus(401);
    }
  
    let headers = authHeader.split(' ');
    if (headers.length < 1) {
      console.log('Not enough tokens in Auth Header: ' + headers.length);
      return res.sendStatus(501);
    }
  
    const token = authHeader.split(' ')[1];
    // console.log('Token: ' + token);
  
    if (token == null) {
      console.log('Null Bearer Token');
      return res.sendStatus(401);
    }
  
    const verified = jwt.verify(token, process.env.JWT_SECRET, (err, verified) => {
      if (err) {
        return res.sendStatus(401).json('Token Validation Error!');
      }
      req.auth = verified; // Set the auth param to the decoded object
    });
    next(); // This needs to continue or this will hang forever
  }

// POST register a new user
router.post('/register', authController.register);

// POST login a user
router.post('/login', authController.login);

// GET all trips
router.get('/trips', tripsController.tripsList);

// GET single trip by trip code
router.get('/trips/:tripCode', tripsController.tripsFindCode);

// POST new trip
router.post('/trips', authenticateJWT, tripsController.tripsAddTrip);

// PUT update trip
router.put('/trips/:tripCode', authenticateJWT, tripsController.tripsUpdateTrip);

// DELETE trip
router.delete('/trips/:tripCode', authenticateJWT, tripsController.tripsDeleteTrip);

module.exports = router;
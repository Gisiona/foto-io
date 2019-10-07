const express = require('express');
const sessioncontroller= require('./controllers/SessionController');
const spotController= require('./controllers/SpotController');

const routes = express.Router();

routes.post('/sessions', sessioncontroller.store);
routes.post('/spots', spotController.store);


// https://youtu.be/7gu8S-plpb

module.exports = routes;
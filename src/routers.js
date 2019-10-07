const express = require('express');
const sessioncontroller= require('./controllers/SessionController');
const spotController= require('./controllers/SpotController');
const bookingControler = require('./controllers/BookingController')

const multer = require('multer');
const uploadConfig = require('./config/upload');

const routes = express.Router();
const upload = multer(uploadConfig);


routes.post('/sessions', sessioncontroller.store);
routes.get('/sessions', sessioncontroller.show);
routes.post('/spots', upload.single("thumbnail") ,spotController.store);
routes.post('/spots/:spot_id/bookings', bookingControler.store);


// https://youtu.be/7gu8S-plpb

module.exports = routes;
const express = require('express');
const router = express.Router();
const ctrlMain = require('../controllers/main');
const ctrlTravlr = require('../controllers/travlr');

/* GET homepage. */
router.get('/', ctrlMain.index);

/* GET travel page. */
router.get('/travel', ctrlTravlr.travel);

/* GET news page. */
router.get('/news', ctrlTravlr.news);

/* GET reservations page. */
router.get('/reservations', ctrlTravlr.reservations);

/* GET login page. */
router.get('/login', ctrlTravlr.login);

/* GET admin page. */
router.get('/admin', ctrlTravlr.admin);

/* GET rooms page. */
router.get('/rooms', ctrlTravlr.rooms);

/* GET meals page. */
router.get('/meals', ctrlTravlr.meals);

/* GET about page. */
router.get('/about', ctrlTravlr.about);

/* GET contact page. */
router.get('/contact', ctrlTravlr.contact);

module.exports = router;
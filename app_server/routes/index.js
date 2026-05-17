const express = require('express');
const router = express.Router();
const ctrlMain = require('../controllers/main');
const ctrlTravlr = require('../controllers/travlr');

/* GET homepage. */
router.get('/', ctrlMain.index);

/* GET travel page. */
router.get('/travel', ctrlTravlr.travel);

module.exports = router;
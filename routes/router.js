const express = require('express');
const router = express.Router();
const ph = require('../controller/abucalControl');

router.get('/', ph.index);
/* router.get('/home', hp.ho)
router.get('/menu', hp.me)
router.get('/contact', hp.con)
router.get('/history', hp.his) */

module.exports = router;
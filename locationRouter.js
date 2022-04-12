const express = require('express');

const { apiGetLocations, apiAddLocation, apiUpdateLocation, apiDeleteLocation } = require('./locationController');

const router = express.Router();

router.get('/location', apiGetLocations);
router.post('/location', apiAddLocation);
router.patch('/location', apiUpdateLocation);
router.delete('/location', apiDeleteLocation);

module.exports = router;

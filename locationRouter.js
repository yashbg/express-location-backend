const express = require('express');

const { apiGetLocations, apiAddLocation, apiUpdateLocation, apiDeleteLocation } = require('./locationController');

const router = express.Router();

router.get('/', apiGetLocations);
router.post('/', apiAddLocation);
router.patch('/', apiUpdateLocation);
router.delete('/', apiDeleteLocation);

module.exports = router;

const express = require('express');

const { getLocations, addLocation, updateLocation, deleteLocation } = require('../services/locationService');

const router = express.Router();

router.get('/', (req, res) => {
    getLocations()
        .then(result => {
            return res.status(result.status).json({ locations: result.locations });
        })
        .catch(error => {
            return res.status(error.status).json({ message: error.message });
        });
});

router.post('/', (req, res) => {
    const { name, latitude, longitude } = req.body;
    addLocation(name, latitude, longitude)
        .then(result => {
            return res.status(result.status).json({ message: result.message });
        })
        .catch(error => {
            return res.status(error.status).json({ message: error.message });
        });
});

router.patch('/', (req, res) => {
    const { name, newLatitude, newLongitude } = req.body;
    updateLocation(name, newLatitude, newLongitude)
        .then(result => {
            return res.status(result.status).json({ message: result.message });
        })
        .catch(error => {
            return res.status(error.status).json({ message: error.message });
        });
});

router.delete('/', (req, res) => {
    const { name } = req.body;
    deleteLocation(name)
        .then(result => {
            return res.status(result.status).json({ message: result.message });
        })
        .catch(error => {
            return res.status(error.status).json({ message: error.message });
        });
});

module.exports = router;

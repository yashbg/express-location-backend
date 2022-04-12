const { getLocations, addLocation, updateLocation, deleteLocation } = require('./locationDAO');

async function apiGetLocations(req, res) {
    getLocations()
        .then(result => {
            return res.status(result.status).json({ locations: result.locations });
        })
        .catch(error => {
            return res.status(error.status).json({ message: error.message });
        });
}

async function apiAddLocation(req, res) {
    const { name, latitude, longitude } = req.params;
    addLocation(name, latitude, longitude)
        .then(result => {
            return res.status(result.status).json({ message: result.message });
        })
        .catch(error => {
            return res.status(error.status).json({ message: error.message });
        });
}

async function apiUpdateLocation(req, res) {
    const { name, newLatitude, newLongitude } = req.params;
    updateLocation(name, newLatitude, newLongitude)
        .then(result => {
            return res.status(result.status).json({ message: result.message });
        })
        .catch(error => {
            return res.status(error.status).json({ message: error.message });
        });
}

async function apiDeleteLocation(req, res) {
    const { name } = req.params;
    deleteLocation(name)
        .then(result => {
            return res.status(result.status).json({ message: result.message });
        })
        .catch(error => {
            return res.status(error.status).json({ message: error.message });
        });
}

module.exports = {
    apiGetLocations,
    apiAddLocation,
    apiUpdateLocation,
    apiDeleteLocation
};

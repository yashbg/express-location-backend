const { Location } = require('../models/location');

const SERVER_ERROR_MSG = 'Internal Server Error';

exports.getLocations = async () => {
    return new Promise((resolve, reject) => {
        Location.find({}, (err, locations) => {
            if (err) {
                reject({
                    status: 500,
                    message: SERVER_ERROR_MSG
                });
            }
            else {
                resolve({
                    status: 200,
                    locations: locations
                });
            }
        });
    });
};

exports.addLocation = async (name, latitude, longitude) => {
    return new Promise((resolve, reject) => {
        Location.findOne({ name: name }, (err, location) => {
            if (err) {
                reject({
                    status: 500,
                    message: SERVER_ERROR_MSG
                });
            }
            else if (location) {
                reject({
                    status: 400,
                    message: 'A location with same name already exists'
                });
            }
            else {
                const newLocation = new Location({
                    name: name,
                    latitude: latitude,
                    longitude: longitude
                });
                newLocation.save();
                resolve({
                    status: 200,
                    message: 'New location added'
                });
            }
        });
    });
};

exports.updateLocation = async (name, newLatitude, newLongitude) => {
    return new Promise((resolve, reject) => {
        Location.updateOne(
            {
                name: name
            },
            {
                latitude: newLatitude,
                longitude: newLongitude
            },
            (err, result) => {
                if (err) {
                    reject({
                        status: 500,
                        message: SERVER_ERROR_MSG
                    });
                }
                else if (!result.matchedCount) {
                    reject({
                        status: 400,
                        message: 'Location does not exist'
                    });
                }
                else {
                    resolve({
                        status: 200,
                        message: 'Location updated'
                    });
                }
            }
        );
    });
};

exports.deleteLocation = async name => {
    return new Promise((resolve, reject) => {
        Location.deleteOne({ name: name }, (err, result) => {
            if (err) {
                reject({
                    status: 500,
                    message: SERVER_ERROR_MSG
                });
            }
            else if (!result.deletedCount) {
                reject({
                    status: 400,
                    message: 'Location does not exist'
                });
            }
            else {
                resolve({
                    status: 200,
                    message: 'Location deleted'
                });
            }
        });
    });
};

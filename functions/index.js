const functions = require("firebase-functions");
const {geocodeRequest} = require("./geocode");
const {placesRequest} = require("./places");

const {Client} = require("@googlemaps/google-maps-services-js");
const {Client} = require("@googlemaps/google-maps-services-js");
const client = new Client({});

exports.geocode = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", {structuredData: true});
  geocodeRequest(request, response, client);
});

exports.placesNearby = functions.https.onRequest((request, response) => {
  placesRequest(request, response, client);
});


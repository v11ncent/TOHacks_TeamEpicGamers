const {Storage} = require('@google-cloud/storage');
require('dotenv').config();

// Credentials & variables to easily access our Cloud Bucket.
const storage = new Storage();
const bucket = storage.bucket(process.env.BUCKET_NAME);

// Get a JSON of Bike Stations, and parse it appropriately.
// Unlike our Bike Routes/Rides, this will be saved to memory, due to its small size.
function getBikeStations() {
  const bikeStation = bucket.file('bikeStation')
  contents = bikeStation.download(function(err, contents) {});
  console.log(contents);
}
const readline = require('readline');
const {Storage} = require('@google-cloud/storage');
const dotenv = require('dotenv').config();
const fs = require('fs');

// Credentials & variables to easily access our Cloud Bucket.
const storage = new Storage();
const bucket = storage.bucket(process.env.BUCKET_NAME);

// Download a JSON of Bike Stations.
// This will be saved to a file called bikeStations.json, inside our data folder.
function downloadBikeStations() {
  const bikeStation = bucket.file('bikeStation');
  bikeStation.download({
    destination: './data/bikeStations.json'
  }, function(err) {});
}

function JSONtoDatabase() {
  const readInterface = readline.createInterface({
    input: fs.createReadStream('./data/bikeStations.json'),
    output: process.stdout,
    console: false
  });

  readInterface.on('line', function(line) {
    const parsedJSON = JSON.parse(line);

    // Treat "readInterface.on" as a for loop. It's going to iterate through every line in the JSON file.
    // Each line is turned into a JSON table, as the "parsedJSON" constant. Use the data here to add to MongoDB.
  });
}

function main() {
  readJSON();
}

main()
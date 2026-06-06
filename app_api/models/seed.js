const mongoose = require('mongoose');
const Trip = require('./travlr');
const fs = require('fs');

// Read the trips data from the JSON file
const trips = JSON.parse(fs.readFileSync('./data/trips.json', 'utf8'));

// Connect to MongoDB
const host = process.env.DB_HOST || '127.0.0.1';
const dbURI = `mongodb://${host}/travlr`;

mongoose.connect(dbURI)
  .then(() => {
    console.log('Mongoose connected to ' + dbURI);
    // Delete all existing records
    return Trip.deleteMany({});
  })
  .then(() => {
    console.log('Existing trips deleted');
    // Insert new records
    return Trip.insertMany(trips);
  })
  .then(() => {
    console.log('Trips seeded successfully!');
    console.log(`${trips.length} trips added to database`);
    mongoose.connection.close();
  })
  .catch(err => {
    console.log('Error seeding database: ', err);
    mongoose.connection.close();
  });
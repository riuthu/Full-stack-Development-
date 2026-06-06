const mongoose = require('mongoose');
const Trip = mongoose.model('trips');

// GET: /api/trips - it returns all trips
const tripsList = async (req, res) => {
  try {
    const trips = await Trip.find({});
    if (!trips) {
      return res.status(404).json({ message: 'No trips found' });
    }
    return res.status(200).json(trips);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

// GET: /api/trips/:tripCode - this returns a single trip
const tripsFindCode = async (req, res) => {
  try {
    const trip = await Trip.find({ code: req.params.tripCode });
    if (!trip) {
      return res.status(404).json({ message: 'Trip not found' });
    }
    return res.status(200).json(trip);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

module.exports = {
  tripsList,
  tripsFindCode
};
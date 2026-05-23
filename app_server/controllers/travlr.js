var fs = require('fs');

/* GET travel page */
const travel = (req, res) => {
  var trips = JSON.parse(fs.readFileSync('./data/trips.json', 'utf8'));
  res.render('travel', { title: 'Travlr', trips: trips });
};

/* GET news page */
const news = (req, res) => {
  res.render('news', { title: 'News' });
};

/* GET reservations page */
const reservations = (req, res) => {
  res.render('reservations', { title: 'Reservations' });
};

/* GET login page */
const login = (req, res) => {
  res.render('login', { title: 'Login' });
};

/* GET admin page */
const admin = (req, res) => {
  res.render('admin', { title: 'Admin' });
};

/* GET rooms page */
const rooms = (req, res) => {
  res.render('rooms', { title: 'Rooms' });
};

/* GET meals page */
const meals = (req, res) => {
  res.render('meals', { title: 'Meals' });
};

/* GET about page */
const about = (req, res) => {
  res.render('about', { title: 'About' });
};

/* GET contact page */
const contact = (req, res) => {
  res.render('contact', { title: 'Contact' });
};

module.exports = {
  travel,
  news,
  reservations,
  login,
  admin,
  rooms,
  meals,
  about,
  contact
};
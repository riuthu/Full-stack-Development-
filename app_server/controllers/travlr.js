const tripsEndpoint = 'http://localhost:3000/api/trips';
const options = {
  method: 'GET',
  headers: {
    'Accept': 'application/json'
  }
};

// GET travel page
const travel = async (req, res) => {
  await fetch(tripsEndpoint, options)
    .then(res => res.json())
    .then(json => {
      let trips = [];
      let message = null;
      if (!(json instanceof Array)) {
        message = 'API lookup error';
      } else {
        if (!json.length) {
          message = 'No trips found';
        } else {
          trips = json;
        }
      }
      res.render('travel', { title: 'Travlr Getaways', trips, message });
    })
    .catch(err => res.status(500).send(err.message));
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
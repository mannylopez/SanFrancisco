var map = L.map('map').setView([37.62, -122.37], 10);

var MapBox = L.tileLayer('http://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
  attribution: 'Imagery from <a href="http://mapbox.com/about/maps/">MapBox</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  subdomains: 'abcd',
  id: 'manny.na22d87o',
  accessToken: 'pk.eyJ1IjoibWFubnkiLCJhIjoiMzBCNHFQUSJ9.VQQ9ZSW7viFT1yLhLiWLSA'
}).addTo(map);

var locationOne = omnivore.gpx('assets/data/activity_892802975.gpx').addTo(map);

var locationTwo = omnivore.gpx('assets/data/activity_892802983.gpx').addTo(map);

var locationThree = omnivore.gpx('assets/data/activity_892802985.gpx').addTo(map);

var locationFour = omnivore.gpx('assets/data/activity_892802990.gpx').addTo(map);

var locationFive = omnivore.gpx('assets/data/activity_892802998.gpx').addTo(map);

var locationSix = omnivore.gpx('assets/data/activity_892803004.gpx').addTo(map);

var locationSeven = omnivore.gpx('assets/data/activity_892803016.gpx').addTo(map);

var locationEight = omnivore.gpx('assets/data/activity_892803035.gpx').addTo(map);

var locationNine = omnivore.gpx('assets/data/activity_892803042.gpx').addTo(map);

var locationTen = omnivore.gpx('assets/data/activity_892803049.gpx').addTo(map);

var locationEleven = omnivore.gpx('assets/data/activity_892803065.gpx').addTo(map);

var locationTwelve = omnivore.gpx('assets/data/activity_892803073.gpx').addTo(map);

var locationThirteen = omnivore.gpx('assets/data/activity_892803081.gpx').addTo(map);

var locationFourteen = omnivore.gpx('assets/data/activity_893736148.gpx').addTo(map);

var locationFifteen = omnivore.gpx('assets/data/activity_893736175.gpx').addTo(map);

var locationSixteen = omnivore.gpx('assets/data/activity_893736197.gpx').addTo(map);

var locationSeventeen = omnivore.gpx('assets/data/activity_893736208.gpx').addTo(map);

var locationEighteen = omnivore.gpx('assets/data/activity_893736220.gpx').addTo(map);

var locationNineteen = omnivore.gpx('assets/data/activity_893736236.gpx').addTo(map);

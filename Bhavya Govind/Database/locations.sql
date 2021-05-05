CREATE TABLE locations(
  location_id INTEGER PRIMARY KEY AUTOINCREMENT,
  location_name TEXT,
  map TEXT,
  image TEXT,
  information TEXT,
  city_id INTEGER

);
INSERT INTO locations (location_name, map, image, information, city_id) VALUES ("India Gate", "https://goo.gl/maps/1XZ7aCrPyJoi3S2Q9", "https://thumbs.dreamstime.com/b/india-gate-night-new-delhi-213657757.jpg", "",1);
INSERT INTO locations (location_name, map, image, information, city_id) VALUES ("Lotus Temple", "https://goo.gl/maps/Mp3jcwfJaJCoVDLx9", "https://www.pandotrip.com/wp-content/uploads/2014/09/Lotus-Tmple-Photo-by-Arpan-Das.jpg","", 1);

CREATE TABLE cities(
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  country TEXT,
  map TEXT,
  information TEXT
);
INSERT INTO cities (name, country, map) VALUES ("Delhi", "India", "https://goo.gl/maps/qZa1zQSYKMriHUKv6");
INSERT INTO cities (name,country, map) VALUES ("Bali", "Indonesia", "https://goo.gl/maps/hkFKvZs2NHetnhEA7");

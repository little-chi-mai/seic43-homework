
CREATE TABLE worldometer
(
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  capital_city TEXT,
  population INTEGER,
  land_area INTEGER,
  world_share INTEGER,
  image TEXT
);

--optional (seed data)
INSERT INTO worldometer (name, capital_city, population,land_area) VALUES ('Australia', 'Canberra', 25499884, 7682300);
INSERT INTO worldometer (name, capital_city, population, land_area) VALUES ('India', 'Delhi', 1380004385, 2973190);

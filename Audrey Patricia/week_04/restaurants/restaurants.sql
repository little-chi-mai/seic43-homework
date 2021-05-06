CREATE TABLE restaurants (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  cost TEXT,
  hours TEXT,
  address TEXT,
  menu TEXT,
  popular_dishes TEXT,
  known_for TEXT
);

-- seed data
INSERT INTO restaurants (name, cost, hours, address, popular_dishes, known_for) VALUES ("Menya Noodle Bar", "45", "Mon-Fri : 11:30am – 2:30pm, 5:30pm – 8pm | Sat-Sun : Closed", "Shop 2, 1 Market Street, CBD", "Menya Ramen, Menya Bento Box", "Fast Service, Great Value, Friendly Service, Portion, Quality, Price");

INSERT INTO restaurants (name, cost, hours, address, popular_dishes, known_for) VALUES ("Arisun", "100", "Mon-Thu, Sun : 12noon – 11pm | Fri-Sat : 12noon – 1am", "Shop 35, Number One Dixon Shopping Centre, 1 Dixon Street, Chinatown, Haymarket, Sydney", "Korean Fried Chicken, Bibimbap, Hot Pot, Ramen, Fried Rice, Beer", "Big Portion, Family Place, Family Crowd, Good Place, Great Value, Good Food");

CREATE TABLE cuisines (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  description TEXT,
  famous_dishes TEXT,
  image TEXT
);

-- seed data
INSERT INTO cuisines (name, description, famous_dishes) VALUES ("Japanese", "Japanese food is refined and elegant, its preparation and presentation honed over the centuries so that its flavours are pure and delicate. Like many of the world's highly developed cuisines, Japanese food celebrates and highlights the flavours, textures and colours of seasonal produce. The first produce of the season is prized.", "Sushi, Sashimi, Ramen");

INSERT INTO cuisines (name, description, famous_dishes) VALUES ("Korean", "Korean food is some of the healthiest on earth, with an emphasis on vegetables, meats cooked simply and without much oil, and a near obsession with the fermented vegetable kimchi, which can be something of an acquired taste for non-Koreans.", "Kimchi, Bulgogi, Korean Fried Chicken");

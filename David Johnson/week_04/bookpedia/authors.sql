CREATE TABLE authors (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  first_name TEXT,
  last_name TEXT,
  bio TEXT,
  book_1 TEXT,
  book_2 TEXT,
  book_3 TEXT,
  year_born INTEGER,
  year_died INTEGER,
  featured INTEGER,
  prize_1 TEXT,
  prize_2 TEXT,
  prize_3 TEXT,
  fiction BOOLEAN,
  non_fiction BOOLEAN,
  genre TEXT,
  image TEXT -- URL
);

--seed data
INSERT INTO authors (first_name, last_name, bio, featured, prize_1, fiction, non_fiction, genre, image) VALUES ("Robert", "Caro", "The greatest political biographer of all time.", 1, "Pulitzer Prize", 0, 1, "Political Biography", "https://s.wsj.net/public/resources/images/B3-DQ990_20ODD6_16H_20190409151458.jpg")

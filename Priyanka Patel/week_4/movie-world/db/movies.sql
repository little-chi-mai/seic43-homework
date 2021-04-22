DROP TABLE IF EXISTS movies;
CREATE TABLE movies (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  director TEXT,
  producer TEXT,
  language TEXT,
  country TEXT,
  release_date TEXT,
  starring TEXT,
  image TExt
);

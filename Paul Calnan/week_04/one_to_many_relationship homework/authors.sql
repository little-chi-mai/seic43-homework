CREATE TABLE authors (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  first_name TEXT,
  last_name TEXT
);



CREATE TABLE books (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  author_id INT,
  title TEXT,
  image TEXT --URL for photo of a book cover
);

--seed database
INSERT INTO authors (first_name, last_name) VALUES ('John', 'Doe');
INSERT INTO authors (first_name, last_name) VALUES ('Mary', 'Smith');
INSERT INTO books (title, image) VALUES ('Moby Dick', 'http...');
INSERT INTO books (title, image) VALUES ('Ruby for Idiots', 'http...');

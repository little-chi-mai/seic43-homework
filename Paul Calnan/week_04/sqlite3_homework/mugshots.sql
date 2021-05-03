CREATE TABLE mugshots (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  crime TEXT,
  image TEXT --URL for photo of a mugshot
);

INSERT INTO mugshots (name, crime) VALUES ('Bill Gates', 'Driving Offence');

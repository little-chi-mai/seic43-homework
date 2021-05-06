CREATE TABLE potatoes(
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  family TEXT,
  image TEXT
);

--seed data

INSERT INTO potatoes (name, family) VALUES ("Monarch", "Nymphalidae");
INSERT INTO potatoes (name, family) VALUES ("Ulysses", "Blue");

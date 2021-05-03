-- SQL: Structured Query Language
CREATE TABLE dogs(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    breed TEXT,
    image TEXT --url for photo of a butterfly
);

--SEED Data
INSERT INTO dogs (name, breed) VALUES ('Mocha','Corgi');
INSERT INTO dogs (name, breed) VALUES ('Caps','German Shepherd');

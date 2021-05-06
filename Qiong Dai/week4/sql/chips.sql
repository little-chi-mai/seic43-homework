CREATE TABLE chips (
 id INTEGER PRIMARY KEY AUTOINCREMENT,
 flavour TEXT,
 weight INTEGER,
 price FLOAT,
 image TEXT
);

INSERT INTO chips (flavour,weight,price) VALUES ("Original",175,3.5);
INSERT INTO chips (flavour,weight,price) VALUES ("HoneySoyChicken",165,4.65);
INSERT INTO chips (flavour,weight,price) VALUES ("Light&Tangy",175,3.5);
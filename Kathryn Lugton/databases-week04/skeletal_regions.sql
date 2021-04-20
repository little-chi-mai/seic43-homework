CREATE TABLE skeletal_regions (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  region TEXT,
  image TEXT --URL
);

--seed data
INSERT INTO skeletal_regions (name, region) VALUES ("Skull", "Superior");
INSERT INTO skeletal_regions (name, region) VALUES ("Thoracic Cage", "Anterior");
INSERT INTO skeletal_regions (name, region) VALUES ("Vertebral Column", "Posterior");

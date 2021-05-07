CREATE TABLE subregions (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  skeletal_region TEXT
);


--seed data
INSERT INTO subregions (name, skeletal_region) VALUES ("Cervical", "Vertebral Column");
INSERT INTO subregions (name, skeletal_region) VALUES ("Thoracic", "Vertebral Column");
INSERT INTO subregions (name, skeletal_region) VALUES ("Lumbad", "Vertebral Column");
INSERT INTO subregions (name, skeletal_region) VALUES ("Sacral", "Vertebral Column");

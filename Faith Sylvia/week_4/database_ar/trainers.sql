
CREATE TABLE trainers (
  trainer_id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  image TEXT,
  description TEXT,
  brand_id INTEGER,
  FOREIGN KEY (brand_id)
       REFERENCES brands (brand_id)
);

--seed info
INSERT INTO trainers (name) VALUES ("Air Max 90");

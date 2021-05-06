CREATE TABLE skeletons (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  position TEXT,
  image TEXT -- hotlink URL
);

--seed data
INSERT INTO skeletons (name, position) VALUES ("Axial", "Medial");
INSERT INTO skeletons (name, position) VALUES ("Appendicular", "Lateral");

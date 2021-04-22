CREATE TABLE ocean_pools (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  state TEXT,
  image TEXT,
  description TEXT
);

--seed data
INSERT INTO ocean_pools(name,state) VALUES ("Gunlom Infinity Pools","Northern Territories");

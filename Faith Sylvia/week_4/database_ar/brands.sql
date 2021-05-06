
CREATE TABLE brands (
  brand_id INTEGER PRIMARY KEY AUTOINCREMENT,
  brand_name TEXT,
  headquarters TEXT,
  logo TEXT,
  slogan TEXT
);

--seed info
INSERT INTO brands (brand_name, headquarters) VALUES ("Nike","Beaverton, Oregon, United States");

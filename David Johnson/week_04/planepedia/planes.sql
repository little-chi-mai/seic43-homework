CREATE TABLE planes (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  manufacturer TEXT,
  model TEXT,
  description TEXT,
  image TEXT -- URL
);

--seed data

INSERT INTO planes (manufacturer, model, description) VALUES ("Colomban", "Cri Cri", "The workhorse of the sky");
INSERT INTO planes (manufacturer, model, description) VALUES ("Antonov", "AN 225", "Not very tough");

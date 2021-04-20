CREATE TABLE pets (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  gender TEXT,
  age INTEGER,
  breed TEXT,
  type TEXT,
  image TEXT
);

-- seed data
INSERT INTO pets (name, gender, age, breed, type, image) VALUES ("cat-Audrey", "Female", "5", "Mained Coon", "cat", "https://i.imgur.com/49XfcWp.jpg");
INSERT INTO pets (name, gender, age, breed, type, image) VALUES ("Cooper", "male", "6", "Maine Coon", "cat", "https://mainecoonmanor.com.au/wp-content/uploads/2017/09/2016-Maine-Coon-2017.jpg");

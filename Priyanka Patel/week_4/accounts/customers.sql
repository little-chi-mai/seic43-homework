DROP TABLE customers;

CREATE TABLE customers (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  first_name TEXT,
  last_name TEXT,
  gender TEXT,
  contact_detail INTEGER,
  email TEXT,
  address TEXT,
  account TEXT
);

INSERT INTO customers (first_name, last_name, gender, email) VALUES ('Karmen', 'Chuange', 'Female', 'karmen12@gmail.com');
INSERT INTO customers (first_name, last_name, gender, email) VALUES ('Alice', 'Han', 'Female', 'alice3412@gmail.com');

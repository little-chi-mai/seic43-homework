CREATE TABLE accounts (
  account_number INTEGER PRIMARY KEY AUTOINCREMENT,
  customer_id INTEGER,
  account_type TEXT,
  balance NUMBER,
  account_status TEXT,
  FOREIGN KEY (customer_id) REFERENCES customers (id)
);

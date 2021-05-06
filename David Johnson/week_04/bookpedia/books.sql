CREATE TABLE books (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT,
  author_first_name TEXT,
  author_last_name TEXT,
  author_id INTEGER,
  year_published INTEGER,
  book_prize_1 TEXT,
  book_prize_2 TEXT,
  book_prize_3 TEXT,
  book_image TEXT -- URL
);

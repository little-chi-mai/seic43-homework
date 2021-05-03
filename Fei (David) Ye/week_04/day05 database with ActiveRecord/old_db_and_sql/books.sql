CREATE TABLE books (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title VARCHAR(255) NOT NULL,
    author VARCHAR(50),
    cover VARCHAR(255)
);

INSERT INTO books (title, author) VALUES ("Harry Potter", "J.K. Rowling");
INSERT INTO books (title, author) VALUES ("A Song of Ice and Fire", "George R.R. Martin");



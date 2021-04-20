CREATE TABLE books (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title VARCHAR(255) NOT NULL,
    author_id VARCHAR(50),
    cover VARCHAR(255)
);

INSERT INTO books (title, author_id) VALUES ("Harry Potter", "1");
INSERT INTO books (title, author_id) VALUES ("A Song of Ice and Fire", "2");

CREATE TABLE authors (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR(100) NOT NULL,
    birth_year INTEGER,
    image VARCHAR(255)
);

INSERT INTO authors (name) VALUES ("J.K. Rowling");
INSERT INTO authors (name) VALUES ("George R.R. Martin");



ALTER TABLE books DROP author;

ALTER TABLE books ADD author_id INTEGER NOT NULL;

-- Alter table because previously in books.sql we already added author, which we need to remove and replace with author_id as foreign key

CREATE TABLE authors (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR(100) NOT NULL,
    birth_year INTEGER,
    image VARCHAR(255)
);

INSERT INTO authors (name) VALUES ("J.K. Rowling");
INSERT INTO authors (name) VALUES ("George R.R. Martin");
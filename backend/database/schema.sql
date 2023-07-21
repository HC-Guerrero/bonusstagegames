DROP DATABASE IF EXISTS bonus_stage_games;
CREATE DATABASE bonus_stage_games;
\c bonus_stage_games;

DROP TABLE IF EXISTS videogames;
DROP TABLE IF EXISTS users;

CREATE TABLE videogames (
id SERIAL PRIMARY KEY,
name TEXT NOT NULL,
genre TEXT,
platforms TEXT,
esrb_rating TEXT NOT NULL,
release_date TEXT,
price INT,
about TEXT
);

CREATE TABLE users (
id SERIAL PRIMARY KEY,
name TEXT NOT NULL,
photo TEXT,
email TEXT NOT NULL,
address TEXT,
age INT NOT NULL,
enrollment_date TEXT,
membership BOOLEAN,
payment_info FLOAT
);
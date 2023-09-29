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
about TEXT,
image TEXT
);

CREATE TABLE users (
id SERIAL PRIMARY KEY,
name TEXT NOT NULL,
photo TEXT,
email TEXT NOT NULL,
address TEXT,
age INT ,
enrollment_date TEXT,
membership BOOLEAN,
payment_info FLOAT,
password TEXT NOT NULL
);

-- INSERT INTO users (name, photo, email, address, age, enrollment_date, membership, payment_info, password) VALUES
-- ('Bob', 'https://static.tweaktown.com/news/7/4/74063_10_halo-infinites-sh-tty-graphics-make-craig-the-brute-an-internet-hero_full.png', 'bob1@gmail.com', '10-11-12th Grove Street', 32 , '01/01/2021', false, 4189609345129056, 'abcd1234'  ),
-- ('Hank', 'https://static.tvtropes.org/pmwiki/pub/images/52b8dd8a_eff2_4ed2_9b8d_7c0039df1c53.jpg', 'PropaneKing@gmail.com', '33-76-08th Cul-de-Sac', 45 , '06/30/2018', true, 3459602845126701, 'NYC02AB'  );
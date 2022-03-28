DROP TABLE IF EXISTS users;

CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    username VARCHAR (50) NOT NULL,
    email VARCHAR(50) NOT NULL UNIQUE,
    pass_digest VARCHAR(20) NOT NULL
);

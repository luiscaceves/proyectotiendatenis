CREATE DATABASE database_EVF;

USE database_EVF;

-- TABLA DE USUARIOS

CREATE TABLE users(
    id INT(11) NOT NULL,
    username VARCHAR(16) NOT NULL,
    password VARCHAR(60) NOT NULL
);

ALTER TABLE users
    ADD PRIMARY KEY (id);

ALTER TABLE users
    MODIFY id INT(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT = 1;

DESCRIBE users;


-- TABLA DE ARTICULOS

CREATE TABLE items(
    id INT(11) NOT NULL,
    model VARCHAR(18) NOT NULL,
    description TEXT,
    brand VARCHAR(20) NOT NULL,
    family VARCHAR(20),
    category VARCHAR(20),
    subcatecory VARCHAR(20),
    img VARCHAR(255) NOT NULL,
    user_id INT(11),
    created_at timestamp NOT NULL DEFAULT current_timestamp,
    CONSTRAINT fk_user FOREIGN KEY (user_id) REFERENCES users(id)
);

ALTER TABLE items
    ADD PRIMARY KEY (id);

ALTER TABLE items
    MODIFY id INT(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT = 1;




    CREATE USER 'webuser'@'localhost' IDENTIFIED BY 'RMs1stemas';
    GRANT ALL PRIVILEGES ON * . * TO 'webuser'@'localhost';
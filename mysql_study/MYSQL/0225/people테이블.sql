CREATE TABLE people (
    person_id INT AUTO_INCREMENT PRIMARY KEY,
    person_name VARCHAR(10),
    age TINYINT,
    birthday DATE
);

DROP TABLE people;

SELECT * FROM people;

INSERT INTO people (person_name, age)
VALUES ('이짱구', 20);
CREATE TABLE people (
    person_id INT AUTO_INCREMENT PRIMARY KEY,
    person_name VARCHAR(10) NOT NULL,
    nickname VARCHAR(10) UNIQUE NOT NULL,
    age TINYINT UNSIGNED,
    is_married TINYINT DEFAULT 0
);

INSERT INTO people (person_name, nickname, age)
VALUES ('김철수', '아이언워터', 10);

INSERT INTO people (person_name, nickname, age)
VALUES ('이불가', '임파서블', 10); -- 오류 발생 (양수만 허용)

INSERT INTO people (person_name, nickname, age, is_married)
VALUES ('박쇳물', '아이언히터터', NULL, 1); -- 오류 발생 (닉네임 중복 불가)

SELECT * FROM people;
SELECT * FROM people;

UPDATE people SET birthday = '2025/02/26';

TRUNCATE people; /*테이블 완전 초기화*/

DELETE FROM people;

DELETE from people WHERE person_id = 4;

update people set person_name="수정", age=22 where person_id=18
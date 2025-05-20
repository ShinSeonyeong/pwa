usersINSERT INTO users (id, PASSWORD) VALUES ('id_testa', 'id_testa');

SELECT * FROM users;

UPDATE users SET id='dff', PASSWORD='dff' WHERE idx=3;

delete FROM users;
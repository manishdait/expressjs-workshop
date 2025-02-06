\c pg_db;

CREATE SEQUENCE IF NOT EXISTS user_seq
START WITH 1
INCREMENT BY 1
MINVALUE 1
MAXVALUE 10000000000
NO CYCLE;

CREATE TABLE IF NOT EXISTS _user (
  id INTEGER DEFAULT NEXTVAL('user_seq'),
  username VARCHAR(100),
  displayName VARCHAR(100)
)
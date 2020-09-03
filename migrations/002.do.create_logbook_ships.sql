CREATE TABLE logbook_ships (
  ship_id INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
  user_id INT FOREIGN KEY REFERENCES logbook_users(user_id),
  ship_name TEXT NOT NULL,
  date_created TIMESTAMP DEFAULT now() NOT NULL,
  date_modified TIMESTAMP,
);


-- CREATE TABLE logbook_ships (
--   id INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
--   user_id INT,
--   ship_name TEXT NOT NULL,
--   date_created TIMESTAMP DEFAULT now() NOT NULL,
--   date_modified TIMESTAMP,
--   CONSTRAINT fk_user
--     FOREIGN KEY(user_id)
--       REFERENCES logbook_users(id)
-- );

BEGIN;

TRUNCATE
  users,
  user_ships
  -- ship_tier
  RESTART IDENTITY CASCADE;

INSERT INTO users (username, password)
VALUES
  ('dunder', '$2a$12$lHK6LVpc15/ZROZcKU00QeiD.RyYq5dVlV/9m4kKYbGibkRc5l4Ne'),
  ('b.deboop', '$2a$12$VQ5HgWm34QQK2rJyLc0lmu59cy2jcZiV6U1.bE8rBBnC9VxDf/YQO'),
  ('c.bloggs', '$2a$12$2fv9OPgM07xGnhDbyL6xsuAeQjAYpZx/3V2dnu0XNIR27gTeiK2gK'),
  ('s.smith', '$2a$12$/4P5/ylaB7qur/McgrEKwuCy.3JZ6W.cRtqxiJsYCdhr89V4Z3rp.'),
  ('lexlor', '$2a$12$Hq9pfcWWvnzZ8x8HqJotveRHLD13ceS7DDbrs18LpK6rfj4iftNw.'),
  ('wippy', '$2a$12$ntGOlTLG5nEXYgDVqk4bPejBoJP65HfH2JEMc1JBpXaVjXo5RsTUu');

-- Create ship_parts that references tier, frame, engine, power core, etc.
INSERT INTO user_ships (user_id, ship_name)
VALUES
  (1, 'Loreseeker'),
  (1, 'Ship 2'),
  (1, 'Ship 3'),
  (2, 'Ship 1'),
  (2, 'Ship 2'),
  (3, 'Ship 1');

-- INSERT INTO ship_tier (tier, tier_text, BP, special)
-- VALUES
--   (1.0/4.0, '1/4', 25, null),
--   (1.0/3.0, '1/3', 30, null),
--   (1.0/2.0, '1/2', 40, null),
--   (1, '1', 55, null),
--   (2, '2', 75, null),
--   (3, '3', 95, null),
--   (4, '4', 115, 'HP increase'),
--   (5, '5', 135, null),
--   (6, '6', 155, null),
--   (7, '7', 180, null),
--   (8, '8', 205, 'HP increase'),
--   (9, '9', 230, null),
--   (10, '10', 270, null),
--   (11, '11', 310, null),
--   (12, '12', 350, 'HP increase'),
--   (13, '13', 400, null),
--   (14, '14', 450, null),
--   (15, '15', 500, null),
--   (16, '16', 600, 'HP increase'),
--   (17, '17', 700, null),
--   (18, '18', 800, null),
--   (19, '19', 900, null),
--   (20, '20', 1000, 'HP increase');

-- INSERT INTO ship_frame (class, size, maneuverability, HP, HP_increment, DT, CT, weapon_mounts, expansion_bays, min_crew, max_crew, BP_cost)
-- VALUES
--   ('Racer', 'Tiny', 'Perfect', 20, 5, null, 4, (null), 0, 1, 1, 4),
--   ('Statikete', 'Tiny', 'Perfect', 25, 5, null, 5, (null), 0, 1, 1, 5),
--   ('Interceptor', 'Tiny', 'Perfect', 30, 5, null, 6, (null), 0, 1, 1, 6),
--   ('Shuttle', 'Small', 'Perfect', 35, 5, null, 7, (null), 3, 1, 4, 6),
--   ('Fighter', 'Tiny', 'Good', 35, 5, null, 7, (null), 0, 1, 2, 8);

-- INSERT INTO racer_mount (arc, light, medium, heavy, capital, spinal)
-- VALUES 
--   (forward_arc, 0, 0, 0, 0, 0),
--   (aft_arc, 0, 0, 0, 0, 0),
--   (port_arc, 0, 0, 0, 0, 0),
--   (starboard_arc, 0, 0, 0, 0, 0),
--   (turret, 0, 0, 0, 0, 0);

COMMIT;

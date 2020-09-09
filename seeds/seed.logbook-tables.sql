BEGIN;

TRUNCATE
  logbook_users,
  user_ships
  -- ship_tier
  RESTART IDENTITY CASCADE;

INSERT INTO logbook_users (username, password)
VALUES
  ('dunder', '$2a$12$lHK6LVpc15/ZROZcKU00QeiD.RyYq5dVlV/9m4kKYbGibkRc5l4Ne'),
  ('b.deboop', '$2a$12$VQ5HgWm34QQK2rJyLc0lmu59cy2jcZiV6U1.bE8rBBnC9VxDf/YQO'),
  ('c.bloggs', '$2a$12$2fv9OPgM07xGnhDbyL6xsuAeQjAYpZx/3V2dnu0XNIR27gTeiK2gK'),
  ('s.smith', '$2a$12$/4P5/ylaB7qur/McgrEKwuCy.3JZ6W.cRtqxiJsYCdhr89V4Z3rp.'),
  ('lexlor', '$2a$12$Hq9pfcWWvnzZ8x8HqJotveRHLD13ceS7DDbrs18LpK6rfj4iftNw.'),
  ('wippy', '$2a$12$ntGOlTLG5nEXYgDVqk4bPejBoJP65HfH2JEMc1JBpXaVjXo5RsTUu');

-- Create ship_parts that references tier, frame, engine, power core, etc.
INSERT INTO user_ships (user_id, ship_name, core, thrusters, armor, computer, defenses, sensors, shields, engines)
VALUES
  (1, 'Loreseeker', 'Micron Light', 'T6 thrusters', 'Mk 1 armor', 'Basic Computer', 'Mk 1 defenses', 'Cut-rate', 'Mk 1 Basic Shields', 'Signal Basic'),
  (1, 'Ship 2', 'Micron Light', 'T6 thrusters', 'Mk 1 armor', 'Basic Computer', 'Mk 1 defenses', 'Cut-rate', 'Mk 1 Basic Shields', 'Signal Basic'),
  (1, 'Ship 3', 'Micron Light', 'T6 thrusters', 'Mk 1 armor', 'Basic Computer', 'Mk 1 defenses', 'Cut-rate', 'Mk 1 Basic Shields', 'Signal Basic'),
  (2, 'Ship 1', 'Micron Light', 'T6 thrusters', 'Mk 1 armor', 'Basic Computer', 'Mk 1 defenses', 'Cut-rate', 'Mk 1 Basic Shields', 'Signal Basic'),
  (2, 'Ship 2', 'Micron Light', 'T6 thrusters', 'Mk 1 armor', 'Basic Computer', 'Mk 1 defenses', 'Cut-rate', 'Mk 1 Basic Shields', 'Signal Basic'),
  (3, 'Ship 1', 'Micron Light', 'T6 thrusters', 'Mk 1 armor', 'Basic Computer', 'Mk 1 defenses', 'Cut-rate', 'Mk 1 Basic Shields', 'Signal Basic');

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

-- INSERT INTO ship_frame (class, size, maneuverability, HP, HP_increment, DT, CT, expansion_bays, min_crew, max_crew, BP_cost, special_abilities, source)
-- VALUES
--   ('Racer', 'Tiny', 'Perfect', 20, 5, 0, 4, 0, 1, 1, 4, null, 'Starfinder Core Rulebook pg. 295'),
--   ('Statikete', 'Tiny', 'Perfect', 25, 5, 0, 5, 0, 1, 1, 5, 'EMP Dispersal (Ex) When a starship built with a statikete frame is hit with an EMP weapon, it reduces the duration of that weapon’s effect by half, rounded down to a minimum of 0 rounds.', 'Starfinder #19: Fate of the Fifth pg. 57'),
--   ('Interceptor', 'Tiny', 'Perfect', 30, 5, 0, 6, 0, 1, 1, 6, null, 'Starfinder Core Rulebook pg. 295'),
--   ('Shuttle', 'Small', 'Perfect', 35, 5, 0, 7, 3, 1, 4, 6, null, 'Starfinder Core Rulebook pg. 295'),
--   ('Fighter', 'Tiny', 'Good', 35, 5, 0, 7, 0, 1, 2, 8, null, 'Starfinder Core Rulebook pg. 295'),
--   ('Light Freighter', 'Small', 'Good', 40, 10, 0, 8, 3, 1, 6, 10, null, 'Starfinder Core Rulebook pg. 295'),
--   ('Explorer', 'Medium', 'Good', 55, 10, 0, 11, 4, 1, 6, 12, null, 'Starfinder Core Rulebook pg. 295'),
--   ('Transport', 'Medium', 'Average', 70, 15, 0, 14, 5, 1, 6, 15, null, 'Starfinder Core Rulebook pg. 295'),
--   ('Oma', 'Medium', 'Average', 85, 15, 0, 17, 6, 1, 6, 20, 'Drift Resistant (Ex) An oma’s body must be specially refitted to accommodate Drift travel; installing a Drift engine in an oma increases the price of the engine by 50%.', 'Alien Archive pg. 89'),
--   ('Destroyer', 'Large', 'Average', 150, 20, 0, 30, 4, 6, 20, 30, null, 'Starfinder Core Rulebook pg. 295'),
--   ('Heavy Freighter', 'Large', 'Average', 120, 20, 0, 24, 8, 6, 20, 40, null, 'Starfinder Core Rulebook pg. 295'),
--   ('Vermelith', 'Large', 'Average', 130, 20, 0, 26, 7, 6, 20, 45, 'Extreme Resistance (Ex) An EMP weapon has half its normal duration against a vessel built using this frame. The vessel has a +1 bonus to its AC against direct fire weapons that use gravity and a +1 bonus to Piloting checks the pilot attempts due to gravity, such as escaping a tractor beam. In addition, a biomechanical ship built from this frame treats its radiation exposure as 1 level lower when determining critical damage effects due to radiation.', 'Alien Archive 2 pg. 131'),
--   ('Bulk Freighter', 'Huge', 'Poor', 160, 20, 5, 32, 10, 20, 50, 55, null, 'Starfinder Core Rulebook pg. 295'),
--   ('Cruiser', 'Huge', 'Average', 180, 25, 5, 36, 6, 20, 100, 60, null, 'Starfinder Core Rulebook pg. 295'),
--   ('Carrier', 'Gargantuan', 'Poor', 240, 30, 10, 48, 10, 75, 200, 120, null, 'Starfinder Core Rulebook pg. 296'),
--   ('Battleship', 'Gargantuan', 'Average', 280, 40, 10, 56, 8, 100, 300, 150, null, 'Starfinder Core Rulebook pg. 296'),
--   ('Dreadnought', 'Colossal', 'Clumsy', 400, 50, 15, 80, 20, 125, 500, 200, null, 'Starfinder Core Rulebook pg. 296'),
--   ('Base Ship', 'Supercolossal', 'Clumsy', 450, 75, 15, 90, infinity, 150, 100000, 250, null, 'Starfinder #6: Empire of Bones pg. 45'),
--   ('Ultranought', 'Supercolossal', 'Clumsy', 550, 100, 20, 110, infinity, 250, 5000, 350, null, 'Starfinder #6: Empire of Bones pg. 45');

COMMIT;

BEGIN;

TRUNCATE
  racer_mounts,
  statikete_mounts,
  interceptor_mounts,
  shuttle_mounts,
  fighter_mounts,
  light_freighter_mounts,
  explorer_mounts,
  transport_mounts,
  oma_mounts,
  destroyer_mounts,
  heavy_freighter_mounts,
  vermelith_mounts,
  bulk_freighter_mounts,
  cruiser_mounts,
  carrier_mounts,
  battleship_mounts,
  dreadnought_mounts,
  base_ship_mounts,
  ultranought_mounts
  RESTART IDENTITY CASCADE;

INSERT INTO racer_mounts (arc, light, heavy, capital, spinal)
VALUES 
  (forward_arc, 1, 0, 0, 0),
  (port_arc, 0, 0, 0, 0),
  (starboard_arc, 0, 0, 0, 0),
  (aft_arc, 1, 0, 0, 0),
  (turret, 0, 0, 0, 0);

INSERT INTO statikete_mounts (arc, light, heavy, capital, spinal)
VALUES 
  (forward_arc, 1, 0, 0, 0),
  (port_arc, 0, 0, 0, 0),
  (starboard_arc, 0, 0, 0, 0),
  (aft_arc, 0, 0, 0, 0),
  (turret, 0, 0, 0, 0);

INSERT INTO interceptor_mounts (arc, light, heavy, capital, spinal)
VALUES 
  (forward_arc, 2, 0, 0, 0),
  (port_arc, 0, 0, 0, 0),
  (starboard_arc, 0, 0, 0, 0),
  (aft_arc, 0, 0, 0, 0),
  (turret, 0, 0, 0, 0);

INSERT INTO shuttle_mounts (arc, light, heavy, capital, spinal)
VALUES 
  (forward_arc, 1, 0, 0, 0),
  (port_arc, 0, 0, 0, 0),
  (starboard_arc, 0, 0, 0, 0),
  (aft_arc, 0, 0, 0, 0),
  (turret, 0, 0, 0, 0);

INSERT INTO fighter_mounts (arc, light, heavy, capital, spinal)
VALUES 
  (forward_arc, 2, 0, 0, 0),
  (port_arc, 0, 0, 0, 0),
  (starboard_arc, 0, 0, 0, 0),
  (aft_arc, 1, 0, 0, 0),
  (turret, 0, 0, 0, 0);

INSERT INTO light_freighter_mounts (arc, light, heavy, capital, spinal)
VALUES 
  (forward_arc, 2, 0, 0, 0),
  (port_arc, 1, 0, 0, 0),
  (starboard_arc, 1, 0, 0, 0),
  (aft_arc, 0, 0, 0, 0),
  (turret, 0, 0, 0, 0);

INSERT INTO explorer_mounts (arc, light, heavy, capital, spinal)
VALUES 
  (forward_arc, 1, 0, 0, 0),
  (port_arc, 1, 0, 0, 0),
  (starboard_arc, 1, 0, 0, 0),
  (aft_arc, 0, 0, 0, 0),
  (turret, 1, 0, 0, 0);

INSERT INTO transport_mounts (arc, light, heavy, capital, spinal)
VALUES 
  (forward_arc, 1, 1, 0, 0),
  (port_arc, 0, 0, 0, 0),
  (starboard_arc, 0, 0, 0, 0),
  (aft_arc, 1, 0, 0, 0),
  (turret, 2, 0, 0, 0);

INSERT INTO oma_mounts (arc, light, heavy, capital, spinal)
VALUES 
  (forward_arc, 1, 1, 0, 0),
  (port_arc, 1, 0, 0, 0),
  (starboard_arc, 1, 0, 0, 0),
  (aft_arc, 1, 0, 0, 0),
  (turret, 0, 0, 0, 0);

INSERT INTO destroyer_mounts (arc, light, heavy, capital, spinal)
VALUES 
  (forward_arc, 0, 2, 0, 0),
  (port_arc, 1, 0, 0, 0),
  (starboard_arc, 1, 0, 0, 0),
  (aft_arc, 1, 0, 0, 0),
  (turret, 1, 0, 0, 0);

INSERT INTO heavy_freighter_mounts (arc, light, heavy, capital, spinal)
VALUES 
  (forward_arc, 2, 1, 0, 0),
  (port_arc, 0, 0, 1, 0),
  (starboard_arc, 0, 1, 0, 0),
  (aft_arc, 0, 0, 0, 0),
  (turret, 0, 0, 0, 0);

INSERT INTO vermelith_mounts (arc, light, heavy, capital, spinal)
VALUES 
  (forward_arc, 1, 1, 0, 0),
  (port_arc, 1, 0, 0, 0),
  (starboard_arc, 1, 0, 0, 0),
  (aft_arc, 1, 0, 0, 0),
  (turret, 1, 0, 0, 0);

INSERT INTO bulk_freighter_mounts (arc, light, heavy, capital, spinal)
VALUES 
  (forward_arc, 0, 1, 0, 0),
  (port_arc, 0, 0, 0, 0),
  (starboard_arc, 0, 0, 0, 0),
  (aft_arc, 0, 1, 0, 0),
  (turret, 2, 0, 0, 0);

INSERT INTO cruiser_mounts (arc, light, heavy, capital, spinal)
VALUES 
  (forward_arc, 0, 0, 1, 0),
  (port_arc, 1, 0, 0, 0),
  (starboard_arc, 1, 0, 0, 0),
  (aft_arc, 0, 0, 0, 0),
  (turret, 0, 1, 0, 0);

INSERT INTO carrier_mounts (arc, light, heavy, capital, spinal)
VALUES 
  (forward_arc, 0, 0, 1, 0),
  (port_arc, 0, 3, 0, 0),
  (starboard_arc, 0, 3, 0, 0),
  (aft_arc, 0, 0, 0, 0),
  (turret, 2, 0, 0, 0);

INSERT INTO battleship_mounts (arc, light, heavy, capital, spinal)
VALUES 
  (forward_arc, 0, 2, 1, 0),
  (port_arc, 1, 2, 0, 0),
  (starboard_arc, 1, 2, 0, 0),
  (aft_arc, 1, 0, 0, 0),
  (turret, 0, 2, 0, 0);

INSERT INTO dreadnought_mounts (arc, light, heavy, capital, spinal)
VALUES 
  (forward_arc, 0, 2, 2, 0),
  (port_arc, 0, 3, 1, 0),
  (starboard_arc, 0, 3, 1, 0),
  (aft_arc, 0, 0, 0, 0),
  (turret, 4, 0, 0, 0);

INSERT INTO base_ship_mounts (arc, light, heavy, capital, spinal)
VALUES 
  (forward_arc, 0, 4, 0, 0),
  (port_arc, 0, 4, 0, 0),
  (starboard_arc, 0, 4, 0, 0),
  (aft_arc, 0, 0, 0, 0),
  (turret, 0, 0, 2, 0);

INSERT INTO ultranought_mounts (arc, light, heavy, capital, spinal)
VALUES 
  (forward_arc, 0, 2, 2, 1),
  (port_arc, 0, 3, 2, 0),
  (starboard_arc, 0, 3, 2, 0),
  (aft_arc, 0, 0, 0, 0),
  (turret, 0, 2, 1, 0);

COMMIT;

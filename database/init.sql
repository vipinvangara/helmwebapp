CREATE TABLE IF NOT EXISTS companies (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  market_value BIGINT NOT NULL
);

INSERT INTO companies (name, market_value) VALUES
  ('Apple', 2000000000000),
  ('Microsoft', 1900000000000),
  ('Saudi Aramco', 1800000000000),
  ('Alphabet (Google)', 1500000000000),
  ('Amazon', 1400000000000),
  ('NVIDIA', 1100000000000),
  ('Meta (Facebook)', 800000000000),
  ('Berkshire Hathaway', 700000000000),
  ('Tesla', 600000000000),
  ('Eli Lilly', 500000000000);

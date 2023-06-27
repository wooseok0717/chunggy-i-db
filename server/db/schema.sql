DROP DATABASE IF EXISTS chunggyitems;
CREATE DATABASE chunggyitems;

\c chunggyitems;

CREATE TABLE items (
  id SERIAL PRIMARY NOT NULL,
  item_number INTEGER NOT NULL,
  item_name TEXT NOT NULL,
  part TEXT NOT NULL,
  type TEXT,
  grade TEXT NOT NULL,
  level INTEGER,
  line_one JSON,
  line_two JSON,
  manastones ARRAY,
  manastone_level INTEGER,
  condition_one JSON,
  condition_two JSON,
  max_enchant INTEGER,
  set_id INTEGER REFERENCES sets (id),
  creator TEXT NOT NULL,
  created_at TEXT,
  abyss JSON,
  total_stats JSON,
  korean_name TEXT
);

CREATE index id_idx on items(id);
CREATE index item_number_idx on items(item_number);
CREATE index item_name_idx on items(item_name);
CREATE index line_one_idx on items(line_one);
CREATE index line_two_idx on items(line_two);
CREATE index set_id_idx on items(set_id);
CREATE index creator_idx on items(creator);
CREATE index total_stats_idx on items(total_stats);
CREATE index korean_name_idx on items(korean_name);
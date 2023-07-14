
CREATE DATABASE josh;
\c josh;

DROP DATABASE IF EXISTS chunggyitems;
CREATE DATABASE chunggyitems;

\c chunggyitems;

CREATE TABLE sets (
  id SERIAL PRIMARY KEY NOT NULL,
  name TEXT,
  level_one_req INTEGER,
  level_two_req INTEGER,
  level_one_stat JSON,
  level_two_stat JSON,
  hidden_req INTEGER,
  hidden_effect JSON,
  created_at TEXT,
  creator TEXT
);

CREATE index set_idx on sets(id);
CREATE index set_name_idx on sets(name);

CREATE TABLE items (
  id SERIAL PRIMARY KEY NOT NULL,
  item_number INTEGER NOT NULL,
  item_name TEXT NOT NULL,
  part TEXT NOT NULL,
  type TEXT,
  grade TEXT NOT NULL,
  material TEXT DEFAULT NULL,
  level INTEGER DEFAULT NULL,
  line_one JSON,
  line_two JSON,
  manastones JSON,
  condition_one JSON,
  condition_two JSON,
  max_enchant INTEGER DEFAULT NULL,
  set_id INTEGER REFERENCES sets (id) DEFAULT NULL,
  creator TEXT NOT NULL,
  created_at TEXT,
  abyss JSON,
  total_stats JSON,
  korean_name TEXT DEFAULT NULL
);

CREATE index id_idx on items(id);
CREATE index item_number_idx on items(item_number);
CREATE index item_name_idx on items(item_name);
CREATE index set_id_idx on items(set_id);
CREATE index creator_idx on items(creator);
CREATE index korean_name_idx on items(korean_name);

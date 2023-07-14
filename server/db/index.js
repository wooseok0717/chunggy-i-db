const { Client } = require('pg');
require('dotenv').config();

const client = new Client({
  host: process.env.HOST,
  port: process.env.DBPORT,
  user: 'chunggy',
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
});

client.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('connection complete');
  }
});

module.exports = client;
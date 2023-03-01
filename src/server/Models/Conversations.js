// CREATE TABLE users (
//     userId serial PRIMARY KEY, username VARCHAR NOT NULL, name VARCHAR, password VARCHAR NOT NULL
//     )
const { Pool } = require('pg')
const PG_URI = 'postgres://hkoveruq:XsisJ9qjg-4DFguT5CHyR87yYMJkPXvl@mahmud.db.elephantsql.com/hkoveruq';

const pool = new Pool({
  connectionString: PG_URI
})

module.exports = {
    query: (text, params, callback) => {
      console.log('executed query', text);
      return pool.query(text, params, callback);
    }
  };
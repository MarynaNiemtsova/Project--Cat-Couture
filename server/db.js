const { Pool } = require("pg");
const types = require("pg").types;
// pg won't cast by default as may lose precision.
types.setTypeParser(1700, function (val) {
  return parseFloat(val);
});

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.DATABASE_URL
    ? {
        rejectUnauthorized: false,
      }
    : false,
});

module.exports = {
  query: (text, params, callback) => {
    return pool.query(text, params, callback);
  },
  end: () => {
    pool.end();
  },
};

// config/db.js
const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Swati@1234", // ✅ Your correct password
  database: "HELLO", // ✅ Your actual DB name
});

db.connect((err) => {
  if (err) throw err;
  console.log("✅ MySQL connected!");
});

module.exports = db;

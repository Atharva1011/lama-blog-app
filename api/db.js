const mysql = require("mysql");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Atharva@2001",
  database: "blog",
});

db.connect((err) => {
  if (err) throw err;
  console.log("Connected to the database successfully");
});

module.exports = db;

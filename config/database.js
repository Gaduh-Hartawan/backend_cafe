import mysql from "mysql";

const db = mysql.createConnection({
  host: "sql6.freesqldatabase.com",
  user: "sql6587090",
  password: "1qtTDajID5",
  database: "sql6587090",
  multipleStatements: true,
});

export default db;

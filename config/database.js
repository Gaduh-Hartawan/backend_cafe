import mysql from "mysql";

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "uaspam",
  multipleStatements: true,
});

export default db;

import mysql from "mysql";

const db = mysql.createConnection({
  host: "https://cafe-app-pam.cyclic.app",
  user: "root",
  password: "",
  database: "uaspam",
  multipleStatements: true,
});

export default db;

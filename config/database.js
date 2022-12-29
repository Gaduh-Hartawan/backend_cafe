import mysql from "mysql";

const db = mysql.createConnection({
  host: "https://thoughtful-jade-sawfish.cyclic.app",
  user: "root",
  password: "",
  database: "uaspam",
  multipleStatements: true,
});

export default db;

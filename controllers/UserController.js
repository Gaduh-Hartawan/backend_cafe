import db from "../config/database.js";

/**
 * Controller User
 */
export const getUser = (req, res) => {
  const query = "select * from users";
  db.query(query, (err, data) => {
    if (err) throw err;
    return res.status(200).json(data);
  });
};

export const getUserById = (req, res) => {
  const id = req.params.id;
  const query = `select * from users where id_user = ${id}`;
  db.query(query, (err, data) => {
    if (err) throw err;
    return res.status(200).json(data);
  });
};

export const loginUser = (req, res) => {
  let email = req.body.email;
  let password = req.body.password;
  const query = `select * from users where email = '${email}' and password = '${password}'`;
  db.query(query, (err, data) => {
    if (err) throw err;
    if (data.length > 0) {
      res.status(200).json({ message: "User berhasil login." });
    } else {
      res.status(401).json({ message: "Invalid credentials!" });
    }
  });
};

export const registerUser = (req, res) => {
  const query = "insert into users (`nama`, `email`, `password`) values (?)";
  const values = [req.body.nama, req.body.email, req.body.password];

  db.query(query, [values], (err, data) => {
    if (err) throw err;
    return res.status(201).json({ message: "Register Succesfully" });
  });
};

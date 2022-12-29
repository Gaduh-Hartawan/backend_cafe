import db from "../config/database.js";

/**
 * Controller Produk
 */

export const getProduct = (req, res) => {
  const query = `select * from products`;
  db.query(query, (err, result) => {
    if (err) throw err;
    return res.status(200).json(result);
  });
};

export const getProductById = (req, res) => {
  let id = req.params.id;
  const query = `select * from products where id_product = ${id}`;
  db.query(query, (err, result) => {
    if (err) throw err;
    return res.status(200).json(result);
  });
};

export const addProduct = (req, res) => {
  const q =
    "insert into products (`product_name`, `price`, `description`, `img_url`) values (?)";
  const values = [
    req.body.product_name,
    req.body.price,
    req.body.description,
    req.body.img_url,
  ];

  db.query(q, [values], (err, result) => {
    if (err) return res.json(err);
    return res.status(201).json({ message: "Product was created" });
  });
};

export const updateProduct = (req, res) => {
  let id = req.params.id;
  const query = `UPDATE products SET ? WHERE id_product = ${id}`;
  let values = {
    product_name: req.body.product_name,
    price: req.body.price,
    description: req.body.description,
    img_url: req.body.img_url,
  };
  db.query(query, [values], (err, data) => {
    if (err) return res.json(err);
    return res.status(201).json({ message: "Product was updated" });
  });
};

export const deleteProduct = (req, res) => {
  let id = req.params.id;
  const query = `delete from products where id_product = ${id}`;
  db.query(query, (err, data) => {
    if (err) throw err;
    return res.status(200).json({ message: "Product was deleted" });
  });
};

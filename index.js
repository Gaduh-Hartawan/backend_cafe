import express from "express";
import cors from "cors";
// import session from "express-session";
import bodyParser from "body-parser";
import UserRoute from "./routes/UserRoute.js";
import ProductRoute from "./routes/ProductRoute.js";

const app = express();
app.use(cors());
// app.use(express.urlencoded({ extended: false }));
// app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// app.use(
//   session({
//     resave: false,
//     saveUninitialized: false,
//     secret: "g4duhh@rt4w@n",
//     name: "secretName",
//     cookie: {
//       path: "/",
//     },
//   })
// );

app.use(UserRoute);
app.use(ProductRoute);

app.listen(5000, () => console.log("Server running on port 5000"));

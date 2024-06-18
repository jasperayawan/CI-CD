const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParse = require("cookie-parser");

const connectDB = require("./db/config");

const authRoute = require("./routes/auth.route");

const app = express();

dotenv.config();
const port = process.env.PORT;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParse());
app.use(cors({ origin: "http://localhost:5173" }));

app.use("/api/auth", authRoute);

app.listen(port, () => {
  connectDB();
  console.log("server listening to port:", port);
});

const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser")

const connectDB = require("./db/config")

const authRoute = require('./routes/auth.route')

const app = express();

dotenv.config();
const port = process.env.PORT;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true }))

app.use('/api/auth', authRoute);

app.listen(port, () => {
    connectDB();
    console.log("server listening to port:", port)
})
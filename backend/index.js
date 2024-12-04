const express = require("express");
const app = express();
require("dotenv").config();
require("./Models/db");
const bodyParser = require("body-parser");
const cors = require("cors");
const authRouter = require("./Routes/AuthRouter");
const ProductRouter = require("./Routes/ProductRouter")

const PORT = process.env.PORT || 8080;

app.get("/ping", (req, res) => {
  res.send("<h1>Pong</h1>");
});

app.use(bodyParser.json());
app.use(cors());
app.use('/auth', authRouter);
app.use('/products', ProductRouter);
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});

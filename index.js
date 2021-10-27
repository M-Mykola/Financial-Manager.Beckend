require("dotenv").config();

const express = require("express");
const app = express();
const mongooseConnection = require("./Db/mongoDb");
const router = require("./router");
const cors = require("cors");

app.use(
  cors({
    "Access-Control-Allow-Origin": "*",
  })
);
app.use(express.json());
app.use(router);
app.use(cors());

mongooseConnection();
const PORT = process.env.PORT || 3200;

app.listen(PORT, function () {
  console.log(`Server run in Port : ${process.env.PORT}`);
});

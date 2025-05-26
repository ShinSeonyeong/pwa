require("dotenv").config();

const cors = require("cors");
// const pool = require("./db.js");
const express = require("express");
const path = require("path");
const morgan = require("morgan");

const cookieParser = require("cookie-parser");

const app = express();

app.use(morgan());
app.use(cors());
app.use("/", express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser(process.env.COOKIE_SECRET));

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const routes = require("./routes/ToDoRoute");

const app = express();

//express json

//CORS
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

//Body Parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Mongoose Connect
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DB connected"))
  .catch((e) => console.log(e));

app.use(routes);

// Server Started
app.listen(3000, () => {
  console.log("Server started at PORT 4000");
});

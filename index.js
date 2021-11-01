const express = require("express");
//const mysql = require('mysql');
const bodyparser = require("body-parser");
//const { urlencoded } = require('body-parser');

const app = express();

const port = process.env.PORT || 3200;
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

app.get("/", (req, res) => {
  res.send("<h1>Hello world</h1>");
});

// Require employee routes
const userRoutes = require("./src/routes/user.routes");
// using as middleware
app.use("/api/v1/users", userRoutes);
// listen for requests
app.listen(port, (req, res) => {
  console.log(`Server is listening on port ${port}`);
});

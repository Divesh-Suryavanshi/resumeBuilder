require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 5000;

// Third party middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/hello", (req, res) => {
  res.send({ express: "Hello from Express.." });
});

app.post("/api/world", (req, res) => {
  console.log(req.body);
  res.send(`I received your POST request. ${req.body.post}`);
});

app.listen(port, () => console.log(`Listening at port: ${port}`));

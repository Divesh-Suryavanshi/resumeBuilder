require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const template = require("./component/template");
const cors = require("cors")
const pdf = require("html-pdf")

const options = {
	height: "42cm",
	width: "29.7cm",
	timeout: "6000",
};

const app = express();
const port = process.env.PORT || 5000;

// Third party middlewares
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/hello", (req, res) => {
  res.send({ express: "Hello from Express.." });
});

app.post("/api/world", (req, res) => {
  console.log(req.body);
  res.send(`I received your POST request. ${req.body.post}`);
});

app.post("/api/create-pdf", (req, res) => {
  console.log(req.body);
  const html = template(req.body);
  console.log(html);

  pdf.create(html).toFile(`Resume.pdf`, (err) => {
    if(err) {
      console.log(err);
      res.send(Promise.reject());
    }
    else res.send(Promise.resolve());
  })

});

app.get("/api/fetch-pdf", (req, res) => {
  const file = `${__dirname}/Resume.pdf`;
  res.download(file);
  // res.send(`File Sent Successfully`);
});

app.listen(port, () => console.log(`Listening at port: ${port}`));

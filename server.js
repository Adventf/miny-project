const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = 3001;
const { film } = require("./models");

app.use(express.static("public"));

app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  film.findAll().then((a) => {
    res.render("homepage", { a });
  });
});
app.get("/create", (req, res) => {
  res.render("create");
});

app.post("/create", (req, res, next) => {
  film
    .create(req.body)
    .then(() => {
      res.redirect("/");
    })
    .catch((err) => next(err));
});

app.listen(port, () => {
  console.log(`app running in port ${port}`);
});

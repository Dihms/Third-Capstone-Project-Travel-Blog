import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.get("/amsterdam", (req, res) => {
  res.render("amsterdam.ejs");
});

app.get("/rome", (req, res) => {
  res.render("rome.ejs");
});

app.get("/dubai", (req, res) => {
  res.render("dubai.ejs");
});

app.get("/about", (req, res) => {
  res.render("about.ejs");
});

app.listen(port, () => {
  console.log(`Server listening to port ${port}.`);
});

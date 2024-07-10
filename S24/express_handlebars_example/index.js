const express = require("express");
const app = express();
const path = require("path");

// add the express-handlebars module
const exphbs = require("express-handlebars");

const HTTP_PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));

// tell express we are using the HBS engine
app.engine(".hbs", exphbs.engine({ extname: ".hbs" }));
app.set("view engine", ".hbs");

// GET route index
app.get("/", (req, res) => {
  // render the file index.hbs, which in turn will also use the layout/main.hbs file
  res.render("index");
});

app.get("/about", (req, res) => {
   // render the file about.hbs, which in turn will also use the layout/main.hbs file
  res.render("about");
});

app.listen(HTTP_PORT, () => {
  console.log(`server listening on: http://localhost:${HTTP_PORT}`);
});

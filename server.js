const express = require("express");
const exphbs = require("express-handlebars");
const routes = require("./controllers/burgers_controllers.js");

var PORT = process.env.PORT || 8080;

var app = express();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


app.use(routes);

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});

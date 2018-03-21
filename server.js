const express = require("express");
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");

const app = express();
app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

require("./routes/burger-api-routes")(app);

const PORT = process.env.PORT || 3000;
require("./models")
  .sequelize.sync({ force: false })
  .then(() =>
    app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`))
  );

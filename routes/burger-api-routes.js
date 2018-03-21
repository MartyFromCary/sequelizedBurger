const db = require("../models");

module.exports = app => {
  app.get("/", (req, res) =>
    db.Burger.findAll()
      .then(burgers => res.render("index", { burgers }))
  );

  app.post("/", (req, res) =>
    db.Burger.create({ burger_name: req.body.burger_name })
      .then(data => res.end())
  );

  app.put("/", (req, res) =>
    db.Burger.update(
      { devoured: true },
      { where: { id: req.body.id } }
    ).then(data => res.end())
  );
};

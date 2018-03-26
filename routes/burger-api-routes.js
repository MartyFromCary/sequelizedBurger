const db = require("../models");

module.exports = app => {
  app.get("/", (req, res) =>
    db.Burger.findAll({ include: [db.DevouredBy], order: [["id"]] }).then(
      burgers => res.render("index", { burgers })
    )
  );

  app.get("/eater/:id", (req, res) => {
    console.log(req.params.id);
    db.DevouredBy.findAll().then(eaters =>
      res.render("devour", { burger_id: req.params.id, eaters })
    );
  });

  app.post("/new_burger", (req, res) =>
    db.Burger.create({ name: req.body.name }).then(data => res.end())
  );

  app.post("/new_cust", (req, res) =>
    db.DevouredBy.create({ name: req.body.name }).then(data => res.end())
  );

  app.put("/", (req, res) => {
    console.log(req.body);
    db.Burger.update(
      { devoured: true, DevouredById: req.body.DevouredById },
      { where: { id: req.body.id } }
    ).then(data => res.redirect("/"));
  });
};

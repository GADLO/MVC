const { getData, getItem } = require("../model/index");

function indexView(req, res) {
  const { title, lists } = getData();

  res.render("MVC", {
    title,
    lists,
  });
}

function detailView(req, res) {
  const { id } = req.params;
  const { item } = getItem(id);

  res.render("detail", { item });
}

module.exports = {
  indexView,
  detailView,
};

console.log("controller  ready");

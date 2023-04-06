const { resolve } = require("path");
const { readFileSync } = require("fs");

function getData() {
  const data = JSON.parse(
    readFileSync(resolve(__dirname, "./data.json"), "utf-8")
  );
  const { title, lists } = data;

  return {
    title,
    lists,
  };
}

function getItem(id) {
  const { lists } = JSON.parse(
    readFileSync(resolve(__dirname, "./data.json"), "utf-8")
  );
  const item = lists.find((item) => item.id == id);

  return { item };
}

module.exports = {
  getData,
  getItem,
};

console.log("model ready");
